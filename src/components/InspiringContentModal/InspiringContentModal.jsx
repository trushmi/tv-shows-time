import React from "react";
import styles from "./InspiringContentModal.module.scss";
import { CgClose } from "react-icons/cg";
export default function InspiringContentModal({ onRequestClose }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Inspiring Content Modal</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis
        sequi nihil, nobis cumque quam facere quas. Iusto id pariatur
        consequuntur qui, amet doloribus at voluptatum deleniti soluta quisquam?
        Cupiditate? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, quaerat aspernatur nihil quidem aliquam excepturi
        cupiditate sint, voluptates blanditiis incidunt nemo harum saepe
        similique ad autem veritatis corporis earum est. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fugiat iusto vel deserunt quae
        possimus necessitatibus officiis ipsum consequatur quod. Doloribus
        quisquam laboriosam quidem atque, corporis ullam vero unde adipisci ab!
      </div>
      <div onClick={onRequestClose} className={styles.closeBtn}>
        <CgClose />
      </div>
    </div>
  );
}
