import React from "react";
import { useSearch } from "../context/SearchContext";

export function Search({ className }) {
  const { search, setSearch } = useSearch();

  const onChange = (e) => {
    console.log(e.target.value);
    setSearch(() => e.target.value);
  };

  return (
    <div className={className}>
      <span>Search: </span>
      <input type="text" value={search} onChange={onChange} />
    </div>
  );
}
