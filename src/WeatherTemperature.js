import React from "react";

export default function WeatherTemeprature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">ºC{""}</span>
    </div>
  );
}
