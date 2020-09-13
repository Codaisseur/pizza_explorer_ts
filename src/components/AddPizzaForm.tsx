// src/components/AddPizzaForm.tsx
import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { Action } from "../store/types";

export default function AddPizzaForm() {
  const dispatch = useDispatch<Dispatch<Action>>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(event) => {
        // to make sure that the form does not redirect (which is normal browser behavior)
        event.preventDefault();

        dispatch({
          type: "add_pizza",
          payload: {
            id: Date.now(), // bad, but good enough for now ;)
            name,
            description,
            bought: 0,
          },
        });

        setName("");
        setDescription("");
      }}
    >
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
