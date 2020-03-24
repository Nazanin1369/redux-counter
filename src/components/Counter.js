import React from "react";

const Counter = ({ value, onIncrement, onDecrement }) => (
  <React.Fragment>
    <h2>Counter</h2>
    <section>
      <p>Number: {value}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </section>
  </React.Fragment>
);

module.exports = Counter;
