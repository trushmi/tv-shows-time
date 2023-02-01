import React from "react";
import styles from "./TimeCounterBlock.module.scss";

export default function TimeCounterBlock({ title, numberString }) {
  return (
    <div className={styles.countSection}>
      <div className={styles.timeContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.figureBlock}>
          {numberString.split("").map((digit, index) => (
            <div className={styles.figure1} key={index}>
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
