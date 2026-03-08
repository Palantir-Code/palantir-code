import { useState, useEffect } from "react";

interface TypewriterTitleProps {
  text: string;
  highlightText?: string;
  className?: string;
  speed?: number;
  highlightSpeed?: number;
}

const TypewriterTitle = ({
  text,
  highlightText,
  className = "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
  speed = 50,
  highlightSpeed = 100,
}: TypewriterTitleProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightDisplayed, setHighlightDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setShowHighlight(false);
    setHighlightDisplayed("");
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        if (highlightText) {
          setShowHighlight(true);
          let highlightIndex = 0;
          const highlightInterval = setInterval(() => {
            if (highlightIndex < highlightText.length) {
              setHighlightDisplayed(highlightText.slice(0, highlightIndex + 1));
              highlightIndex++;
            } else {
              clearInterval(highlightInterval);
            }
          }, highlightSpeed);
        }
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, highlightText, speed, highlightSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const isTypingDone = displayedText.length === text.length && 
    (!highlightText || highlightDisplayed.length === highlightText.length);

  return (
    <h1 className={`${className} min-h-[1.2em]`}>
      {displayedText}
      {showHighlight && highlightText && (
        <span className="text-primary">{highlightDisplayed}</span>
      )}
      <span
        className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle"
        style={{ opacity: showCursor && !isTypingDone ? 1 : isTypingDone ? (showCursor ? 1 : 0) : 0 }}
      />
    </h1>
  );
};

export default TypewriterTitle;
