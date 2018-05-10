import AppActions from "./actions.js";
import Reflux from "reflux";
const Store = Reflux.createStore({
  listenables: [AppActions],
  init() {
    this.state = {
      val: ""
    };
  },
  updateState(state, supressTrigger) {
    if (state) {
      this.state = state;
    }
    if (!supressTrigger) {
      this.trigger(this.state);
    }
  },
  sayHi() {
    this.updateState({ val: "Hi" });
  }
});

export default Store;
