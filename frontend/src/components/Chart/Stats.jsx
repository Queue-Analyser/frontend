import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import stats from '../../image/stats.png'
import styles from '../../styles/MainPage.module.css'

const Stats = (props) => {

    const text = props.text
    const people = props.people

    return (
        <div>
            <Accordion style={{ backgroundColor: '#b0b1b3' }}>
                    <AccordionSummary
                        //   expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>
                            <h2>Stats {people}</h2>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.inline}>
                            <img className={styles.icon} alt="example" src={stats}></img>
                            <h3>{text}</h3>
                        </Typography>
                    </AccordionDetails>
            </Accordion>  
        </div>
    );
};

export default Stats;