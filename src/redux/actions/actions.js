import { UPLOAD_DATA, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

export const uploadData = (data) => {
  return { type: UPLOAD_DATA, data };
};

export const addToBasket = (data) => {
  return { type: ADD_TO_BASKET, data };
};

export const removeFromBasket = (key) => {
  return { type: REMOVE_FROM_BASKET, key };
};
