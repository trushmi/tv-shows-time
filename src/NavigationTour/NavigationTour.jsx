import React from "react";
import styles from "./NavigationTour.module.scss";

const NavigationTour = () => {
  return (
    <div className={styles.navigationInfo}>
      <div className={`${styles.descriptionPopup} ${styles.searchInfo}`}>
        Search for any TV show you've watched.
      </div>

      <div className={`${styles.descriptionPopup} ${styles.tvShowInfo}`}>
        Don't feel like searching? Here's a quick list of the top 155 TV shows
        that IMDb users love. All you need to do is select a TV show{" "}
      </div>

      <div className={`${styles.descriptionPopup} ${styles.projectInfo}`}>
        Find out more about project
      </div>

      <div className={`${styles.descriptionPopup} ${styles.timeInfo}`}>
        Check out how many hours you've spent watching TV shows. The counter
        updates each time you add a new show.{" "}
      </div>
      <div className={`${styles.descriptionPopup} ${styles.resetBtn}`}>
        Want to start over? Click on this reset icon
      </div>
    </div>
  );
};

export default NavigationTour;
