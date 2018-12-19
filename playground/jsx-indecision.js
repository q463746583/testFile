import react from "react";
import ReactDOM from "react-dom";
// const name = 'AAA';

const app = {
  title: "This is title",
  subtitle: "This is ",
  options: ["One", "Two"]
};

const formSubmit = e => {
  e.preventDefault();
  console.log("SUBMIT!");

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onMakeDecision = e => {
  const randomNo = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNo]);
};

const removeAll = e => {
  e.preventDefault();
  console.log("Remove All");
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <p> Title : {app.title} </p>
      {app.subtitle && <p> Sub : {app.subtitle} </p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your option"
          : "No option"}
      </p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        {" "}
        Make a Decision{" "}
      </button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {app.options.map(o => {
          return <li key = {o} > {o} </li>;
        })}
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();

// const challenge = (
//     <div>
//         <h1>  {(name && name.toUpperCase()) ? name : "Anonymous"}   </h1>
//         <p> 20 </p>
//         <p> Location : Boston </p>
//     </div>
// );
