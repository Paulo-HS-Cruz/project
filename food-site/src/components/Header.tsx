import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h2>Chef Priscila Deus</h2>
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
              <a
                href="https://www.instagram.com/chefprisciladeus/"
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
