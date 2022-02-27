import { FETCH_COLLECTION } from "../types";

const INITIAL_STATE = {
  books: [],
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
