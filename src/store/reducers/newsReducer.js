import axios from "axios";
import { GET_ALL_NEWS } from "../constants/newsActionTypes";

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, news: [action.news] };
    default:
      return state;
  }
};
