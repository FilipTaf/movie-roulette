import React, { useState, useCallback } from "react";
import Search from "./search";
import MovieList from "./array";

const General = () => {
  const [query, setQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearch = useCallback((query) => {
    setQuery(query);
    setIsSearchClicked(true);
  }, []);

  return (
    <div className="container mt-3">
      <Search onSearch={handleSearch} />
      <MovieList query={query} isSearchClicked={isSearchClicked} />
    </div>
  );
};

export default General;
