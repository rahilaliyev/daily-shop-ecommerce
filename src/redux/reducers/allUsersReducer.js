import { ALL_USERS } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default allUsersReducer;
