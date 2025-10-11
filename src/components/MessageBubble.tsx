import type { Message } from "../context/SessionStore";

const MessageBubble = ({ sender, text }: Message) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[70%] p-3 rounded-2xl ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"
        }`}
      ></div>
      {text}
    </div>
  );
};

export default MessageBubble;
