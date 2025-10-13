import { useEffect } from "react";
import { useSessionStore } from "../context/SessionStore";

export const useHistory = () => {
  // Placeholder for future history-related logic
  const { setHistory } = useSessionStore();
  useEffect(() => {
    const existingHistory = localStorage.getItem("chat_history");
    if (existingHistory) {
      try {
        const historyArray = JSON.parse(existingHistory);
        setHistory(historyArray);
      } catch (error) {
        console.error("Failed to parse chat history from localStorage:", error);
      }
    }
  }, []);
  return {};
};
