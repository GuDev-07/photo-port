import { useCallback, useEffect, useState } from "react";

interface Options {
  total: number;
  autoPlayInterval?: number;
}

export function useCarousel({ total, autoPlayInterval = 5000 }: Options) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(
    () => setCurrent((i) => (i === 0 ? total - 1 : i - 1)),
    [total],
  );

  const next = useCallback(
    () => setCurrent((i) => (i === total - 1 ? 0 : i + 1)),
    [total],
  );

  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    if (!autoPlayInterval || paused) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [next, autoPlayInterval, paused]);

  return { current, prev, next, goTo, setPaused };
}
