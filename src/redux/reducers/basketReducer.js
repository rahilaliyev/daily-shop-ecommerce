import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  INCREASE_QUANTITY,
  DECRESSE_QUANTITY,
} from "../actions/actionTypes";

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
    case INCREASE_QUANTITY:
      return {
        ...state,
        count: state.count + 1,
      };
      case DECRESSE_QUANTITY:
        return {
          ...state,
          count: state.count - 1,
        };
    default:
      return state;
  }
};

export default basketReducer;
