import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, area, region, flags } = props.country;
  return (
    <div className="country bg-info">
      <h2>Country: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
