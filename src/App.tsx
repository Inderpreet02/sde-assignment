import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";

function App() {
  
  return (
    <div className="p-4 bg-BgLight dark:bg-primaryColor min-h-screen w-full flex flex-col align-center gap-1">
      {/* <img
        src="https://play-lh.googleusercontent.com/SwtThQq2i2sn6OlurfvWdXhb0ecp6zma7CHIJ_-73TBwo6fhVFfiC1lQVzMvNC1TBw=w600-h300-pc0xffffff-pd"
        alt="logo-url"
      /> */}
      <ChatWindow />
      <InputBox />
    </div>
  );
}

export default App;
