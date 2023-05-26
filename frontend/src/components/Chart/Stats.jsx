import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import LastStats from './LastStats';
import { useSelector } from 'react-redux';

const Stats = (props) => {

    const chart = useSelector(state => state.chart.chart)
    const people = props.people

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
                        <LastStats text={chart[0].text} allStats={people}/>
                        <LastStats text={chart[1].text} allStats={people}/>
                        <LastStats text={chart[2].text} allStats={people}/>
                        <LastStats text={chart[3].text} allStats={people}/>
                    </AccordionDetails>
            </Accordion>  
        </div>
    );
};

export default Stats;