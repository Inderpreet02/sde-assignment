import { useSessionStore } from "../context/SessionStore";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});
console.log("init openAI");

const PROMPT = `You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by **asking one relevant trip-related question at a time**.

 Only ask questions about the following details in order, and wait for the user’s answer before asking the next: 

1. Starting location (source) 
2. Destination city or country 
3. Group size (Solo, Couple, Family, Friends) 
4. Budget (Low, Medium, High) 
5. Trip duration (number of days) 
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation) 
7. Special requirements or preferences (if any)
Do not ask multiple questions at once, and never ask irrelevant questions.
If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.
Along wth response also send which ui component to display for generative UI for example 'budget/groupSize/TripDuration/Final) , where Final means AI generating complete final outpur
Once all required information is collected, generate and return a **strict JSON response only** (no explanations or extra text) with following JSON schema:
{
  resp:'Text Resp',
  ui:'budget/groupSize/TripDuration/Final)'
}
`;

const sendMessageToAI = async () => {
  const { addMessage, messages } = useSessionStore.getState();
  try {
    const formattedMessages = messages.map((msg) => ({
      role: msg.sender as "user" | "assistant",
      content: msg.text,
    }));

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: PROMPT,
        },
        ...formattedMessages,
      ],
    });

    const text = await JSON.parse(
      completion?.choices?.[0]?.message?.content ?? ""
    );
    console.log(text, "LOL1");

    addMessage({ sender: "assistant", text: text?.resp || "No response." });
  } catch {
    addMessage({
      sender: "assistant",
      text: "Error: Unable to fetch response.",
    });
  }
};

export { sendMessageToAI };
