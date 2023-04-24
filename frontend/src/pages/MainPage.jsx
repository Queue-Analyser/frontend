import React from 'react';
import RouteChart from '../components/Chart/RouteChart';
import styles from '../styles/MainPage.module.css'
import ButtonLink from '../components/UI/ButtonLink';

const MainPage = () => {
    const btn = [
        {path: '/chart/0', text: 'ГЗ 1 этаж'},
        {path: '/chart/1', text: 'ГЗ 3 этаж'},
        {path: '/chart/2', text: 'УЛК 5 этаж'},
        {path: '/chart/3', text: 'УЛК 2 этаж'},
    ]

    return (
        <div className={styles.main_box}>
            <div className={styles.left_box}>
            {btn.map((obj) =>
                <ButtonLink link={obj.path} text={obj.text}/>
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