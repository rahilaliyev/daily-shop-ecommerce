import { combineReducers } from "redux";
import uploadDataReducer from "./uploadDataReducer";
import basketReducer from "./basketReducer";

export default combineReducers({
  uploadDataReducer,
  basket: basketReducer,
});
