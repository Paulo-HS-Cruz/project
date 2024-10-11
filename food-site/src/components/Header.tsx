import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-container">
          <div className="text-part">
            <h2>
              CHEZ DEUS
              <img
                src="icons/chezdeus.png"
                alt="Logo Chez Deus"
                className="logo-img"
              />
            </h2>
          </div>
        </div>
        <span style={{ fontSize: "20px" }}>Chef Priscila Deus</span>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#events">Eventos</a>
            </li>
            <li>
              <a href="#midia">Mídia</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chefprisciladeus/"
                target="_blank"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
