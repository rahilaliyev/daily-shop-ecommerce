import { LOG, REMOVE_LOG } from "../actions/actionTypes";

const initialState = {
  data: "",
};

const logInOut = (state = initialState, action) => {
  switch (action.type) {
    case LOG:
      return {
        ...state,
        data: action.log,
      };
    case REMOVE_LOG:
      return {
        ...state,
        data: "",
      };
    default:
      return state;
  }
};

export default logInOut;
