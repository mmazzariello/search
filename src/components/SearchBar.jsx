import React, { useState } from "react";
import Results from "./Results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleResults = (items) => {
    setResults(items);
  };

  const handleItemSelected = () => {};

  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      {results && <div>{results.length} results</div>}
      <Results
        items={items}
        onItemSelected={handleItemSelected}
        query={query}
        onResultsCalculated={handleResults}
      />
    </div>
  );
};

export default SearchBar;
