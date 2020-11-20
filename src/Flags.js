import React, { useState } from "react";
import { countriesData } from "./countriesData";

function Flags() {
  const initialCountry = {
    name: "Czech Republic",
    capital: "Prague",
    languages: ["Czech", "Slovak"],
    population: 10558524,
    flag: "https://restcountries.eu/data/cze.svg",
    currency: "Czech koruna",
  };
  const [random, setRandom] = useState(initialCountry);

  const rand = () => {
    const randomNumber = Math.floor(Math.random() * 250);
    const randomCountry = countriesData[randomNumber];
    return setRandom(randomCountry);
  };

  return (
    <div>
      <div className="navbar">
        <h1>30 days of React</h1>
        <h5>Getting started with React</h5>
        <p>JavaScript Library</p>
        <p>Michael Angelo</p>
        <p>Nov 19/11/2020</p>
        <p>Select a country for your holiday</p>
      </div>
      <div className="card">
        <div className="image-container">
          <img src={random.flag} alt="" className="flag" />
        </div>
        <div className="data-container">
          <h5>{random.name}</h5>
          <div className="heading-container">
            <p>
              <b>Capital: </b>
            </p>
            <span> {random.capital}</span>
          </div>
          <div className="heading-container">
            <p>
              <b>Language: </b>
            </p>
            <span> {random.languages}</span>{" "}
          </div>
          <div className="heading-container">
            <p>
              <b>Population: </b>
            </p>
            <span>{random.population}</span>
          </div>
          <div className="heading-container">
            <p>
              <b>Currency: </b>
            </p>
            <span>{random.currency}</span>
          </div>
        </div>
      </div>
      <button className="button" onClick={rand}>
        Select Country
      </button>
      <div className="footer">Copyright2020</div>
    </div>
  );
}

export default Flags;
