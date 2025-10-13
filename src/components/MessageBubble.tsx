import { type Message } from "../context/SessionStore";
import GenerativeUiCard from "../ui-templates/GenerativeUICard";

const MessageBubble = ({ sender, text, ui }: Message) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[90%] p-3 rounded-2xl typewriter ${
          isUser ? "bg-secondaryColor text-primaryColor mb-20" : ""
        }`}
      >
        {text}
        <div>{ui ? <GenerativeUiCard uiElement={ui} /> : null}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
