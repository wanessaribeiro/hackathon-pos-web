import { useEffect, useRef, useState } from "react";
import pinesImg from "./../../domain/assets/pines.png";
import logoImg from "./../../domain/assets/CooFIAP.png";
import logoutImg from "./../../domain/assets/logout.png";
import userImg from "./../../domain/assets/user.png";
import "./Header.css";
import { user } from "../../domain/Types";

type HeaderProps = {
  account: user;
  onClickLogout: () => void;
  onClickAccount: () => void;
};

export default function Header({
  account,
  onClickLogout,
  onClickAccount,
}: HeaderProps) {
  return (
    <div className="header">
      <div className="nav-header">
        <div className="logo-container">
          <img src={pinesImg} alt="Pinheiros" className="pine-image" />
          <img src={logoImg} alt="CooFIAP" className="logo-image" />
        </div>
      </div>

      <div className="icons">
        <div className="user-name">
          <small className="header-name">{account.name}</small>
          <button onClick={onClickAccount} className="user-icon">
            <img src={userImg} alt="Usuario" className="home-icon" />
          </button>
        </div>
        <button onClick={onClickLogout} className="logout-icon">
          <img src={logoutImg} alt="Sair" className="home-icon" />
        </button>
      </div>
    </div>
  );
}
