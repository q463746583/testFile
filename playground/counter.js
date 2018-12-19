import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minOne = this.minOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
      // count: 0
    };
  }

  addOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  minOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  reset() {
    this.setState(prevState => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count} </p>
        <button onClick={this.addOne}> +1 </button>
        <button onClick={this.minOne}> -1 </button>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 100
};

ReactDOM.render(<Counter count={50} />, document.getElementById("app"));
