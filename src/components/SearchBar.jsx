import React, { useState } from "react";
import Results from "./Results";

import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 30px auto;
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  min-width: 400px;
  box-sizing: border-box;
  border: solid 2px #ccc;
  outline: none;
`;

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

  return (
    <SearchBarContainer>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Search..."
      />
      <Results
        items={items}
        onItemSelected={onItemSelected}
        query={query}
        onResultsCalculated={handleResults}
      />
      {results && (
        <SearchBarContainer>{results.length} results</SearchBarContainer>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
