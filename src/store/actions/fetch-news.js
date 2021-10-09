import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/newsActionTypes";
import { loadedNews } from "./newsActions";

export const fetchNews = (category) => {
  return async (dispatch) => {
    // const response = await axios(`${BASE_URL}&q=${category}&apiKey=${API_KEY}`);
    const response = await axios(`${BASE_URL}&q=${category}&apiKey=${API_KEY}`);
    console.log(response);
    const data = await response.data;
    console.log(data.articles);
    dispatch(loadedNews({ news: data.articles }));
    return data;
  };
};
