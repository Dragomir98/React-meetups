import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { FavoritesContextProvider } from "../src/store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <HashRouter basename="/meetups/">
      <App />
    </HashRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
