import React from "react";
import { Card } from "./Card";
import { Grid } from "./Grid";
import { useSearch } from "../context/SearchContext";

import { data } from "../data/movies.json";

export function MovieList() {
  const { search } = useSearch();

  return (
    <React.Fragment>
      <br />
      <div className="center">SearchTerm: {search}</div>
      <Grid>
        {data?.Movie?.map((m) => (
          <Card data={m} key={m._id} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
