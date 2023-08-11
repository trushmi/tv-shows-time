import React, { useState, useEffect } from "react";
import styles from "./AnimatedText.module.scss";
const AnimatedText = ({ text }) => {
  const animationDelay = 100;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === text.length ? 0 : prevIndex + 1
      );
    }, animationDelay);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  const animatedText = text.substring(0, currentTextIndex);

  return (
    <div className={styles.animatedContainer}>
      <div className={styles.animatedText}>{animatedText}</div>
    </div>
  );
};

export default AnimatedText;
