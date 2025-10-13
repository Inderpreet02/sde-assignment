import { useState } from "react";
import { useSessionStore } from "../context/SessionStore";
import { sendMessageToAI } from "../hooks/useAI";

const InputBox = () => {
  const { addMessage } = useSessionStore();
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage({ sender: "user", text: input });
    sendMessageToAI();
    setInput("");
  };
  return (
    <form
      className="w-full lg:max-w-[80%] flex gap-2 justify-center items-center m-auto"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => handleInput(e)}
        type="text"
        tabIndex={0}
        id="search-input"
        autoComplete="off"
        className="text-black w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
        placeholder="Type Here"
        value={input}
      />
      <button
        type="submit"
        className="bg-primaryColor text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </form>
  );
};
export default InputBox;
