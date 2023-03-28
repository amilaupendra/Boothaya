import React, { useState } from "react";
import "./sidebar.css";
import FarmerControl from "../../pages/farmerControl/FarmerControl";
import { Calculate, Payment } from "@mui/icons-material";
import { GiThreeLeaves } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar-main">
      <IconContext.Provider value={{ color: "fff" }}>
        <div className="sidebar ">
          <nav className="nav-menu">
            <ul className="nav-menu-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="sidebar-icon">
                <span style={{ fontSize: "12rem" }}>
                  <GiThreeLeaves />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </div>
  );
}
