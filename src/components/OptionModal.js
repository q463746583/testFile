import React from "react";
import Modal from "react-modal";

export default props => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Nnnn">
    <p> {props.selectedOption} </p>
    <button onClick={props.onCloseSelected}>Got it</button>
  </Modal>
);
