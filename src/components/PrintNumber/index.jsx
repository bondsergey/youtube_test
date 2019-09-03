import React from "react";

function PrintNumber({number}) {
  if (typeof number !== "number" && !Number.isNaN(number)) return <i>none</i>;

  return <span>{number.toLocaleString("en-EN")}</span>;
}

export default React.memo(PrintNumber);
