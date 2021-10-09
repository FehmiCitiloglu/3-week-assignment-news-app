import React from "react";
import { NavBar, Space, Toast } from "antd-mobile";
import { useHistory } from "react-router";
import { BrowserHistory } from "react-router/lib/BrowserHistory";

const BackButton = (props) => {
  let history = useHistory();

  const back = () => {
    BrowserHistory.goBack();
    // history.push(props.previousRoute);
  };
  return (
    <div>
      <NavBar back="back" onBack={back}>
        {props.children}
      </NavBar>
    </div>
  );
};

export default BackButton;
