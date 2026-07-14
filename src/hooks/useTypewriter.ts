import { useEffect, useState } from "react";

interface Options {
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseAfterType?: number;
  pauseAfterErase?: number;
}

export function useTypewriter(text: string, options: Options = {}) {
  const {
    typeSpeed = 80,
    eraseSpeed = 40,
    pauseAfterType = 2000,
    pauseAfterErase = 500,
  } = options;

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        timeoutId = setTimeout(erase, pauseAfterType);
        return;
      }
      timeoutId = setTimeout(tick, typeSpeed);
    };

    const erase = () => {
      if (i > 0) {
        i--;
        setDisplayed(text.slice(0, i));
        timeoutId = setTimeout(erase, eraseSpeed);
      } else {
        timeoutId = setTimeout(tick, pauseAfterErase);
      }
    };

    timeoutId = setTimeout(tick, pauseAfterErase);

    return () => clearTimeout(timeoutId);
  }, [text, typeSpeed, eraseSpeed, pauseAfterType, pauseAfterErase]);

  return displayed;
}
