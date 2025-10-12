import { useSessionStore } from "../context/SessionStore";
import { useScrollToView } from "../hooks/useScrollToView";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  const { messages } = useSessionStore();
  console.log(messages, "LOL");

  const { listRef } = useScrollToView();
  return (
    <div
      className="flex-1 overflow-x-auto space-y-3 m-auto w-full lg:max-w-[80%] max-h-[calc(100vh-200px)]"
      ref={listRef}
    >
      {messages.map((message, index) => (
        <MessageBubble
          key={message.sender + index}
          sender={message.sender}
          text={message.text}
          ui={message?.ui}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
