import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  // State in the main component
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  // State consult
  const [consult, setConsult] = useState(false);

  // State result
  const [result, setResult] = useState({});

  // State error
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = "your appId";

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const request = await fetch(url);

        const result = await request.json();

        console.log(result);

        setResult(result);

        setConsult(false);

        // Error
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultAPI();
  }, [city, consult, country]);

  let wildcard;

  if (error) {
    wildcard = <Error message=" City not found" />;
  } else {
    wildcard = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Weather App" />
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">{wildcard}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
