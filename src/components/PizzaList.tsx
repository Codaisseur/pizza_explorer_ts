import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, Action } from "../store/types";
import { Dispatch } from "redux";

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
  const dispatch = useDispatch<Dispatch<Action>>();
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
          const toggle = () => {
            dispatch({
              type: "toggle_favorite",
              payload: pizza.id,
            });
          };

          return (
            <li key={pizza.id}>
              <button onClick={toggle}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>{" "}
              <strong>{pizza.name}</strong> (bought {pizza.bought} times)
              <br />({pizza.description})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
