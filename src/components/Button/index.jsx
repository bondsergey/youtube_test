import React from "react";
import "./styles.css";

function Button({children, onClick, disabled = false, className = ""}) {
  return (
    <button
      className={["button", className].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
