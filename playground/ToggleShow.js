import React from "react";
import ReactDOM from "react-dom";

const state = {
  show: true
};

const onSwitch = e => {
  e.preventDefault();
  console.log(state.show);
  state.show = !state.show;
  render();
};

const render = () => {
  const template = (
    <div>
      <p> Toggle Visibility </p>
      <button onClick={onSwitch}> {state.show ? "Hide" : "Show"}</button>
      {state.show && (
        <div>
          {" "}
          <p> HiHi you see me now ! </p>{" "}
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
