import React, { useState } from "react";
import "./ToggleStyle.css";
const Toggle = () => {
  // 1.enabling state: useState[]
  // 2.initiazle state:
  // 3.reading state
  // 4.update state

  const array = useState(false);
  console.log(array);
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    // setOn(callBack) => setOn(preStart => !preStarte)
    setOn((on) => {
      return !on;
    });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner  ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;
