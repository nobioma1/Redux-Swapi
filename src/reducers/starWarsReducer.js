import { FETCH_CHARACTERS, FETCH_SUCCESS, FETCH_FAILED } from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, isFetching: false, characters: action.payload };
    case FETCH_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
