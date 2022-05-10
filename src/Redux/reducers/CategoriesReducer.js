import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, GET_CATEGORY } from "../types";

const initialState = {
  all: [],
  single: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        all: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        all: action.payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        single: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        all: state.all.filter((a) => a._id !== action.payload),
      };
    default:
      return state;
  }
}
