import React, { useState } from "react";
import styles from "./Greeting.module.scss";
import Modal from "react-modal";
import ReadMoreModal from "../ReadMoreModal/ReadMoreModal";

export default function Greeting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.greetingContainer}>
      <div className={styles.blurContainer}></div>
      <div className={styles.blackContainer}></div>
      <section className={styles.greetingBlock}>
        <div className={styles.title}>TV shows &amp; your time</div>
        <div className={styles.text}>
          Have you ever wondered how much time did you spend watching TV shows?
          Time to find out! Rules are simple: you select the show - we count how much time you
          spent watching it. Be prepared! Numbers may surprise you!
        </div>
        <button className={styles.readModeBtn} onClick={openModal}>
          How it works
        </button>
        <Modal className={styles.modalWindow} isOpen={isModalOpen}>
          <ReadMoreModal onRequestClose={closeModal} />
        </Modal>
      </section>
    </div>
  );
}
