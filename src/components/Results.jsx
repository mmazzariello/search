import React, { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";

const Results = ({ items, onItemSelected, query, onResultsCalculated }) => {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter(
      (el) => el.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
    );
    setResults(res);
    return res;
  }

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              item={item}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </div>
  );
};

export default Results;
