import React from 'react';
import RouteChart from '../components/Chart/RouteChart';
import { Link } from 'react-router-dom';
import { CHART_1, CHART_2, CHART_3, CHART_4 } from '../utils/consts';
import Button from '@mui/material/Button';
import styles from '../styles/MainPage.module.css'
import Stats from '../components/Chart/Stats';

const MainPage = () => {
    return (
        <div className={styles.main_box}>
            <div className={styles.left_box}>
                <Link className={ styles.link } to={CHART_1}><Button className={ styles.btn } variant="outlined">Chart1</Button></Link> 
                <Link className={ styles.link } to={CHART_2}><Button className={ styles.btn } variant="outlined">Chart2</Button></Link> 
                <Link className={ styles.link } to={CHART_3}><Button className={ styles.btn } variant="outlined">Chart3</Button></Link> 
                <Link className={ styles.link } to={CHART_4}><Button className={ styles.btn } variant="outlined">Chart4</Button></Link>                
            </div>
            <div className={styles.right_box}>
                <div>
                    <RouteChart/> 
                </div>
                {/* <div className={ styles.accord }>
                    <Stats/>  
                </div> */}
               
        
            </div>  
        </div>
    );
};

export default MainPage;