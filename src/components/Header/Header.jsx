import React from "react";
import styles from "./header.module.scss";
import TimeCounter from "../TimeCounter/TimeCounter";
import { ImSpinner11 } from "react-icons/im";
import { ImInfo } from "react-icons/im";

export default function Header({
  totalMin,
  setTotalMin,
  selectedTvShows,
  setSelectedTvShows,
}) {
  const resetData = () => {
    setSelectedTvShows(new Map());
    setTotalMin(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <TimeCounter totalMinutes={totalMin} />
        <div className={styles.showInfoBlock}>
          <ImInfo className={styles.informationIcon} />
          <div className={styles.showInfoText}>
            Days are shown in 24 hours format. Total time can differ by 10%;
          </div>
        </div>
      </div>
      <section className={styles.selectedBlock}>
        <div className={styles.selectedShowsText}>
          Selected:{selectedTvShows.size + "/150"}
        </div>
        <ImSpinner11
          className={styles.startOverBtn}
          onClick={() => resetData()}
        />
      </section>
    </div>
  );
}
