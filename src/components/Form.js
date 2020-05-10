import React, { useState } from "react";

const Form = () => {
  // State in the form
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [error, setError] = useState(false);

  // Extracting the city and the country
  const { city, country } = search;

  // Function that places the elements in the state
  const handleChange = (e) => {
    //update state
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // When the user clicks submit to the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Send it to app.js
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All field are required</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          id="country"
          name="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="MX">Mexico</option>
          <option value="PE">Peru</option>
          <option value="ES">Spain</option>
          <option value="US">US</option>
        </select>
        <label htmlFor="country">Country</label>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Go
        </button>
      </div>
    </form>
  );
};
export default Form;
