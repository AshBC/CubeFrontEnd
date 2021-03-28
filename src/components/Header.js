import React from "react";
import logo from "../logo/Cubes.svg";
import uploadIcon from "../icons/Icon-upload.svg";
import { Link } from "react-router-dom";
import DropDown from "../components/DropButton";

function Header(props) {
  return (
    <header className="header">
      <nav className="header__links header__links--left">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </nav>
      <div className="btn-pic">
        <DropDown />
        <Link to="/thoughts" className="search-btn">
          Thoughts
        </Link>
        <Link to="/exhibitions" className="search-btn">
          Exhibitions
        </Link>
        <Link to="/upload" className="search-btn upload">
          <img
            className="plus-sign"
            src={uploadIcon}
            alt="press this button to go to the page where you can upload your online exhibition information"
          />
          Ur Exhibition
        </Link>
      </div>
    </header>
  );
}

export default Header;
