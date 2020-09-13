// src/store/reducer.ts
import { State, Action } from "./types";

const initialState: State = {
  user: {
    name: "Kelley",
    email: "kelley@codaisseur.copm",
    favorites: [161235, 357311],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
    },
  ],
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "add_pizza": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "toggle_favorite": {
      const updatedFavorites = state.user.favorites;
      let i = state.user.favorites.indexOf(action.payload);
      if (i >= 0) {
        // => already a favorite, let's remove it
        updatedFavorites.splice(i, 1);
      } else {
        updatedFavorites.push(action.payload);
      }

      return {
        ...state,
        user: {
          ...state.user,
          favorites: updatedFavorites,
        },
      };
    }
    default: {
      return state;
    }
  }
}
