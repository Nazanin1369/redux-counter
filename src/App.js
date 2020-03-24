import React from "react";
import Counter from "./components/Counter";

const App = props => (
  <div className="App">
    <h1>Redux Learnings</h1>
    <Counter
      value={props.store.getState()}
      onIncrement={() => props.store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => props.store.dispatch({ type: "DECREMENT" })}
    />
  </div>
);

module.exports = App;
