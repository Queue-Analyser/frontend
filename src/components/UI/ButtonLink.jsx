import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Button.module.css'
import { Button } from '@mui/material';

const ButtonLink = (props) => {
    return (
        <Link className={ styles.link } to={props.link}>
            <Button className={styles.btn} variant="outlined">{props.text}</Button>
        </Link>
    );
};

export default ButtonLink;