import { Paper } from '@mui/material';
import React from 'react';
import styles from '../styles/Header.module.css'
import icon from '../image/favicon.png'

const Header = () => {
    return (
        <>
           <Paper className={styles.header} elevation={10}>
            пока не знаю как лучше сделать хедер
                <img className={styles.logo} alt="example" src={icon}></img>
           </Paper>
        </>
    );
};

export default Header;