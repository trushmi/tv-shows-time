import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>Made with ❤️</div>
      <div>
        Author:
        <a
          href="https://www.linkedin.com/in/mariia-iryna-trush/"
          target="blank"
          className={styles.footerLink}
        >
          Iryna Trush;
        </a>
        Source:
        <a
          href="https://www.tvmaze.com/"
          target="blank"
          className={styles.footerLink}
        >
          TVmaze.com
        </a>
      </div>
      <div>Contact: code94041@gmail.com</div>
    </div>
  );
}
