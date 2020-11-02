import React, { useState } from "react";

function Table1() {
  const [allSelected, setAllSelected] = useState(false);

  function handleChange(e) {
    setAllSelected(!allSelected);
  }

  return (
    <div className="App">
      <input
        type="checkbox"
        name="isAllSelected"
        onChange={handleChange}
        checked={allSelected}
      />{" "}
      Select all
      <CheckboxList isSelected={allSelected} />
    </div>
  );
}

function CheckboxList(props) {
  const [state, setState] = useState("");
  console.log(state);
  
  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          name="1"
          value={state}
          checked={state}
          onChange={(e) => setState(e.target.checked)}
        />
        1
      </label>
      <label>
        <input
          type="checkbox"
          name="2"
          value={state}
          checked={props.isSelected}
          onChange={(e) => setState(e.target.checked)}
        />
        2
      </label>
    </div>
  );
}

export default Table1;
