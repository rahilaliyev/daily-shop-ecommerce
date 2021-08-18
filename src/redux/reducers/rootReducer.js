import { combineReducers } from "redux";
import uploadDataReducer from "./uploadDataReducer";
import basketReducer from "./basketReducer";
import selectedProductsReducer from "./selectedProductReducer";

export default combineReducers({
  uploadDataReducer,
  basket: basketReducer,
  product: selectedProductsReducer,
});
