import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
  } from "../actions/index";
  
  const initialState = {
    smurf: {"name":"Brainey","age":200,"height":"5cm","id":0},
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_QUOTE_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_QUOTE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          quote: action.payload
        };
      case FETCHING_QUOTE_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: "There was an error."
        };
      default:
        return state;
    }
  };