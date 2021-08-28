import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

const initialState = {
  data: [],
  count: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, data: [...state.data, { ...action.payload }] };
    case REMOVE_FROM_BASKET:
      console.log(action.data.id);
      return {
        ...state,
        data: state.data.filter((productId) => productId.id !== action.data.id),
      };

    default:
      return state;
  }
};

export default basketReducer;
