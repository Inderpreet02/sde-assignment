import { create } from "zustand";
import type { AGENT_TYPE } from "../constants";
import type { GenerativeCardKeys } from "../ui-templates/BudgetCard";

export interface Message {
  sender: "user" | "assistant";
  text: string;
  ui?: GenerativeCardKeys;
}

export type AgentType = (typeof AGENT_TYPE)[keyof typeof AGENT_TYPE] | null;

interface SessionState {
  messages: Message[];
  agentTheme: AgentType;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  setAgentType: (type: AgentType) => void;
  clearAgentType: () => void;
}

export const useSessionStore = create<SessionState>((setter) => ({
  agentTheme: null,
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
  setAgentType: (type: AgentType) => setter({ agentTheme: type }),
  clearAgentType: () => setter({ agentTheme: null }),
}));
