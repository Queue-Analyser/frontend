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
                            <>Stats {people}</>
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