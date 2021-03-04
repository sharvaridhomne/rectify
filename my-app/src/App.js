
import history from "./services/history";

// import { useEffect } from "react";

import Header from './components/Header'


import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";


function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <Router history={history}>
          <Routes />
        </Router>
      </main>
     
    </div>
  );
}

export default App;
