import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [clientData, setClientData] = useState("");
  const submitVal = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchBarWrapper}>
      <div className={styles.searchBarTitle}>
        Didn't find your favorite TV show on a list? Try it here:
      </div>

      <form onSubmit={submitVal} className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="text"
          name=""
          placeholder="Type your TV show here..."
          value={clientData}
          onChange={(e) => setClientData(e.target.value)}
        />
        <input
          type="submit"
          name=""
          id=""
          className={styles.searchBarBtn}
          value="Search"
        />
      </form>
    </div>
  );
}
