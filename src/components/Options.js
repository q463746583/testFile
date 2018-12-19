import Option from "./Option";
import React from "react";

export default props => (
  <p>
    Options: <br />
    <button onClick={props.onRemoveAll}> Remove All </button>
    {props.options.map(option => {
      return <Option key={option} option={option} onRemove={props.onRemove} />;
    })}
  </p>
);
