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
