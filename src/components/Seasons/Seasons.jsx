import React, { useState, useMemo } from "react";
import styles from "./Seasons.module.scss";
import { ImPencil } from "react-icons/im";
import Modal from "react-modal";
import SeasonSelectedModal from "../SeasonSelectedModal/SeasonSelectedModal";

export default function Seasons({
  seasons,
  title,
  changeSeenTimes,
  seenTimes,
  selectedSeasons,
  onChangeSeason,
}) {
  let seasonWord = seasons.length > 1 ? "seasons" : "season";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredSeasons = useMemo(
    () => seasons.filter(({ episodes }) => episodes),
    [seasons]
  );
  return (
    <>
      <div className={styles.container} onClick={openModal}>
        <div className={styles.seasonsText}>
          <div>
            {selectedSeasons.size +
              "/" +
              filteredSeasons.length +
              " " +
              seasonWord}
          </div>
          <div className={styles.ShowTimesBlock}>Seen times: {seenTimes}</div>
        </div>
        <div className={styles.icon}>
          <ImPencil />
        </div>
      </div>

      {isModalOpen && (
        <Modal
          shouldCloseOnOverlayClick={true}
          className={styles.modalWindow}
          isOpen
        >
          <SeasonSelectedModal
            onRequestClose={closeModal}
            seasons={seasons}
            title={title}
            filteredSeasons={filteredSeasons}
            changeSeenTimes={changeSeenTimes}
            seenTimes={seenTimes}
            selectedSeasons={selectedSeasons}
            onChangeSeason={onChangeSeason}
          />
        </Modal>
      )}
    </>
  );
}
