/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react';

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState("scissors");
  const [compChoice, setCompChoice] = useState(null);

  const pickRandom = () => {
    const num = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    // setCompChoice(choices[num]);
    return choices[num];
  }

  const adjustCount = (amount) => {
    if (count + amount < 0) {
      return;
    }
    if (count + amount > 10) {
      return;
    }
    setCount(count + amount);
  }

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}. Please wait...</h3>
        <button onClick={() => setSpinnerOn(false)}>Turn the spinner off ya doofus!</button>
      </div>
    )
  }

  return (
    <>
      <h1>PLAYGROUND!!!! My favorite color is...{props.favColor}</h1>
      <p>{count}</p>
      <button onClick={() => adjustCount(1)}>Increment</button>
      <button onClick={() => adjustCount(-1)}>Decrement</button>
      <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle spinner!</button>
      <h3>The current weapon is...{weapon}</h3>
      <button onClick={pickRandom}>Comp Choice!</button>
      { compChoice && <h3>{compChoice}</h3> }
      <button onClick={() => setWeapon("rock")}>Pick Rock!</button>
      <button onClick={() => setWeapon("paper")}>Pick Paper!</button>
      <button onClick={() => setWeapon("scissors")}>Pick Scissors!</button>
    </>
  )
}

export default Playground;

// !false => true
// !true => false
// !"Casey" => false