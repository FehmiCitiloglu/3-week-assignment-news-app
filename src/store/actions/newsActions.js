import { GET_ALL_NEWS } from "../constants/newsActionTypes";

export const loadedNews = (news) => {
  return { type: GET_ALL_NEWS, payload: news };
};
