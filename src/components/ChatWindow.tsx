import { useSessionStore } from "../context/SessionStore";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  const { messages } = useSessionStore();
  console.log(messages, "LOL");
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 m-auto min-w-[70%] min-h-[70%]">
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
