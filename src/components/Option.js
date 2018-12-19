import React from "react";

export default props => (
  <li>
    {" "}
    {props.option}
    <button
      onClick={e => {
        props.onRemove(props.option);
      }}>
      Remove
    </button>
  </li>
);
