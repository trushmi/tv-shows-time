import React from "react";
import styles from "./ReadMoreModal.module.scss";
import { CgClose } from "react-icons/cg";

export default function ReadMoreModal({ onRequestClose }) {
  return (
    <div className={styles.seasonWpapper}>
      <div className={styles.title}>How it works?</div>
      <div className={styles.text}>
        On this website you can find 150 the most popular TV shows over the last
        30 years with the highest rating on IMDb; Here is how it works:
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 1: Select</div>
          <div className={styles.stepsText}>
            In order to select the show just click on it. Change your mind?
            Click once again and show will be unselected.
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 2: Double check</div>
          <div className={styles.stepsText}>
            Not sure if you have seen this one? Click on the IMDb icon on the
            right top corner of poster and find out more about a particular TV
            show;
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>
            Step 3: Click on the edit icon
          </div>
          <div className={styles.stepsText}>
            By default when you click on a show, the program counts that you
            have seen it once and you have watched all seasons. But what if it
            is not the case? What if you have seen only 5 seasons from 11 or
            seen the show not once, but 3 times? Click on the edit icon and you
            will be able to change data.
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 4: Edit data</div>
          <div className={styles.stepsText}>
            If you press on the edit icon you can unchecked seasons you haven't
            seen and change the number of times you have seen show.
          </div>
        </section>
        {/* <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 5: Search</div>
          <div className={styles.stepsText}>
            If there is no your favorite TV show on a list, you can use the
            search box. Just simply write the name and choose the right one from
            the list. Press the button add and your information will be added to
            the counter.
          </div>
        </section> */}
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 6: Track your total </div>
          <div className={styles.stepsText}>
            The information on how much time you spent watching TV shows always
            on the screen. It updates every time you add or remove a show on
            your list or change the number of times and seasons you have
            watched. If you want to start over press the reset button.
          </div>
        </section>
        {/* <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>
            Step 7: Click on inspiring icon
          </div>
          <div className={styles.stepsText}>
            See this lamp icon on the right top corner next to your total? Click
            on it and get information about what you could do with this time if
            you weren't watching TV shows.
          </div>
        </section> */}
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}>Step 8: Share</div>
          <div className={styles.stepsText}>
            Help more people to discover how much time they spend watching TV.
            Share this website among your friends and family. This project was
            made by Iryna Trush in order to increase awareness about how much
            time the person spent watching TV and as remaining that it is not
            free. The price you are paying is your time. Remember: your time is
            valuable.
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsTitle}> What else should you know?</div>
          <div className={styles.stepsText}>
            To calculate the result program uses the number of seasons, how many
            episodes every season has and average duration of one episode. If
            the TV show is still running, the program calculates the number of
            episodes that have been shown as on January 23, 2023; If you have
            any question regards to this project please write the message to
            code94041@gmail.com
          </div>
        </section>
        <div onClick={onRequestClose} className={styles.closeBtn}>
          <CgClose />
        </div>
      </div>
    </div>
  );
}
