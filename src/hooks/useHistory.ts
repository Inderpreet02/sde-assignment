import { useEffect } from "react";
import { useSessionStore } from "../context/SessionStore";

export const useHistory = () => {
  // Placeholder for future history-related logic
  const { setHistory, history } = useSessionStore();
  useEffect(() => {
    const existingHistory = localStorage.getItem("chat_history");
    // console.log(existingHistory, "existingHistory");
    if (existingHistory) {
      try {
        const historyArray = JSON.parse(existingHistory);
        console.log(historyArray, "historyArray");
        setHistory(historyArray);
      } catch (error) {
        console.error("Failed to parse chat history from localStorage:", error);
      }
    }
    console.log(history);
  }, []);
  return {};
};
