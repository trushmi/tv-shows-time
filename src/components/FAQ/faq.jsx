import React from "react";
import styles from "./faq.module.scss";
import { Accordion } from "@trushmi/ui-components";
import data from "./Accordion.data.ts";
export default function FAQ() {
  return (
    <div className={styles.wrapper}>
      <Accordion
        accordionData={data}
        accordionTitle="Answers to the most popular questions"
      />
    </div>
  );
}
