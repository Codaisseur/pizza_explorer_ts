import React from "react";
import { useSelector } from "react-redux";
import { State } from "../store/types";

const selectUser = (reduxState: State) => {
  return reduxState.user;
};

export default function PizzaList() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
