import React from "react";
import styles from "./ShowDropdown.module.scss";

export default function ShowDropdown({ suggestions, handleShowSelect }) {
  return (
    <ul className={styles.suggestionList}>
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.show.id}
          className={styles.suggestionItem}
          onClick={() => handleShowSelect(suggestion.show)}
        >
          <div className={styles.imageContainer}>
            <img
              src={suggestion.show.image?.medium}
              alt={suggestion.show.name}
            />
          </div>
          <span>{suggestion.show.name}</span>
        </li>
      ))}
    </ul>
  );
}
