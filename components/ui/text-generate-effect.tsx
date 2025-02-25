"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words1,
  words2,
  words3,
  className,
}: {
  words1: string;
  words2: string;
  words3: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray1 = words1.split(" "); // Changed to const
  const wordsArray2 = words2.split(" "); // Changed to const
  const wordsArray3 = words3.split(" "); // Changed to const

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope, animate]); // Include animate in the dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray1.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-black-5 opacity-0 " // Start with opacity 0
          >
            {word}{" "}
          </motion.span>
        ))}
        {wordsArray2.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-black-5 opacity-0" // Start with opacity 0
          >
            {word}{" "}
          </motion.span>
        ))}
        {wordsArray3.map((word, idx) => (
          <motion.span
            key={word + idx}
            className=" text-white leading-tight bg-clip-text opacity-0" // Start with opacity 0
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <h1 className="dark:text-white  text-white font-extrabold  text-4xl sm:text-5xl lg:text-6xl  mb-6 drop-shadow-md ">
          {renderWords()}
        </h1>
      </div>
    </div>
  );
};
