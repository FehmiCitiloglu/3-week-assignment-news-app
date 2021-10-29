import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/newsActionTypes";
import { loadedNews } from "./newsActions";
import localforage from "localforage";

export const fileCache = localforage.createInstance({
  name: "filecache",
});

export const fetchNews = (category) => {
  return async (dispatch) => {
    const cachedResult = await fileCache.getItem(category);

    if (cachedResult) {
      // console.log(cachedResult);
      dispatch(loadedNews(cachedResult.articles));
      return cachedResult.articles;
    }
    // const response = await axios(`${BASE_URL}&q=${category}&apiKey=${API_KEY}`);
    const response = await axios(`${BASE_URL}&q=${category}&apiKey=${API_KEY}`);
    console.log(response);
    const data = await response.data;
    console.log(data.articles);
    dispatch(loadedNews(data.articles));

    await fileCache.setItem(category, data);

    return data;
  };
};
