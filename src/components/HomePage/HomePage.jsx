import React, { useState } from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import styles from "./HomePage.module.scss";
import NavigationTour from "../../NavigationTour/NavigationTour";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const animatedText = "How much time do you spend watching TV shows?";
  const [showNavigationInfo, setShowNavigationInfo] = useState(false);

  const handleButtonClick = () => {
    if (window.innerWidth <= 768) {
      navigate("/faq");
    } else {
      setShowNavigationInfo((prevState) => !prevState);
      setTimeout(() => {
        setShowNavigationInfo(false);
      }, 9000);
    }
  };

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.navigationContainer}>
        {showNavigationInfo && <NavigationTour />}
      </div>
      <div className={styles.animatedTextWrapper}>
        <AnimatedText text={animatedText} />
      </div>
      <button onClick={handleButtonClick} className={styles.showNavigationBtn}>
        ?
      </button>
    </div>
  );
};

export default HomePage;
