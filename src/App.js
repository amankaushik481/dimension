import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import "./App.css";

import { Homepage, Whitepaper } from "./Pages";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/home", element: <Whitepaper /> },
    { path: "/whitepaper", element: <Whitepaper /> },
    // { path: "/", element: <Homepage /> },
    // { path: "/", element: <Homepage /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div>
      <Router>
        <AppRoute />
      </Router>
    </div>
  );
};

export default App;
