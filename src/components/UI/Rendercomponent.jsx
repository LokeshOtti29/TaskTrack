import React from "react";
import Login from "../Auth/Login";
import AccountInfo from "./AccountInfo";

const Rendercomponent = ({ page }) => {
  switch (page) {
    case 0:
      return <AccountInfo />;
    default:
      return <AccountInfo />;
  }
};

export default Rendercomponent;
