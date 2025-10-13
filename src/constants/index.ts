import { GrRestroomWomen } from "react-icons/gr";
import { LuBaby } from "react-icons/lu";
import { MdAddLocationAlt } from "react-icons/md";
import { RiPlaneLine } from "react-icons/ri";
import { sendMessageToAI } from "../hooks/useAI";
import { useSessionStore } from "../context/SessionStore";

export const AGENT_TYPE = {
  TRAVEL: "travelAgent",
  GIFT: "giftRecommender",
};

const { addMessage } = useSessionStore.getState();

// Needs Refactor
export const popularQuestions = {
  [AGENT_TYPE.TRAVEL]: [
    {
      text: "Plan a trip to Paris.....",
      Icon: RiPlaneLine,
      onClick: () => {
        addMessage({
          sender: "user",
          text: "Plan a trip to Paris",
        });
        sendMessageToAI();
      },
    },
    {
      text: "Find me a hidden gem location.",
      Icon: MdAddLocationAlt,
      onClick: () => {
        addMessage({
          sender: "user",
          text: "Find me a hidden gem location",
        });
        sendMessageToAI();
      },
    },
  ],
  [AGENT_TYPE.GIFT]: [
    {
      text: "Find a gift for my 5 year old nephew.",
      Icon: LuBaby,
      onClick: () => {
        addMessage({
          sender: "user",
          text: "Find a gift for my 5 year old nephew",
        });
        sendMessageToAI();
      },
    },
    {
      text: "Suggest a birthday gift for my wife.",
      Icon: GrRestroomWomen,
      onClick: () => {
        addMessage({
          sender: "user",
          text: "Suggest a birthday gift for my wife",
        });
        sendMessageToAI();
      },
    },
  ],
};

export const FLIGHTS_URL = "https://www.google.com/travel/flights";

export const ITEM_URL =
  "https://www.swiggy.com/instamart/search?custom_back=true&query=";

export const MAPS_URL = "https://www.google.com/maps/search/";
