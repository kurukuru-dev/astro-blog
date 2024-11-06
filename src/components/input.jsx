import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  return <input type="text" onChange={(e) => handleOnChange(e)} />;
}

export default Input;
