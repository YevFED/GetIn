import React from "react";
import styles from "./Header.module.scss";
import ProfileCard from "../ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <header className={styles.header}>
      <p className={styles.logo}>GetIn</p>

      {token ? (
        <ProfileCard />
      ) : (
        <Link to="/auth" className={styles.authLink}>
          Auth
        </Link>
      )}
    </header>
  );
};

export default Header;
