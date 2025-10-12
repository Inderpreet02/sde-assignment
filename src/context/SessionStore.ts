import { create } from "zustand";

export interface Message {
  sender: "user" | "assistant";
  text: string;
}

interface SessionState {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export const useSessionStore = create<SessionState>((setter) => ({
  messages: [
    {
      sender: "assistant",
      text: "Hello! How can I assist you today?",
    },
    {
      sender: "user",
      text: "Hi! I have a question about your services.",
    },
  ],
  addMessage: (message) =>
    setter((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => setter({ messages: [] }),
}));
