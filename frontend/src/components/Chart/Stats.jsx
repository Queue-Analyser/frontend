import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import LastStats from './LastStats';
import { useSelector } from 'react-redux';

const Stats = (props) => {
  const chart = useSelector(state => state.chart.chart)
  const people = props.people
  const id = props.id

  return (
    <Accordion style={{ backgroundColor: '#fff' }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography>
            Текущее число людей в очереди: {people[id]?.amount}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {people.map((person, i) => (
          <LastStats key={i} text={chart[i].text} amount={person.amount} time={person.time} />
        ))}
      </AccordionDetails>
    </Accordion>  
  );
};

export default Stats;