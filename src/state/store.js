import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";

let store = createStore(reducer);

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
