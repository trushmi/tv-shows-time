import React from "react";
import TimeCounerBlock from "./TimeCounterBlock";
import styles from "./TimeCounter.module.scss";

const convertTime = (time) => {
  let hours = Math.floor(time / 60);
  let minutes = time >= 60 ? time % 60 : time;
  let days = Math.floor(hours / 24);
  hours = hours >= 24 ? hours % 24 : hours;

  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
  };
};

export default function TimeCounter({ totalMinutes }) {
  const { days, hours, minutes } = convertTime(totalMinutes);
  return (
    <div className={styles.container}>
      <TimeCounerBlock title="Days" numberString={days} />
      <TimeCounerBlock title="Hours" numberString={hours} />
      <TimeCounerBlock title="Minutes" numberString={minutes} />
    </div>
  );
}
