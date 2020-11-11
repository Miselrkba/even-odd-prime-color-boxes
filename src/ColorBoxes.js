import React from "react";
import { colorArray } from "./colorArray";

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
