import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDndStore } from "../../store/DndStore ";
import styles from "./abilities.module.scss";

const Abilities: React.FC = () => {
  const { profile } = useDndStore();

  const handleAsBonus = (as: number): string => {
    const bonus = Math.floor((as - 10) / 2);
    return bonus >= 0 ? `(+${bonus})` : `(${bonus})`;
  };

  const abilityScores = [
    { name: "Str", score: profile?.abilityScores.str },
    { name: "Dex", score: profile?.abilityScores.dex },
    { name: "Con", score: profile?.abilityScores.con },
    { name: "Int", score: profile?.abilityScores.int },
    { name: "Wis", score: profile?.abilityScores.wis },
    { name: "Cha", score: profile?.abilityScores.cha },
  ];

  return (
    <>
      <Accordion sx={{ width: "100%", p: 2 }} expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: 28 }}>Punteggi abilità</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.asProfileDetails}>
          {abilityScores.map(({ name, score }) => (
            <p key={name}>
              <span>{name}</span> {score}{" "}
              {score !== undefined ? handleAsBonus(score) : "(0)"}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%", p: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{ fontSize: 28 }}>Talenti</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {profile?.feats.map((feat: { title: string; description: string }, index: number) => (
            <Box
              key={index}
              sx={{
                borderRadius: "8px",
                p: 2,
                mb: 2,
                backgroundColor: "#333",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {feat.title}
              </Typography>
              <Typography variant="body1" className={styles.text}>{feat.description}</Typography>
            </Box>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
    </>
  );
};

export default Abilities;
