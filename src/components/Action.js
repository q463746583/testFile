import React from "react";

const Action = props => (
  <button
    disabled={this.props.options.length === 0}
    onClick={this.props.randomPick}
  >
    {" "}
    What should I do?{" "}
  </button>
);
export default Action;
