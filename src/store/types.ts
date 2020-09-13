export type User = {
  name: string;
  email: string;
  favorites: number[];
};

export type Pizza = {
  id: number;
  name: string;
  description: string;
  bought: number;
};

export type State = {
  user: User;
  pizzas: Pizza[];
};

export type Action =
  | {
      type: "add_pizza";
      payload: Pizza;
    }
  | { type: "...more_to_come..." };
