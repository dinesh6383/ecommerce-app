import { React, createContext, useReducer } from "react";
import Data from "../Data";
import { Reducer, Filter } from "./Reducer";

export const shopIt = createContext();

function Context({ children }) {
  const products = Data;

  const [cartState, cartDispatch] = useReducer(Reducer, {
    items: products,
    cart: [],
  });

  const [filterProduct, setFilterDispatch] = useReducer(Filter, {
    byPrice: false,
    byRating: 0,
    byFreeDelivery: false,
    bySearch: "",
  });

  return (
    <shopIt.Provider
      value={{ cartState, cartDispatch, filterProduct, setFilterDispatch }}
    >
      {children}
    </shopIt.Provider>
  );
}

export default Context;
