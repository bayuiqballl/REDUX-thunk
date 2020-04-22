import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, minCounter } from "../Actions/getCounter";

const Hooks = () => {
  const counter = useSelector((state) => state.counterReduce.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Hooks </h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(addCounter())}>+</button> {""}
      <button onClick={() => dispatch(minCounter())}>-</button> <br></br>{" "}
      <br></br>
    </div>
  );
};

export default Hooks;
