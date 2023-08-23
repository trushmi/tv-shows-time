import styles from "./TvShowsSearch.module.scss";
import React, { useState, useEffect } from "react";
import ShowDropdown from "../DropdownSuggestions/ShowDropdown";
import { useTotalMin } from "../../TotalMinContext";
import SearchShowsView from "../SearchShowsView/SearchShowsView";
import { useShows } from "../../ShowsContext/ShowsContext";
import classNames from "classnames";

function getTotalForSelectedShow(selectedTvShow) {
  const { show, seenTimes, selectedSeasons } = selectedTvShow;
  const totalSeenEpisodes = [...selectedSeasons.values()].reduce(
    (prev, curr) => prev + curr
  );
  return seenTimes * show.averageEpisodeRunTime * totalSeenEpisodes;
}

export default function TvShowsSearch() {
  const { totalMin, setTotalMin, selectedTvShows, setSelectedTvShows } =
    useTotalMin();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { selectedListOfTvShows, setSelectedListOfTvShows } = useShows();
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchBarUp, setIsSearchBarUp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (searchTerm || selectedListOfTvShows.length > 0) {
      setIsSearchBarUp(true);
    } else {
      setIsSearchBarUp(false);
    }
  }, [searchTerm, selectedListOfTvShows]);

  useEffect(() => {
    if (searchTerm) {
      setIsSearchBarUp(true);
      fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const sortedSuggestions = data
            .filter((item) => item.show.rating?.average !== null)
            .sort((a, b) => b.show.rating.average - a.show.rating.average);

          setSuggestions(sortedSuggestions);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const onToggle = (tvShow) => {
    const newSelectedTvShows = new Map(selectedTvShows);
    const selectedTvShow = newSelectedTvShows.get(tvShow.id);
    if (selectedTvShow) {
      setTotalMin(totalMin - getTotalForSelectedShow(selectedTvShow));
      newSelectedTvShows.delete(tvShow.id);
    } else {
      const newSelectedTvShow = {
        show: tvShow,
        seenTimes: 1,
        selectedSeasons: new Map(
          tvShow.seasons.map((season) => [season.name, season.episodes])
        ),
      };
      newSelectedTvShows.set(tvShow.id, newSelectedTvShow);
      setTotalMin(totalMin + getTotalForSelectedShow(newSelectedTvShow));
    }
    setSelectedTvShows(newSelectedTvShows);
  };

  const handleShowSelect = async (show) => {
    setSearchTerm("");
    setIsLoading(true);
    const isAlreadyAdded = selectedListOfTvShows.some(
      (selectedShow) => selectedShow.id === show.id
    );

    if (isAlreadyAdded) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      setSearchTerm("");
      return;
    }

    const fetchEpisodes = async (id) => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/shows/${id}/episodes`
        );
        const episodes = await response.json();

        console.log(episodes);
        const seasons = [];
        let totalEpisodes = 0;
        let totalMinutes = 0;

        episodes.forEach((episode) => {
          const { season, runtime } = episode;

          const existingSeason = seasons.find((s) => s.name === season);

          if (!existingSeason) {
            seasons.push({
              name: season,
              episodes: 1,
            });
          } else {
            existingSeason.episodes += 1;
          }

          totalEpisodes += 1;
          totalMinutes += runtime;
        });
        const seenTimes = 1;
        const averageEpisodeRunTime = Math.floor(totalMinutes / totalEpisodes);
        const totalMinutesToWatchShow = totalMinutes;

        const tvShow = {
          ...show,
          seasons,
          totalEpisodes,
          totalMinutes,
          averageEpisodeRunTime,
          totalMinutesToWatchShow,
          seenTimes,
        };

        setSelectedListOfTvShows((prevSelectedListOfTvShows) => [
          ...prevSelectedListOfTvShows,
          tvShow,
        ]);
        onToggle(tvShow);
      } catch (error) {
        console.error("Error fetching season information:", error);
      } finally {
        setIsLoading(false);
      }
    };

    await fetchEpisodes(show.id);
  };

  return (
    <div
      className={`${styles.pageContainer} ${
        isSearchBarUp ? styles.searchBarUp : ""
      }`}
    >
      <div
        className={`${styles.searchBarContainer} ${
          isSearchBarUp ? styles.searchBarUp : ""
        }`}
      >
        <div className={styles.messageContainer}>
          {showMessage && (
            <p className={styles.message}>
              Sorry, this show is already in the list.
            </p>
          )}
        </div>
        <input
          className={classNames({
            [styles.input]: true,
            [styles.staysTop]: selectedListOfTvShows.length > 0 || isLoading,
          })}
          type="text"
          placeholder="Search for shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {suggestions.length > 0 && (
          <ShowDropdown
            suggestions={suggestions}
            handleShowSelect={handleShowSelect}
          />
        )}
      </div>
      {selectedListOfTvShows.length > 0 && (
        <SearchShowsView
          selectedListOfTvShows={selectedListOfTvShows}
          setSelectedListOfTvShows={setSelectedListOfTvShows}
          totalMin={totalMin}
          setTotalMin={setTotalMin}
          selectedTvShows={selectedTvShows}
          setSelectedTvShows={setSelectedTvShows}
        />
      )}
    </div>
  );
}
