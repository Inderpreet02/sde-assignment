import { AiFillGift } from "react-icons/ai";
import ChatWindow from "./components/ChatWindow";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import SelectionTab from "./components/SelectionTab";
import TailwindDevTool from "./components/TailwindDevTool";
import { useSessionStore } from "./context/SessionStore";
import { FaPlaneDeparture } from "react-icons/fa";
import { AGENT_TYPE } from "./constants";
import { useHistory } from "./hooks/useHistory";
import { useState } from "react";
import HistoryDisplay from "./components/HistoryDisplay";

function App() {
  const { agentTheme, setAgentType, history } = useSessionStore();
  const [showHistory, setShowHistory] = useState(false);
  useHistory();
  const sectionOptions = [
    {
      text: "Plan a trip to your dream destination with our AI travel agent.",
      Icon: FaPlaneDeparture,
      onClick: () => {
        setAgentType(AGENT_TYPE.TRAVEL);
      },
    },
    {
      text: "Find the best present for your loved ones with our gift recommendation AI.",
      Icon: AiFillGift,
      onClick: () => {
        setAgentType(AGENT_TYPE.GIFT);
      },
    },
  ];
  if (showHistory) {
    return <HistoryDisplay history={history} setShowHistory={setShowHistory} />;
  }
  return (
    <div className="p-4 dark:bg-primaryColor min-h-screen w-full flex flex-col align-center gap-1">
      <Header setShowHistory={setShowHistory} />
      {agentTheme ? (
        <>
          <ChatWindow />
          <InputBox />
        </>
      ) : (
        <div className="lg:max-w-[50%] flex flex-1 flex-col justify-center items-center text-gray-500 m-auto">
          {sectionOptions.map((props) => (
            <SelectionTab {...props} key={props.text} />
          ))}
        </div>
      )}
      <TailwindDevTool />
    </div>
  );
}

export default App;
