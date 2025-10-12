import { useSessionStore } from "../context/SessionStore";
import { sendMessageToAI } from "../hooks/useAI";

const budgetOptions = [
  {
    id: "low",
    title: "Budget Friendly",
    icon: "💸",
  },
  {
    id: "high",
    title: "Extravagant",
    icon: "💎",
  },
];

const TripDurationOptions = [
  {
    id: "short",
    title: "1-3 days",
    icon: "🗓️",
  },
  {
    id: "medium",
    title: "4-7 days",
    icon: "📅",
  },
  {
    id: "long",
    title: "8+ days",
    icon: "🗓️➕",
  },
];

const OccasionOptions = [
  {
    id: "birthday",
    title: "Birthday",
    icon: "🎂",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    icon: "💍",
  },
  {
    id: "wedding",
    title: "Wedding",
    icon: "👰",
  },
  {
    id: "graduation",
    title: "Graduation",
    icon: "🎓",
  },
  {
    id: "holiday",
    title: "Holiday",
    icon: "🎉",
  },
];

const GenerativeCardsMapper = {
  budget: budgetOptions,
  tripDuration: TripDurationOptions,
  occasion: OccasionOptions,
};

export type GenerativeCardKeys = keyof typeof GenerativeCardsMapper;

const BudgetCards = ({ uiElement }: { uiElement: GenerativeCardKeys }) => {
  const { addMessage } = useSessionStore();
  const GenerativeCards = GenerativeCardsMapper[uiElement] || [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md: gap-2 mt-4">
      {GenerativeCards.map((option) => (
        <div key={option.id} className="h-full">
          <div
            key={option.id}
            className="border p-1 rounded-lg shadow-md mb-2 cursor-pointer hover:bg-gray-100 flex items-center flex-col gap-3 w-full flex-1"
            onClick={() => {
              addMessage({
                sender: "user",
                text: option.title,
              });
              sendMessageToAI();
            }}
          >
            <div className="text-lg">{option.icon}</div>
            <div className="font-semibold text-center">{option.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetCards;
