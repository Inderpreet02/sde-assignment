import { useSessionStore } from "../context/SessionStore";
import { useScrollToView } from "../hooks/useScrollToView";
import MessageBubble from "./MessageBubble";
import { AGENT_TYPE, popularQuestions } from "../constants";
import SelectionTab from "./SelectionTab";
import TravelSummaryDisplay from "./TravelSummaryDisplay";

const ChatWindow = () => {
  const { messages, agentTheme, isMessageLoading, summary } = useSessionStore();
  const { listRef } = useScrollToView();
  return (
    <div
      className="flex-1 overflow-x-auto scrollbar m-auto w-full md:max-w-[80%] max-h-[calc(100vh-200px)]"
      ref={listRef}
    >
      {messages.length === 0
        ? popularQuestions[agentTheme ?? ""].map((props) => (
            <SelectionTab {...props} />
          ))
        : messages.map((message, index) => (
            <MessageBubble
              key={message.sender + index}
              sender={message.sender}
              text={message.text}
              ui={message?.ui}
            />
          ))}
      {isMessageLoading ? (
        <div className="shimmer text-2xl p-2 font-bold">Thinking...</div>
      ) : null}

      {agentTheme === AGENT_TYPE.TRAVEL ? (
        <TravelSummaryDisplay summary={summary} />
      ) : (
        <div>Summary To be implemented</div>
      )}
    </div>
  );
};

export default ChatWindow;
