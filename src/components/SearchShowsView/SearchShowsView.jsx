import React from "react";

import TvShow from "../TvShow/TvShow";
import styles from "./SearchShowsView.module.scss";

function getTotalForSelectedShow(selectedTvShow) {
  const { show, seenTimes, selectedSeasons } = selectedTvShow;
  const totalSeenEpisodes = [...selectedSeasons.values()].reduce(
    (prev, curr) => prev + curr
  );
  return seenTimes * show.averageEpisodeRunTime * totalSeenEpisodes;
}

export default function SearchShowsView({
  selectedListOfTvShows,
  totalMin,
  setTotalMin,
  selectedTvShows,
  setSelectedTvShows,
}) {
  const shows = selectedListOfTvShows;

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

  const onChangeSeason = (tvShowId, season) => {
    const myShows = new Map(selectedTvShows);
    const selectedShow = myShows.get(tvShowId);
    const newSeasons = selectedShow.selectedSeasons;

    const prevShowTime = getTotalForSelectedShow(selectedShow);
    if (newSeasons.has(season.name)) {
      if (newSeasons.size > 1) {
        newSeasons.delete(season.name);
      }
    } else {
      newSeasons.set(season.name, season.episodes);
    }
    const newShowTime = getTotalForSelectedShow(selectedShow);
    setTotalMin(totalMin + (newShowTime - prevShowTime));
    setSelectedTvShows(myShows);
  };

  const changeSeenTimes = (tvShowId, isSubtract = false) => {
    const newSelectedTvShows = new Map(selectedTvShows);
    const selectedShow = newSelectedTvShows.get(tvShowId);
    if (isSubtract && selectedShow.seenTimes === 1) {
      return;
    }
    const prevShowTime = getTotalForSelectedShow(selectedShow);
    if (isSubtract) {
      selectedShow.seenTimes -= 1;
    } else {
      selectedShow.seenTimes += 1;
    }
    const newShowTime = getTotalForSelectedShow(selectedShow);
    setTotalMin(totalMin + (newShowTime - prevShowTime));
  };

  return (
    <>
      <div className={styles.popularShowsTitle}></div>
      <div className={styles.showsWrapper}>
        {shows?.map((show) => (
          <TvShow
            title={show.name}
            img={show.image}
            externalIds={show.externals}
            key={show.id}
            onToggle={() => onToggle(show)}
            seasons={show.seasons}
            isSelected={selectedTvShows.has(show.id)}
            seenTimes={selectedTvShows.get(show.id)?.seenTimes || 1}
            changeSeenTimes={(isSubtract) =>
              changeSeenTimes(show.id, isSubtract)
            }
            selectedSeasons={selectedTvShows.get(show.id)?.selectedSeasons || 1}
            onChangeSeason={(season) => onChangeSeason(show.id, season)}
          />
        ))}
      </div>
    </>
  );
}
