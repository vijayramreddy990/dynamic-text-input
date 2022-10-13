import React, { useState } from "react";

const DynamicTextInput = () => {
  const [val, setVal] = useState([]);

  const handleOnChange = (e, i) => {
    const inputData = [...val];
    inputData[i] = e.target.value;
    setVal(inputData);
  };

  const handleAdd = () => {
    const refer = [...val, []];
    setVal(refer);
  };

  const handleDelete = (i) => {
    const refer = [...val];
    refer.splice(i, 1);
    setVal(refer);
  };

  console.log(":::DATA:::", val);

  return (
    <div>
      <h1>Dynamic Text Input</h1>
      <button onClick={() => handleAdd()}>Add</button>
      <div>
        {val.map((data, i) => {
          return (
            <div key={"dynamicText" + i}>
              <input value={data} onChange={(e) => handleOnChange(e, i)} />
              <button onClick={() => handleDelete(i)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicTextInput;
