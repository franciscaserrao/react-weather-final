import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/franciscaserrao"
            target="_blank"
            rel="noreferrer"
          >
            Francisca Serrão
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/franciscaserrao/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://master--nimble-biscuit-3ea091.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
