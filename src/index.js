import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Store from "./store.js";
import AppActions from "./actions.js";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    //console.log(Store)
    this.unsubscribe = Store.listen(AppState => {
      this.setState({ AppState });
    });
    AppActions.sayHi();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    let val =
      this.state.AppState && this.state.AppState.val && this.state.AppState.val;
    return <div>Hello {val}</div>;
  }
}

render(<App />, document.getElementById("root"));
