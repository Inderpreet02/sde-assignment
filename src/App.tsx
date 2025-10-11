import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className="p-4 bg-BgLight dark:bg-BgDark min-h-screen w-full">
      <ChatWindow />
      <InputBox />
    </div>
  );
}

export default App;
