import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./background.module.scss";
import { useDndStore } from "../../store/DndStore ";

const Background: React.FC = () => {
  const { profile } = useDndStore();

  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        sx={{
          backgroundColor: "#333",
          borderRadius: "8px",
          margin: "10px",
        }}
      >
        <Typography sx={{ fontSize: 28 }}>Identità e Origini</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.bgProfileDetails}>
        <p>
          <span>Livello:</span> {profile?.baseInfo.level}
        </p>
        <p>
          <span>Razza:</span> {profile?.baseInfo.race}
        </p>
        <p>
          <span>Classe:</span> {profile?.baseInfo.class}
        </p>
        <p>
          <span>Allineamento:</span> {profile?.baseInfo.alignment}
        </p>
        <p>
          <span>Background:</span> {profile?.baseInfo.background}
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default Background;
