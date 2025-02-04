import { BiCheck } from "react-icons/bi";
import React, { useState } from "react";
import TaskStatus from "./TaskStaus";
function App() {
const [checked, setChecked] = useState(true); 
const onComplete = () => checked === true ? setChecked(false) : setChecked(true)
  return (
<div className="App">
<TaskStatus onComplete={onComplete}>
<div>Learn React {checked ? <BiCheck/>:""}</div>
</TaskStatus>
</div>
  );
}

export default App;
