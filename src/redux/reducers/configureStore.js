import { configureStore, applyMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function createAppStore() {
  return configureStore({
    reducer: rootReducer,
    thunk: applyMiddleware
  });
}
