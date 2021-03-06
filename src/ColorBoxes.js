import React from "react";

function ColorBoxes() {
  const numbers = [...Array(32).keys()];

  // const evenNumbers = numbers.map((item) => item % 2 === 0);
  // const oddNumbers = numbers.map((item) => item % 2 !== 0);
  const primeNumbers = numbers.filter(isPrime);

  function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start === 0) {
        return false;
      }
    }
    return num > 1;
  }

  return (
    <div className="grid">
      {numbers.map((item) => (
        <div className={`grid-box ${(item % 2 === 0 ? 'even' : 'odd')} ${isPrime(item) ? 'prime' : null} `} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default ColorBoxes;
