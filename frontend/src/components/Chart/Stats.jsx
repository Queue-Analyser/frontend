import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import LastStats from './LastStats';

const Stats = (props) => {

    
    const people = props.people
    const data = props.data
    // console.log(data);
    return (
        <div>
            <Accordion style={{ backgroundColor: '#b0b1b3' }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>
                            <h2>Stats {people}</h2>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {data.map(people =>
                        <LastStats allStats={people.people}/>
                    )}
                        
                    </AccordionDetails>
            </Accordion>  
        </div>
    );
};

export default Stats;