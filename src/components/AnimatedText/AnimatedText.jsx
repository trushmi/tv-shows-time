import React from "react";
import styles from "./AnimatedText.module.scss";
const AnimatedText = ({ text }) => {
  return (
    <div className={styles.animatedContainer}>
      <div className={styles.animatedText}>{text}</div>
    </div>
  );
};

export default AnimatedText;
