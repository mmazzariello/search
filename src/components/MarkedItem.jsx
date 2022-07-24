import { useMemo } from "react";

const MarkedItem = ({ item, query, onClick }) => {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    let left = item.title.slice(0, index);
    let right = item.title.slice(index + query.length);
    let center = item.title.slice(index, index + query.length);

    return { left, center, right };
  }

  return (
    <button>
      {left}
      <span style={{ fontWeight: "bolder", backgroundColor: "yellow" }}>
        {center}
      </span>
      {right}
    </button>
  );
};

export default MarkedItem;
