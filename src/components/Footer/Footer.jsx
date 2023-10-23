import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/trushmi/"
          target="blank"
          className={styles.footerLink}
        >
          Iryna Trush
        </a>
      </div>
      <div>
        Source:
        <a
          href="https://www.tvmaze.com/"
          target="blank"
          className={styles.footerLink}
        >
          TVmaze.com
        </a>
      </div>
    </div>
  );
}
