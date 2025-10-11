import { useSessionStore } from "../context/SessionStore";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  const { messages } = useSessionStore();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message, index) => (
        <MessageBubble
          key={message.sender + index}
          sender={message.sender}
          text={message.text}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
