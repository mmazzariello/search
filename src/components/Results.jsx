import React, { useState, useMemo } from "react";

const Results = ({ items, onItemSelected, query, onResultsCalculated }) => {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

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
        ? filteredItems.map((item) => <div key={item.id}>{item.title}</div>)
        : ""}
    </div>
  );
};

export default Results;
