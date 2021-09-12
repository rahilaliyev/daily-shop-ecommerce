import { combineReducers } from "redux";
import uploadDataReducer from "./uploadDataReducer";
import basketReducer from "./basketReducer";
import selectedProductsReducer from "./selectedProductReducer";
import allUsersReducer from "./allUsersReducer";
import logReducer from "./logReducer";
import categoriesReduceer from "./categoriesReducer";

export default combineReducers({
  uploadDataReducer,
  basket: basketReducer,
  product: selectedProductsReducer,
  users: allUsersReducer,
  login: logReducer,
  categoriesReduceer,
});
