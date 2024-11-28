import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './background.module.scss'

const Background: React.FC = () => {
    return(
        <div className={styles.backgroundAccordionWrapper}>
      <Accordion className={styles.backgroundAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize: 28}}>dettagli profilo</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.bgProfileDetails}>
          <p><span>Razza:</span> Umano</p>
          <p><span>Classe:</span> Ranger</p>
          <p><span>Background:</span> Marinaio</p>
          <p><span>Allineamento:</span> Caotico Buono</p>
        </AccordionDetails>
      </Accordion>
    </div>
    )
};

export default Background;