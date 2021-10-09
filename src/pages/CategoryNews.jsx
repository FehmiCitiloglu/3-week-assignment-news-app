import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Image, List } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/actions/fetch-news";
import store from "../store/index";

const CategoryNews = (props) => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setNews(dispatch(fetchNews(category)));
    // store.getState();
  }, [dispatch]);

  console.log(news);

  return (
    <div>
      <List>
        {/* {users.map((user) => (
          <List.Item
            key={user.name}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))} */}
        {category}
      </List>
    </div>
  );
};

export default CategoryNews;
