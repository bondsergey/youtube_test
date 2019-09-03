import React from "react";
import "./style.css";

function Checkbox({value, onChange, label = null, className = ""}) {
  return (
    <div onClick={onChange}>
      <input
        checked={value}
        className={["styled-checkbox", className].join(" ")}
        type="checkbox"
        onChange={() => {
        }}
      />
      <label>{label}</label>
    </div>
  );
}

export default React.memo(Checkbox);
