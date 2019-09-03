import React from "react";
import {dateToSting, isValidDate} from "../../util/date";

function PrintDate({ts = null, className}) {
  const date = new Date(ts);

  if (!ts || !isValidDate(date)) return <i className={className}>none</i>;

  return <span className={className}>{dateToSting(date)}</span>;
}

export default React.memo(PrintDate);
