import {
  UPLOAD_DATA,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  ALL_USERS,
  LOG,
  REMOVE_LOG,
  INCREASE_QUANTITY,
  DECRESSE_QUANTITY,
} from "./actionTypes";

export const uploadData = (data) => {
  return { type: UPLOAD_DATA, data };
};

export const addToBasket = (data) => {
  return { type: ADD_TO_BASKET, payload: data };
};

export const removeFromBasket = (data) => {
  return { type: REMOVE_FROM_BASKET, data };
};

export const increaseQuantity = () => {
  return {
    type: INCREASE_QUANTITY,
  };
};

export const decreaseQuantity = () => {
  return {
    type: DECRESSE_QUANTITY,
  };
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

export const allUser = (data) => {
  return { type: ALL_USERS, data };
};

export const logInOut = (log) => {
  return { type: LOG, log };
};

export const removeLog = () => {
  return { type: REMOVE_LOG };
};
