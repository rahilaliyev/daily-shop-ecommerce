import {
  ELECTRONIC_CATEGORY,
  JEWELLERY_CATEGORY,
  MENS_CATEGORY,
  WOMENS_CATEGORY,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

const categoriesReduceer = (state = initialState, action) => {
  switch (action.type) {
    case MENS_CATEGORY:
      return {
        ...state,
        data: action.data,
      };
    case WOMENS_CATEGORY:
      return {
        ...state,
        data: action.data,
      };
    case JEWELLERY_CATEGORY:
      return {
        ...state,
        data: action.data,
      };
    case ELECTRONIC_CATEGORY:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default categoriesReduceer;
