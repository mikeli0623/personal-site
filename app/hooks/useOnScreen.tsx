import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  threshold = 1
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { threshold }
    );
  }, [threshold]);

  useEffect(() => {
    if (ref.current) {
      observerRef.current?.observe(ref.current);

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [ref]);

  return isOnScreen;
}
