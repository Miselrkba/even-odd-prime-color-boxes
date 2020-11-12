import React from "react";
import { tenHighestPopulation } from "./population";

function ColorBoxes() {
  return (
    <div className="grid">
      {colorArray.map((item) => (
        <div className="grid-box" style={{ background: `${item}` }} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default ColorBoxes;
