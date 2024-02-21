import React from "react";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h1 className={styles.errorMsg}>Page not found</h1>
        <p>
          The page you were looking for doesn’t exist. You may have mistyped the
          address or the page may have moved.
        </p>
        <a href="/">Go home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
