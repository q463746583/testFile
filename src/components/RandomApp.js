import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class RandomApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  title = "RandomApp";
  subtitle = "Make your selection by Random";

  // componentDidMount() {
  //   const json = localStorage.getItem('options');
  //   const options = JSON.parse(json);
  //   this.setState(()=> ({options}));
  // };

  onRemove = o => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return option !== o;
        })
      };
    });
  };

  onRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  onAddOption = option => {
    if (!option) {
      return "Please enter valid value!";
    } else if (this.state.options.includes(option)) {
      return "The selection has existed!";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  randomPick = () => {
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNo];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  onCloseSelected = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    return (
      <div>
        <Header title={this.title} subtitle={this.subtitle} />
        <Action options={this.state.options} randomPick={this.randomPick} />
        <Options
          options={this.state.options}
          onRemoveAll={this.onRemoveAll}
          onRemove={this.onRemove}
        />
        <AddOption onAddOption={this.onAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          onCloseSelected={this.onCloseSelected}
        />
      </div>
    );
  }
}
