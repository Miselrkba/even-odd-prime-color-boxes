import React from "react";
import { useState } from "react";

function Events() {
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const [top, setTop] = useState(1);
  const [bottom, setBottom] = useState(1);

  const randomNumber = Math.random() * 2;
  const randomNumber1 = Math.random() * 15;
  const randomNumber2 = Math.random() * 15;
  const randomNumber3 = Math.random() * 10;

  const handleMouseMove = () => {
    setLeft(randomNumber);
    setRight(randomNumber1);
    setTop(randomNumber2);
    setBottom(randomNumber3);
  };

  console.log(left, right);

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="box"
        style={{
          position: "relative",
          left: `${left}em`,
          right: `${right}em`,
          top: `${top}em`,
          bottom: `${bottom}em`,
        }}
      >
        {" "}
        30 Days of React
      </div>
    </div>
  );
}

export default Events;
