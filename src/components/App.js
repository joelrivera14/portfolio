import "../blocks/App.css";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
