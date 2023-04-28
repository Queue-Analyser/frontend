import React from 'react';
import RouteChart from '../components/Chart/RouteChart';
import styles from '../styles/MainPage.module.css'
import ButtonLink from '../components/UI/ButtonLink';
import { useSelector } from 'react-redux';

const MainPage = () => {
    
    const chart = useSelector(state => state.chart.chart)
    

    return (
        <div className={styles.main_box}>
            <div className={styles.left_box}>
            {chart.map((obj) =>
                <ButtonLink key={obj.id} link={obj.path} text={obj.text}/>
            )}                
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