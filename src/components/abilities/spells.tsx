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

const Spells: React.FC = () => {
  const { profile } = useDndStore();

  const spellLevels = profile?.spells || {};

  return (
    <>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{
            backgroundColor: "#333",
            borderRadius: "8px",
            margin: "10px",
          }}
        >
          <Typography sx={{ fontSize: 28 }}>Magie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {Object.entries(spellLevels).map(([level, spellsAtLevel]) =>
              spellsAtLevel.length > 0 ? (
                <Box key={level} sx={{ mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    {level === "0" ? "Cantrips" : `${level}° Livello`}
                  </Typography>
                  {spellsAtLevel.map((spell, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: "8px",
                        p: 2,
                        mb: 2,
                        backgroundColor: "#333",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mb: 1 }}
                        className={styles.text}
                      >
                        {spell.name}
                      </Typography>
                      <div className={styles.text}>
                        <Typography
                          variant="body1"
                          className={styles.textItalic}
                        >
                          Tempo di Lancio: <span>{spell.castingTime}</span>
                        </Typography>
                        <Typography
                          variant="body1"
                          className={styles.textItalic}
                        >
                          Gittata: <span>{spell.range}</span>
                        </Typography>
                        <Typography
                          variant="body1"
                          className={styles.textItalic}
                        >
                          Bersaglio: <span>{spell.target}</span>
                        </Typography>
                        <Typography
                          variant="body1"
                          className={styles.textItalic}
                        >
                          Durata: <span>{spell.duration}</span>
                        </Typography>
                        <Typography
                          variant="body1"
                          className={styles.textItalic}
                        >
                          Componenti:
                          <span> {spell.components.verbal ? "V" : ""}</span>
                          <span>{spell.components.somatic ? ", S" : ""}</span>
                          <span>
                            {spell.components.material
                              ? `, M (${spell.components.material})`
                              : ""}
                          </span>
                        </Typography>
                        <br />
                        <Typography variant="body1" className={styles.text}>
                          {spell.description}
                        </Typography>
                        <br />
                        <Typography variant="body1" className={styles.text}>
                          {spell.note}
                        </Typography>
                      </div>
                    </Box>
                  ))}
                </Box>
              ) : null
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Spells;
