import { ADD_QUESTION, DELETE_QUESTION,  GET_QUESTION, GET_QUESTIONS } from "../types";

const initialState = {
  all: [],
  single: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        all: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        all: action.payload,
      };
    case GET_QUESTION:
      return {
        ...state,
        single: action.payload,
      };
    case DELETE_QUESTION:
      return {
        ...state,
        all: state.all.filter((a) => a._id !== action.payload),
      };
    default:
      return state;
  }
}
