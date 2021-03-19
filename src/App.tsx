import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MainView } from "./components/MainView";

export function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={MainView} />
        </Switch>
      </main>
    </Router>
  );
}
