import React from "react";
import CountUp from "react-countup";

const Weather = ({ result }) => {
  // Extracting the values
  const { coord, name, main, sys } = result;

  // Undefined temp
  if (!name) return null;

  // Convert to ºC
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>
          {name}, {sys.country}
        </h2>
        <p>
          <CountUp
            className="temperature"
            start={0}
            end={main.temp - kelvin}
            duration={2.5}
          />
          <span>&#x2103;</span>
        </p>
        <p>
          Lat: {coord.lat} Long: {coord.lon}
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
