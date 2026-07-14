import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";

interface TypewriterTextProps {
  text: string;
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseAfterType?: number;
  pauseAfterErase?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  typeSpeed,
  eraseSpeed,
  pauseAfterType,
  pauseAfterErase,
}) => {
  const displayed = useTypewriter(text, {
    typeSpeed,
    eraseSpeed,
    pauseAfterType,
    pauseAfterErase,
  });

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-white ml-1 animate-pulse align-middle" />
    </span>
  );
};
