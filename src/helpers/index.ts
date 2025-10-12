import type { Message } from "../context/SessionStore";

export const formatToValidMessage = (rawResponse: string | null) => {
  try {
    if (!rawResponse) throw new Error("No response received");

    const text = JSON.parse(rawResponse ?? "");
    return {
      sender: "assistant",
      text: text?.resp || "No response.",
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
