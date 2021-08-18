import {
  UPLOAD_DATA,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "./actionTypes";

export const uploadData = (data) => {
  return { type: UPLOAD_DATA, data };
};

export const addToBasket = (data) => {
  return { type: ADD_TO_BASKET, data };
};

export const removeFromBasket = (data) => {
  return { type: REMOVE_FROM_BASKET, data };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
