import {
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actions/actionTypes";

const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default selectedProductsReducer;
