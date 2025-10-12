import { useSessionStore } from "../context/SessionStore";
import OpenAI from "openai";
import { GIFT_RECOMMENDER_PROMPT, TRAVE_AGENT_PROMPT } from "../prompts";
import { formattedMessages, formatToValidMessage } from "../helpers";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});
console.log("init openAI");

const sendMessageToAI = async () => {
  const { addMessage, messages, agentTheme } = useSessionStore.getState();
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            agentTheme === "travelAgent"
              ? TRAVE_AGENT_PROMPT
              : GIFT_RECOMMENDER_PROMPT,
        },
        ...formattedMessages(messages),
      ],
    });
    console.log(agentTheme, completion?.choices?.[0]?.message?.content);
    addMessage(
      formatToValidMessage(completion?.choices?.[0]?.message?.content)
    );
  } catch {
    addMessage({
      sender: "assistant",
      text: "Error: Unable to fetch response.",
    });
  }
};

export { sendMessageToAI };
