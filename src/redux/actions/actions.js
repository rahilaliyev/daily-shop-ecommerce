import { UPLOAD_DATA } from "./actionTypes";

export const uploadData = (data) => {
  return { type: UPLOAD_DATA, data };
};
