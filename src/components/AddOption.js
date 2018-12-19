import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  formSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.onAddOption(option);
    e.target.elements.option.value = "";

    this.setState(() => {
      return { error };
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}
