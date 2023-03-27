import React from "react";
import { UilSearch, UilEnvelope, UilBell } from "@iconscout/react-unicons";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." /> <UilSearch />
      </div>

      <div className="items">
        <div className="item">
          <UilEnvelope />
        </div>

        <div className="item">
          <UilBell />
        </div>

        <div className="item">
          <img
            src="https://hinhnen123.com/wp-content/uploads/2021/06/anh-meo-cute-nhat-30.jpg"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
