import React from "react";

const Weather = ({ result }) => {
  // Extracting the values
  const { name, main, sys } = result;

  // undefined temp
  if (!name) return null;

  //convert ºC
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>
          {name}, {sys.country}
        </h2>
        <p className="temperature">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
export default Weather;
