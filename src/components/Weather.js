import React from "react";

const Weather = ({ result }) => {
  // Extracting the values
  const { name, main } = result;

  // undefined temp
  if (!name) return null;

  //convert ºC
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>{name}</h2>
        <p className="temperature">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
export default Weather;
