import React, { useState } from "react";
import { MovieList } from "./MovieList";
import { Search } from "./Search";
import { SearchProvider } from "../context/SearchContext";

export function MainView() {
  const [search, setSearch] = useState("");

  return (
    <SearchProvider value={{ search, setSearch }}>
      <h1 className={"center"}>Movies</h1>
      <Search className={"center"} />
      <MovieList />;
    </SearchProvider>
  );
}
