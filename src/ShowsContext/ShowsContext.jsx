import React, { createContext, useState, useContext } from "react";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [selectedListOfTvShows, setSelectedListOfTvShows] = useState([]);

  return (
    <ShowsContext.Provider
      value={{ selectedListOfTvShows, setSelectedListOfTvShows }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export const useShows = () => {
  const context = useContext(ShowsContext);
  if (context === undefined) {
    throw new Error("useShows must be used within a ShowsProvider");
  }
  return context;
};
