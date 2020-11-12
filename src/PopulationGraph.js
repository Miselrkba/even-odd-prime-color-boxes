import React from "react";
import { tenHighestPopulation } from "./population";

function PopulationGraph() {
  return (
    <div >
      <h1 style={{marginTop: '1em'}}>World Population</h1>
      <p>Top most populated countries</p>
      <table className="table">
        <thead>
          {tenHighestPopulation.map((item) => (
            <tr key={item.country}>
              <td>{item.country}</td>
              <td>
                <div className='bar' style={{width: `${item.population / 127581510}em`}}></div>
              </td>
              <td>{item.population}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default PopulationGraph;
