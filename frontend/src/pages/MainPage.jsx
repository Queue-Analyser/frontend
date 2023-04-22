import React from 'react';
import RouteChart from '../components/Chart/RouteChart';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from '../styles/MainPage.module.css'

const MainPage = () => {
    

    return (
        <div className={styles.main_box}>
            <div className={styles.left_box}>
                <Link className={ styles.link } to="/chart/0"><Button className={ styles.btn } variant="outlined">Chart1</Button></Link> 
                <Link className={ styles.link } to="/chart/1"><Button className={ styles.btn } variant="outlined">Chart2</Button></Link>              
                <Link className={ styles.link } to="/chart/2"><Button className={ styles.btn } variant="outlined">Chart3</Button></Link>              
                <Link className={ styles.link } to="/chart/3"><Button className={ styles.btn } variant="outlined">Chart4</Button></Link>              
            </div>
            <div className={styles.right_box}>
                <div>
                    <RouteChart/> 
                </div>
            </div>  
        </div>
    );
};

export default MainPage;