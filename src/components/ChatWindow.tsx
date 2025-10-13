import { useSessionStore } from "../context/SessionStore";
import { useScrollToView } from "../hooks/useScrollToView";
import MessageBubble from "./MessageBubble";
import { popularQuestions } from "../constants";
import SelectionTab from "./SelectionTab";
import ChatSummaryDisplay from "./ChatSummaryDisplay";

const ChatWindow = () => {
  const { messages, agentTheme, isMessageLoading, summary } = useSessionStore();

  const { listRef } = useScrollToView();
  return (
    <div
      className="flex-1 overflow-x-auto m-auto w-full md:max-w-[80%] max-h-[calc(100vh-200px)]"
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

      <ChatSummaryDisplay summary={summary} />
    </div>
  );
};

export default ChatWindow;
