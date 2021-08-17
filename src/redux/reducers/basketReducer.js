import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

const initialState = {
  data: [],
  count: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        data: [...state.data, action.data],
        count: state.count + 1,
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        data: state.data.filter((card) => card.key !== action.key),
      };
    default:
      return state;
  }
};

export default basketReducer;
