import React, { createContext, useContext, useState } from "react";

const TotalMinContext = createContext();

export function TotalMinProvider({ children }) {
  const [totalMin, setTotalMin] = useState(0);
  const [selectedTvShows, setSelectedTvShows] = useState(new Map());

  return (
    <TotalMinContext.Provider
      value={{ totalMin, setTotalMin, selectedTvShows, setSelectedTvShows }}
    >
      {children}
    </TotalMinContext.Provider>
  );
}

export function useTotalMin() {
  return useContext(TotalMinContext);
}
