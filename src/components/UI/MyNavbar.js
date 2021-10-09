import React from "react";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router";

const MyNavbar = (props) => {
  let history = useHistory();

  const back = () => {
    history.goBack();
  };

  const backHandle = props.isCategory ? "" : "back";

  return (
    <div>
      <NavBar
        back={backHandle}
        onBack={back}
        {...props}
        style={{
          background: "#008b8b",
          color: "white",
        }}
      >
        {props.children}
      </NavBar>
    </div>
  );
};

export default MyNavbar;
