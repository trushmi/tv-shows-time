import React from 'react'
import classNames from 'classnames'
import { CgClose } from 'react-icons/cg'
import { ImCheckmark } from 'react-icons/im'

import styles from './SeasonSelectedModal.module.scss'

export default function SeasonSelectedModal({
  onRequestClose,
  title,
  filteredSeasons,
  seenTimes,
  changeSeenTimes,
  selectedSeasons,
  onChangeSeason,
}) {
  const add = () => {
    changeSeenTimes()
  }
  const subtract = () => {
    changeSeenTimes(true)
  }

  return (
    <div className={styles.seasonWpapper}>
      <div onClick={onRequestClose} className={styles.closeBtn}>
        <CgClose />
      </div>
      <div className={styles.content}>
        <div className={styles.selectedShowTitle}>{title}</div>
        <div className={styles.selectLabel}>Selected seasons:</div>
        <div className={styles.seasonsBlock}>
          {filteredSeasons.map((season) => (
            <div
              key={season.name}
              className={classNames(styles.seasonsFigure, {
                [styles.isSelected]: selectedSeasons.has(season.name),
              })}
              onClick={() => {
                onChangeSeason(season)
              }}
            >
              <div className={styles.name}>{season.name}</div>
              {selectedSeasons.has(season.name) && (
                <ImCheckmark className={styles.checkmark} />
              )}
            </div>
          ))}
        </div>
        <section className={styles.seenTimesContainer}>
          <label className={styles.selectLabel}>Seen times:</label>
          <div className={styles.inputWithButon}>
            <button
              onClick={() => subtract()}
              className={styles.changeNumberBtnMinus}
            >
              -
            </button>
            <div className={styles.seenTimesNumber}>{seenTimes}</div>
            <button
              onClick={() => add()}
              className={styles.changeNumberBtnPlus}
            >
              +
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
