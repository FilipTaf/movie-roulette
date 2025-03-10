import React from "react";
import Search from "./search";

const General = () => {
  const handleSearch = (query) => {};
  return (
    <div className="container mt-3">
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default General;
