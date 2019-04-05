import React from "react";

const Weather = props => (
  <div className="weather-info">
    {props.city && props.country && (
      <div className="weather-container">
        <p className="weather-key">
          Location:
          <span className="weather-value"> {props.city}</span>
        </p>
      </div>
    )}
    {props.temperature && (
      <div className="weather-container">
        <p className="weather-key">
          Temperature:
          <span className="weather-value"> {props.temperature}</span>
        </p>
      </div>
    )}
    {props.humidity && (
      <div className="weather-container">
        <p className="weather-key">
          Humidity: <span className="weather-value"> {props.humidity}</span>
        </p>
      </div>
    )}
    {props.description && (
      <div className="weather-container">
        <p className="weather-key">
          Conditions:
          <span className="weather-value"> {props.description}</span>
        </p>
      </div>
    )}
    {props.error && <p className="weather-error">{props.error}</p>}
  </div>
);
export default Weather;
