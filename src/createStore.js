import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

export const middleWares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleWares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
