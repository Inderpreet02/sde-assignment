import { useEffect, useRef } from "react";

export const useScrollToView = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  });

  return { listRef };
};
