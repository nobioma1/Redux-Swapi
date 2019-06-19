import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const fetchingCharacters = characters => {
  return { type: FETCH_CHARACTERS };
};

export const addCharacters = characters => {
  return { type: FETCH_SUCCESS, payload: characters };
};

export const errorFetching = () => {
  return { type: FETCH_FAILED, payload: 'Error Fetching Data, Try again' };
};
