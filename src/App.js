import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/franciscaserrao">Francisca Serrão</a>, is
          open-sourced on{" "}
          <a href="https://github.com/franciscaserrao/react-weather-final">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://master--nimble-biscuit-3ea091.netlify.app/">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
