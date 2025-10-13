import { create } from "zustand";
import type { AGENT_TYPE } from "../constants";
import type { GenerativeCardKeys } from "../ui-templates/GenerativeUICard";
import type { SummaryProps } from "../components/TravelSummaryDisplay";
import type { HistoryProps } from "../components/HistoryDisplay";

export interface Message {
  sender: "user" | "assistant";
  text: string;
  isMessageLoading?: boolean;
  ui?: GenerativeCardKeys;
}

export type AgentType = (typeof AGENT_TYPE)[keyof typeof AGENT_TYPE] | null;

interface SessionState {
  messages: Message[];
  agentTheme: AgentType;
  history: HistoryProps[];
  summary: SummaryProps;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  setAgentType: (type: AgentType) => void;
  clearAgentType: () => void;
  isMessageLoading: boolean;
  setIsMessageLoading: (isLoading: boolean) => void;
  setSummary: (summary: SummaryProps) => void;
  setHistory: (history: HistoryProps[]) => void;
  setMessages: (messages: Message[]) => void;
}

export const useSessionStore = create<SessionState>((setter) => ({
  agentTheme: null,
  messages: [],
  summary: {} as SummaryProps,
  history: [],
  isMessageLoading: false,
  addMessage: (message) =>
    setter((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => setter({ messages: [] }),
  setAgentType: (type: AgentType) => setter({ agentTheme: type }),
  clearAgentType: () => setter({ agentTheme: null }),
  setIsMessageLoading: (isLoading: boolean) =>
    setter({ isMessageLoading: isLoading }),
  setSummary: (summary: SummaryProps) => setter({ summary: summary }),
  setHistory: (history: HistoryProps[]) => setter({ history: history }),
  setMessages: (messages: Message[]) => setter({ messages: [...messages] }),
}));
