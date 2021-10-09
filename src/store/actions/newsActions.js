import { GET_ALL_NEWS } from "../constants/newsActionTypes";

export const loadedNews = (news) => ({ type: GET_ALL_NEWS, news: news });
