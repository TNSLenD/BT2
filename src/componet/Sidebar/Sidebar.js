import "./Sidebar.css";
import React, { useState } from "react";
import Logo from "../../img/logo.png";
import { SidebarData } from "../../Data/Data";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState();

  return (
    <div>
      <div className="Sidebar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link to={item.to}>
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon className="icon" />
                  <span className="heading"> {item.heading}</span>
                </div>{" "}
              </Link>
            );
          })}
        </div>
        <div className="menu1">Goi dich vu</div>
      </div>
    </div>
  );
};

export default Sidebar;
