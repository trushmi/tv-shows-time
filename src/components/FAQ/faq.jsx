import React from "react";
import styles from "./faq.module.scss";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Ever wondered how much time you've spent watching TV shows?
      </h1>
      <p className={styles.intro}>Let's find out!</p>
      <ul className={styles.list}>
        <li>
          Choose your favorite TV shows, and see the total days, hours, and
          minutes you've dedicated to them.
        </li>
        <li>
          Wondering how? Use the{" "}
          <Link to="/search" className={styles.link}>
            search page
          </Link>
          , choose from a{" "}
          <Link to="/tvshows155" className={styles.link}>
            curated list of top TV shows
          </Link>
          , or mix and match both methods! If a show seems familiar but you
          can't quite remember it, click on the IMDb icon on its poster for more
          details.
        </li>
        <li>
          Whenever you add a show, the calculator updates automatically. You can
          specify the number of times you've watched it or which seasons you've
          seen. Want to start again? Simply hit the reset button.
        </li>
      </ul>
      <h2 className={styles.subHeading}>How Does The Calculator Work?</h2>
      <p>
        It uses{" "}
        <a href="https://www.tvmaze.com/api" className={styles.emailLink}>
          TVMaze
        </a>{" "}
        data ; The tool considers the number of seasons, episodes in each
        season, and the average episode duration. For series still on air, data
        up to August 10, 2023, is included. The list of TV shows receives
        updates every 6 months, while search data is consistently updated by
        TVMaze. Please note, the data might vary by up to 10%. This tool is
        exclusively for calculating time spent on TV shows, not movies.
      </p>
      <h2 className={styles.subHeading}>Feedback or Questions?</h2>
      <p>
        Eager to help! Reach out at {""}
        <a href="mailto:trushmi415@gmail.com" className={styles.emailLink}>
          trushmi415@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
