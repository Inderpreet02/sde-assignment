import { useSessionStore } from "../context/SessionStore";
import OpenAI from "openai";
import {
  formattedMessages,
  formatToValidMessage,
  promptSelector,
} from "../helpers";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});

const sendMessageToAI = async (isFinalMessage: boolean = false) => {
  const { addMessage, messages, agentTheme, setIsMessageLoading, setSummary } =
    useSessionStore.getState();
  setIsMessageLoading(true);
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: promptSelector(isFinalMessage, agentTheme ?? ""),
        },
        ...formattedMessages(messages),
      ],
    });
    console.log(agentTheme, completion?.choices?.[0]?.message?.content);
    if (isFinalMessage) {
      const content = JSON.parse(
        completion?.choices?.[0]?.message?.content ?? ""
      );
      setSummary(content?.trip_plan);
    } else {
      addMessage(
        formatToValidMessage(completion?.choices?.[0]?.message?.content)
      );
    }
  } catch {
    addMessage({
      sender: "assistant",
      text: "Error: Unable to fetch response.",
    });
  } finally {
    setIsMessageLoading(false);
  }
};

export { sendMessageToAI };
