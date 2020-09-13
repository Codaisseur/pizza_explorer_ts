import React from "react";
import { useSelector } from "react-redux";
import { State } from "../store/types";

const selectUser = (reduxState: State) => {
  return reduxState.user;
};

const selectNumPizzas = (reduxState: State) => {
  return reduxState.pizzas.length;
};

const selectPizzas = (reduxState: State) => {
  return reduxState.pizzas;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const numPizzas = useSelector(selectNumPizzas);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas (
        {numPizzas}):
      </p>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <strong>{pizza.name}</strong> (bought {pizza.bought} times)
              <br />({pizza.description})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
