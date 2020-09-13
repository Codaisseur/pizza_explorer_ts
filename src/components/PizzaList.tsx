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
  // note: first making a shallow copy of the array,
  //  because .sort is a mutating array function,
  //  and we don't want to change/mutate the store's state
  return [...reduxState.pizzas].sort((a, b) => {
    return b.bought - a.bought;
  });
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
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}{" "}
              <strong>{pizza.name}</strong> (bought {pizza.bought} times)
              <br />({pizza.description})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
