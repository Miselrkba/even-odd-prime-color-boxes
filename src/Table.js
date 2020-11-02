import React, { useState } from "react";

const Table = () => {
  const [allBox, changeAllBox] = useState(false);
  const [testOne, changeTestOne] = useState(false);
  const [testTwo, changeTestTwo] = useState(false);
  const [testThree, changeTestThree] = useState(false);

  const selectAll = () => {
    const newVal = allBox ? false : true;
    changeTestOne(newVal);
    changeTestTwo(newVal);
    changeTestThree(newVal);
    changeAllBox(newVal);
  };
  const changeValue = (e) => {
    const number = e.currentTarget.id;
    console.log(number);
    switch (number) {
      case "1":
        changeTestOne(!testOne);
        break;
      case "2":
        changeTestTwo(!testTwo);
        break;
      case "3":
        changeTestThree(!testThree);
        break;
    }
  };
  return (
    <div>
      <label htmlFor="all">Select All</label>
      <input id="all" type="checkbox" onChange={selectAll} checked={allBox} />
      <input
        label="1"
        id="1"
        type="checkbox"
        checked={testOne}
        onChange={changeValue}
      />
      <input
        label="2"
        id="2"
        type="checkbox"
        checked={testTwo}
        onChange={changeValue}
      />
      <input
        label="3"
        id="3"
        type="checkbox"
        checked={testThree}
        onChange={changeValue}
      />
    </div>
  );
};

export default Table;
