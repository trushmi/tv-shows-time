import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import TimeCounter from "../TimeCounter/TimeCounter";
import { ImInfo } from "react-icons/im";
import { useTotalMin } from "../../TotalMinContext";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { MdRestartAlt } from "react-icons/md";

export default function Header() {
  const { totalMin, setTotalMin, selectedTvShows, setSelectedTvShows } =
    useTotalMin();

  const resetData = () => {
    setSelectedTvShows(new Map());
    setTotalMin(0);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleTooltipToggle = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 4000);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const closeMenuOutsideClick = (event) => {
      const navBlockElement = document.querySelector(`.${styles.navBlock}`);
      if (navBlockElement && !navBlockElement.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenuOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeMenuOutsideClick);
    };
  }, [setIsMenuOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.navBlock} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          {!isMenuOpen && (
            <li>
              <NavLink to="/">
                <span
                  onClick={handleNavLinkClick}
                  className="material-symbols-outlined"
                >
                  tv_remote
                </span>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink onClick={handleNavLinkClick} to="/search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavLinkClick} to="/tvshows155">
              TOP TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavLinkClick} to="/faq">
              About
            </NavLink>
          </li>
        </ul>
        <div className={styles.closeBtn} onClick={closeMenu}>
          <CgClose />
        </div>
      </div>
      <div className={styles.total}>
        <TimeCounter totalMinutes={totalMin} />
        <div className={styles.showInfoBlock}>
          <ImInfo
            className={styles.informationIcon}
            onClick={handleTooltipToggle}
          />
          <div
            className={`${
              showTooltip ? styles.showInfoText : styles.showInfoHide
            }`}
          >
            Each day is calculated as 24 hours long. Please note, the estimated
            total viewing time might vary by up to 10%.
          </div>
        </div>
      </div>
      <section className={styles.selectedBlock}>
        <div className={styles.selectedShowsText}>
          Selected: {selectedTvShows.size}
        </div>
        <MdRestartAlt
          className={styles.startOverBtn}
          onClick={() => resetData()}
        />
      </section>
    </div>
  );
}
