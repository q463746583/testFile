import React from "react";

const Action = props => (
  <button disabled={props.options.length === 0} onClick={props.randomPick}>
    {" Too Weird"}
    What should I do?{" "}
  </button>
);
export default Action;
