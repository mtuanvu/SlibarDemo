import React, { useState } from "react";
import Dashboard from "../Images/dashboard.svg";
import Icon from "../Images/Icon.svg";
import News from "../Images/news.svg";
import Performance from "../Images/performance.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import Transactions from "../Images/transactions.svg";
import Profile from "../Images/profile.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };
  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div
        className={
          closeMenu === false ? "logoContainer" : "logoContainer active"
        }
      >
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="title">evergreen</h2>
      </div>
      <div
        className={
          closeMenu === false ? "burgerContainer" : "burgerContainer active"
        }
      ></div>
      <div
        className={
          closeMenu === false ? "burgerTrigger" : "burgerTrigger active"
        }
      >
        <div className="burgerMenu"></div>
      </div>
      <div
        className={
          closeMenu === false ? "profileContainer" : "profileContainer active"
        }
      >
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hello, John</p>
          <p>johnsmith@gmail.com</p>
        </div>
        <div
          className={
            closeMenu === false
              ? "contenstContainer"
              : "contenstContainer active"
          }
        >
          <ul>
            <li className="active">
              <img src={Dashboard} alt="dashboard" />
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <img src={Transactions} alt="transactions" />
              <a href="/transactions">Transactions</a>
            </li>
            <li>
              <img src={Performance} alt="performance" />
              <a href="/performance">Performance</a>
            </li>
            <li>
              <img src={News} alt="news" />
              <a href="/news">News</a>
            </li>

            <li>
              <img src={Settings} alt="settings" />
              <a href="/settings">Settings</a>
            </li>

            <li>
              <img src={Support} alt="support" />
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
