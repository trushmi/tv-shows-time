import React, { useState } from "react";

import listOfTvShows from "./tvShowsData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TvShowsView from "./components/TvShowsView/TvShowsView";

import styles from "./App.module.scss";
import Greeting from "./components/Greeting/Greeting";

function App() {
  const shows = listOfTvShows;
  const [selectedTvShows, setSelectedTvShows] = useState(new Map());
  const [totalMin, setTotalMin] = useState(0);

  return (
    <>
      <Header
        totalMin={totalMin}
        setTotalMin={setTotalMin}
        selectedTvShows={selectedTvShows}
        setSelectedTvShows={setSelectedTvShows}
      />
      <Greeting />
      <div className={styles.container}>
      
      <div className={styles.showsDescription}>
      150 popular TV shows selected for you:   
         </div>
        <TvShowsView
          shows={shows}
          selectedTvShows={selectedTvShows}
          setSelectedTvShows={setSelectedTvShows}
          totalMin={totalMin}
          setTotalMin={setTotalMin}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
