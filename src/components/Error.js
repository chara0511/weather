import React from "react";

const Error = ({ message }) => {
  return (
    <p>
      <i className="material-icons">error</i>
      {message}
    </p>
  );
};
export default Error;
