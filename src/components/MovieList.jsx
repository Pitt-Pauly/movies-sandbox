import React from "react";
import { Card } from "./Card";
import { Grid } from "./Grid";

import { data } from "../data/movies.json";

export function MovieList() {
  return (
    <React.Fragment>
      <h1>Movies</h1>
      <Grid>
        {data?.Movie?.map((m) => (
          <Card data={m} key={m._id} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
