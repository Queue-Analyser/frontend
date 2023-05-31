import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material';
import LastStats from './LastStats';
import styles from '../../styles/Chart.module.css';
import { get_fill } from '../../utils/get_fill';

const Stats = (props) => {
  const chart = useSelector(state => state.chart.chart);
  const people = props.people;
  const id = props.id;

  return (
    <div className={styles.accord}>
      <Accordion style={{ backgroundColor: '#fff' }}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>
          Текущее число людей в очереди: {" "}
          <span style={{ color: get_fill(people[id]?.amount) }}>
           {people[id]?.amount}
          </span>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {people.map((person, i) => (
            <LastStats key={i} text={chart[i].text} amount={person.amount} time={person.time} />
          ))}
        </AccordionDetails>
      </Accordion>  
    </div>
  );
};

export default Stats;
