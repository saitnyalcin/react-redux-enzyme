import React from "react";

const Headline = ({ header, description }) => {
  return (
    <div data-test="headlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="description">{description}</p>
    </div>
  );
};

export default Headline;
