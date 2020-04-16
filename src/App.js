import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, and celebrate when CD
          works when I push to Master! :O
        </p>
        <p>
          Though it takes about 2 to 3 min to fully build, this is a pretty darn
          useful tool if we hoook it up to master branch and follow standard
          coding practices!
        </p>
        <a href="https://youtu.be/MiXgOQ9_-RI?t=111" target="blank">
          REJOICE!!!!!!!!!!
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
