import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://images.vexels.com/media/users/3/137627/isolated/preview/012f7bd53633f5a6e78e60ea08948c55-minimalist-infinity-logo-by-vexels.png"
        alt="logo"
      />

      <div className="navs">
        <button onClick={props.addClicked} className="nav-button">
          <AddCircleIcon fontSize="large" />
        </button>
        <button onClick={props.userClicked} className="nav-button">
          <AccountCircleIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
