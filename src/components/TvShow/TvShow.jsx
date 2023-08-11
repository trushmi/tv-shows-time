import React from "react";
import classNames from "classnames";

import styles from "./tvShow.module.scss";
import Seasons from "../Seasons/Seasons";

export default function TvShow({
  title,
  img,
  externalIds,
  onToggle,
  isSelected,
  seasons,
  seenTimes,
  changeSeenTimes,
  selectedSeasons,
  onChangeSeason,
}) {
  return (
    <div className={styles.singleShow}>
      <div
        className={classNames(styles.posterContainer, {
          [styles.isSelected]: isSelected,
        })}
      >
        <div onClick={onToggle}>
          <img
            src={img && img.medium ? img.medium : ""}
            alt={title}
            className={styles.poster}
          />
          <div className={styles.overlay}>
            <div>
              <div className={styles.checkCircle}> ✓</div>
            </div>
          </div>
        </div>
        {isSelected && (
          <Seasons
            seasons={seasons}
            title={title}
            changeSeenTimes={changeSeenTimes}
            seenTimes={seenTimes}
            selectedSeasons={selectedSeasons}
            onChangeSeason={onChangeSeason}
          />
        )}
      </div>

      <section className={styles.showInfo}>
        <div className={styles.showTitle} onClick={onToggle}>
          {title}
        </div>
        <div className={styles.imdbContainer}>
          <a
            href={`https://www.imdb.com/title/${externalIds.imdb}`}
            target="blank"
            className={styles.imdbLink}
          >
            IMDb
          </a>
        </div>
      </section>
    </div>
  );
}
