import React from "react";
import { FaHistory } from "react-icons/fa";
import Header from "./Header";
import SelectionTab from "./SelectionTab";
import TailwindDevTool from "./TailwindDevTool";
import {
  useSessionStore,
  type AgentType,
  type Message,
} from "../context/SessionStore";
import type { SummaryProps } from "./TravelSummaryDisplay";

export interface HistoryProps {
  agentTheme: AgentType;
  messages: Message[];
  summary: SummaryProps;
}

const HistoryDisplay = ({
  history = [],
  setShowHistory,
}: {
  history: HistoryProps[];
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setSummary, setMessages, setAgentType } = useSessionStore();
  return (
    <div className="p-4 bg-primaryColor min-h-screen w-full flex flex-col gap-1">
      <Header setShowHistory={setShowHistory} />
      <div className=" text-gray-800 w-full md:max-w-[80%] m-auto flex-1">
        <h2 className="text-2xl font-bold mb-4">Chat History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {history.map((data) => (
            <SelectionTab
              text={data?.summary?.destination}
              Icon={FaHistory}
              onClick={() => {
                setMessages(data.messages);
                setSummary(data.summary);
                setAgentType(data?.agentTheme);
                setShowHistory(false);
              }}
            />
          ))}
        </div>
      </div>
      <TailwindDevTool />
    </div>
  );
};

export default HistoryDisplay;
