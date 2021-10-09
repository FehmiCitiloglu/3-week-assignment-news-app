import React from "react";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router";

const BackButton = (props) => {
  let history = useHistory();

  const back = () => {
    history.goBack();
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
