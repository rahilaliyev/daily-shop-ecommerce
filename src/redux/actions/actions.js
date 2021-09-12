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
  MENS_CATEGORY,
  WOMENS_CATEGORY,
  ELECTRONIC_CATEGORY,
  JEWELLERY_CATEGORY,
} from "./actionTypes";

export const uploadData = (data) => {
  return { type: UPLOAD_DATA, data };
};

export const mensCategory = (data) => {
  return { type: MENS_CATEGORY, data };
};
export const womensCategory = (data) => {
  return { type: WOMENS_CATEGORY, data };
};
export const electronicsCategory = (data) => {
  return { type: ELECTRONIC_CATEGORY, data };
};
export const jewelleryCategory = (data) => {
  return { type: JEWELLERY_CATEGORY, data };
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
