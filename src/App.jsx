import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShowsProvider } from "./ShowsContext/ShowsContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { useTotalMin } from "./TotalMinContext";
import TvShowsSearch from "./components/TvShowsSearch/TvShowsSearch";
import FAQ from "./components/FAQ/faq";
import TvShowsView from "./components/TvShowsView/TvShowsView";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
function App() {
  const [selectedTvShows, setSelectedTvShows] = useState(new Map());
  const { totalMin, setTotalMin } = useTotalMin(0);

  return (
    <ShowsProvider>
      <Router>
        <Header
          totalMin={totalMin}
          setTotalMin={setTotalMin}
          selectedTvShows={selectedTvShows}
          setSelectedTvShows={setSelectedTvShows}
        />
        <div className={styles.pages}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<TvShowsSearch />} />
            <Route path="/tvshows155" element={<TvShowsView />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ShowsProvider>
  );
}

export default App;
