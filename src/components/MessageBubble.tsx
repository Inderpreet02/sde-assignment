import type { Message } from "../context/SessionStore";

const MessageBubble = ({ sender, text }: Message) => {
  const isUser = sender === "user";
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start border-t-1 border-gray-300"
      } mb-2`}
    >
      <div
        className={`max-w-[70%] p-3 rounded-2xl ${
          isUser ? "bg-secondaryColor text-primaryColor mb-20" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
