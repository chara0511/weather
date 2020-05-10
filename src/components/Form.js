import React, { useState } from "react";

const Form = ({ search, setSearch, setConsult }) => {
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
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
          className="validate"
        />
        <label htmlFor="city">City: </label>
        {error ? (
          <span
            className="helper-text "
            data-error="Wrong "
            data-success="Right"
          >
            <i className="tiny material-icons">error</i> This field is required
          </span>
        ) : null}
      </div>

      <div className="input-field col s12">
        <select
          id="country"
          name="country"
          value={country}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a country
          </option>
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
