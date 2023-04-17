import { Paper } from '@mui/material';
import React from 'react';
import styles from '../styles/Header.module.css'
import icon from '../image/favicon.png'

const Header = () => {
    return (
        <>
           <Paper style={{ backgroundColor: '#e3d3a6' }} className={styles.header} elevation={0}>
                <img className={styles.logo} alt="example" src={icon}></img>
           </Paper>
        </>
    );
};

export default Header;