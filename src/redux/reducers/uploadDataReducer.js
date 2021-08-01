import { UPLOAD_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const uploadDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default uploadDataReducer;
