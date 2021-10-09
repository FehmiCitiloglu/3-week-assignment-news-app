import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Image, List } from "antd-mobile";
import { useDispatch } from "react-redux";
import { fetchNews } from "../store/actions/fetch-news";
import store from "../store/index";

const CategoryNews = (props) => {
  const { category } = useParams();
  const [newsData, setNewsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [dispatch, category]);

  console.log(store.getState());

  store.subscribe(() => {
    setNewsData(store.getState());
  });

  // const newsData = useSelector((state) => state.news);

  console.log(typeof newsData);
  console.log(newsData);
  // console.log(handleNewsData);
  return (
    <div>
      <List>
        {newsData.map((news) => (
          <List.Item
            key={news.source.id}
            prefix={
              <Image
                src={news.urlToImage}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={news.description}
          >
            <a href={news.url}>{news.title}</a>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default CategoryNews;
