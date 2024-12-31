import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useDndStore } from "../../store/DndStore ";
import styles from "./abilities.module.scss";
import { AbilityScores } from "../../entities/abilityScores";
import Privileges from "./privileges";
import Spells from "./spells";
import Feats from "./feats";
import Background from "../background/background";

const Abilities: React.FC = () => {
  const { profile } = useDndStore();

  const abilityOrder: (keyof AbilityScores)[] = [
    "str",
    "dex",
    "con",
    "int",
    "wis",
    "cha",
  ];

  const handleAsBonus = (as: number): string => {
    const bonus = Math.floor((as - 10) / 2);
    return bonus >= 0 ? `(+${bonus})` : `(${bonus})`;
  };

  return (
    <>
      <Accordion sx={{ width: "100%" }} expanded>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ fontSize: 28 }}>Punteggi abilità</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.asProfileDetails}>
          {profile &&
            abilityOrder.map((key) => {
              const { value, prof } = profile.abilityScores[key];
              let displayBonus = handleAsBonus(value);

              // Handle the special case for CHA
              if (key === "cha" && profile.abilityScores["wis"].value !== undefined) {
                const wisBonus = Math.floor((profile.abilityScores["wis"].value - 10) / 2);
                displayBonus = handleAsBonus(value) + (wisBonus >= 0 ? ` (+${wisBonus})` : ` (${wisBonus})`);
              }

              return (
                <p key={key}>
                  <span>{key.toUpperCase()}</span> {value}{" "}
                  {value !== undefined
                    ? displayBonus +
                      (prof
                        ? ` (Prof: +${profile.survivalInfo.proficiency})`
                        : "")
                    : "(0)"}
                </p>
              );
            })}
        </AccordionDetails>
      </Accordion>
      <Spells />
      <Privileges />
      <Feats />
      <Background />
    </>
  );
};

export default Abilities;
