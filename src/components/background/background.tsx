import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './background.module.scss'
import { useDndStore } from '../../store/DndStore ';

const Background: React.FC = () => {
  const { profile } = useDndStore();

    return(
        <div className={styles.backgroundAccordionWrapper}>
      <Accordion className={styles.backgroundAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: 28}}>dettagli profilo</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.bgProfileDetails}>
          <p><span>Razza:</span> {profile?.baseInfo.race}</p>
          <p><span>Classe:</span> {profile?.baseInfo.class}</p>
          <p><span>Background:</span> {profile?.baseInfo.background}</p>
          <p><span>Allineamento:</span> {profile?.baseInfo.alignment}</p>
        </AccordionDetails>
      </Accordion>
    </div>
    )
};

export default Background;