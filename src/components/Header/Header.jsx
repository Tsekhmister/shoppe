import React from "react";
import styles from "./style.module.scss";
import logo from "../../assets/logo.png";
import line from "../../assets/line.png";
import search from "../../assets/search.png";
import basket from "../../assets/basket.png";
import user from "../../assets/user.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.header__menuContainer}>
        <ul className={styles.header__menu}>
          <a href="/">
            <li>Shop</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Our Story</li>
          </a>
          <a href="#">
            <li>
              <img src={line} alt="line" className={styles.menu__icon} />
            </li>
          </a>
          <a href="#">
            <li>
              <img src={search} alt="search" className={styles.menu__icon} />
            </li>
          </a>
          <a href="#">
            <li>
              <img src={basket} alt="basket" className={styles.menu__icon} />
            </li>
          </a>
          <a href="#">
            <li>
              <img src={user} alt="user avatar" className={styles.menu__icon} />
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
