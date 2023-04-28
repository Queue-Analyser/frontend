import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import LastStats from './LastStats';

const Stats = (props) => {

    
    const people = props.people
    const data = props.data
    return (
        <div>
            <Accordion style={{ backgroundColor: '#fff' }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>
                            <>Текущее число людей в очереди: {people}</>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {data.map((people, index) =>
                        <LastStats key={index} allStats={people.people}/>
                    )}
                    </AccordionDetails>
            </Accordion>  
        </div>
    );
};

export default Stats;