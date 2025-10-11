import { useSessionStore } from "../context/SessionStore";

const sendMessageToAI = async (prompt: string) => {
  const { addMessage } = useSessionStore.getState();

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        message: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "No response.";
    addMessage({ sender: "bot", text });
  } catch {
    addMessage({ sender: "bot", text: "Error: Unable to fetch response." });
  }
};

export { sendMessageToAI };
