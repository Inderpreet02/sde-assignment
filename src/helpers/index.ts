import { AGENT_TYPE } from "../constants";
import { useSessionStore, type Message } from "../context/SessionStore";
import {
  TRAVE_AGENT_SUMMARY_PROMPT,
  TRAVE_AGENT_PROMPT,
  GIFT_RECOMMENDER_PROMPT,
  GIFT_RECOMMENDER_SUMMARY_PROMPT,
} from "../prompts";

export const formatToValidMessage = (rawResponse: string | null) => {
  try {
    if (!rawResponse) throw new Error("No response received");

    const text = JSON.parse(rawResponse ?? "");
    return {
      sender: "assistant",
      text: text?.resp || "No response. Please try again!!!!",
      ...(text?.ui && { ui: text?.ui }),
    };
  } catch (error) {
    console.error("Failed to parse message:", error);
    return { resp: "Error: Unable to parse response.", sender: "assistant" };
  }
};

export const formattedMessages = (messages: Message[]) =>
  messages.map((msg) => ({
    role: msg.sender as "user" | "assistant",
    content: msg.text,
  }));

export const promptSelector = (isFinalMessage: boolean, agentTheme: string) => {
  if (!agentTheme) return "";

  if (isFinalMessage) {
    return agentTheme === AGENT_TYPE.TRAVEL
      ? TRAVE_AGENT_SUMMARY_PROMPT
      : GIFT_RECOMMENDER_SUMMARY_PROMPT;
  }
  return agentTheme === AGENT_TYPE.TRAVEL
    ? TRAVE_AGENT_PROMPT
    : GIFT_RECOMMENDER_PROMPT;
};

export const saveToLocalStorage = () => {
  const { agentTheme, messages, summary } = useSessionStore.getState();

  const existingHistory = localStorage.getItem("chat_history");
  try {
    localStorage.setItem(
      "chat_history",
      JSON.stringify([
        ...(existingHistory ? JSON.parse(existingHistory) : {}),
        {
          agentTheme: agentTheme,
          messages: messages,
          summary: summary,
        },
      ])
    );
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};
