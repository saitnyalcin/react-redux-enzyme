import React from "react";
import PropTypes from "prop-types";

const Headline = ({ header, description, tempArray }) => {
  return (
    <div data-test="headlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="description">{description}</p>
    </div>
  );
};

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempArray: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number
    })
  )
};

export default Headline;
