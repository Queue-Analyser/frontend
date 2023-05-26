import React from 'react';
import styles from '../styles/Header.module.css'
import icon from '../image/logo.png'

const Header = () => {
  return (
    <div className={styles.header} elevation={0}>
      <img className={styles.logo} alt="example" src={icon}></img>
    </div>
  );
};

export default Header;