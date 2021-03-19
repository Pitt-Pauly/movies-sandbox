import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MovieList } from "./components/MovieList";

export default function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
        </Switch>
      </main>
    </Router>
  );
}
