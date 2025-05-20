import React from "react";
import "./styles.css";
import Tab from "../common/Tab";
import { CiHome } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const TABS_DATA = [
  {
    icon: <CiHome />,
    text: "Home",
  },
  {
    icon: <CiUser />,
    text: "Payee",
  },
  {
    icon: <MdOutlinePayment />,
    text: "Payment Methods",
  },
  {
    icon: <CiWallet />,
    text: "Payout",
  },
];

export const SideBar = () => {
  return (
    <div className="SideBarWrapper">
      <div className="TabsContainer">
        <div className="LogoContainer">
          <div className="Logo">R</div>
          <span className="LogoText">Root</span>
        </div>
        <div className="TabsWrapper">
          {TABS_DATA.map((el, index) => (
            <Tab key={index} {...el} />
          ))}
        </div>
      </div>
      <div className="UserSection">
        <div className="UserIcon"></div>
        <div className="UserDetails">
          <span className="UserName">Admin User</span>
          <span className="UserEmail">admin@root.credit</span>
        </div>
        <div className="UserActions">
          <span className="ActionButton">
            <LuBookText />
          </span>
          <span className="ActionButton">
            <MdLogout />
          </span>
        </div>
      </div>
    </div>
  );
};
