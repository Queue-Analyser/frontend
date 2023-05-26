import React from 'react'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import RouteChart from './RouteChart';
import styles from '../../styles/MainPage.module.css'
import ButtonLink from '../UI/ButtonLink';

export default function Chart() {
  const chart = useSelector(state => state.chart.chart)

  return (
    <Box className={styles.main_box}>
        <Box className={styles.left_box}>
            {chart.map((obj) =>
                <ButtonLink key={obj.id} link={obj.path} text={obj.text}/>
            )}                
        </Box>
        <Box className={styles.right_box}>
            <RouteChart/> 
        </Box>  
    </Box>
  )
}
