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

  const handleAsBonus = (
    as: number,
    prof: boolean,
    proficiencyBonus: number
  ): string => {
    const bonus = Math.floor((as - 10) / 2) + (prof ? proficiencyBonus : 0);
    return bonus >= 0 ? `(+${bonus})` : `(${bonus})`;
  };

  return (
    <>
      <Accordion sx={{ width: "100%" }} expanded>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ fontSize: 28 }}>Punteggi abilità</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.asProfileDetails}>
          {profile && Object.entries(profile.abilityScores).map(
            ([name, { value, prof }]) => (
              <p key={name}>
                <span>{name.toUpperCase()}</span> {value}{" "}
                {value !== undefined
                  ? handleAsBonus(value, prof, profile.survivalInfo.proficiency)
                  : "(0)"}
              </p>
            )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: 28 }}>Talenti</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {profile?.feats.map(
              (feat: { title: string; description: string }, index: number) => (
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
                  <Typography variant="body1" className={styles.text}>
                    {feat.description}
                  </Typography>
                </Box>
              )
            )}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ fontSize: 28 }}>Privilegi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {/* Background Section */}
            <Box
              sx={{
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Background
              </Typography>
              {profile?.privileges.background.map(
                (
                  background: { title: string; description: string },
                  index: number
                ) => (
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
                      {background.title}
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                      {background.description}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* Class Section */}
            <Box
              sx={{
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Classe
              </Typography>
              {profile?.privileges.class.map(
                (
                  classe: { title: string; description: string },
                  index: number
                ) => (
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
                      {classe.title}
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                      {classe.description}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{ fontSize: 28 }}>Magie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {profile != null && (
              <>
                {/* Level 1 */}
                {profile?.spells?.[1]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      1° Livello
                    </Typography>
                    {profile.spells[1].map((spell, index) => (
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
                        >
                          {spell.name}
                        </Typography>
                        <Typography variant="body1" className={styles.text}>
                          <p className={styles.textItalic}>
                            Tempo di Lancio: <span>{spell.castingTime}</span>
                          </p>
                          <p className={styles.textItalic}>
                            Gittata: <span>{spell.range}</span>
                          </p>
                          <p className={styles.textItalic}>
                            Durata: <span>{spell.duration}</span>
                          </p>
                          <p className={styles.textItalic}>
                            Bersaglio: <span>{spell.range}</span>
                          </p>
                          <br />
                          <p>{spell.description}</p>
                          <br />
                          <p>{spell.note}</p>
                          <br />
                          <p className={styles.textItalic}>
                            Componenti:
                            <span> {spell.components.verbal ? "V" : null}</span>
                            <span>
                              {" "}
                              {spell.components.somatic ? ", S" : null}
                            </span>
                            <span>
                              {" "}
                              {spell.components.material
                                ? `, ${spell.components.material}`
                                : null}
                            </span>
                          </p>
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Level 2 */}
                {profile?.spells?.[2]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Level 2 Spells
                    </Typography>
                    {profile.spells[2].map((spell, index) => (
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
                        >
                          {spell.name}
                        </Typography>
                        <Typography variant="body1" className={styles.text}>
                          {spell.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Level 3 */}
                {profile?.spells?.[3]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Level 3 Spells
                    </Typography>
                    {profile.spells[3].map((spell, index) => (
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
                        >
                          {spell.name}
                        </Typography>
                        <Typography variant="body1" className={styles.text}>
                          {spell.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Level 4 */}
                {profile?.spells?.[4]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Level 4 Spells
                    </Typography>
                    {profile.spells[4].map((spell, index) => (
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
                        >
                          {spell.name}
                        </Typography>
                        <Typography variant="body1" className={styles.text}>
                          {spell.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Level 5 */}
                {profile?.spells?.[5]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Level 5 Spells
                    </Typography>
                    {profile.spells[5].map((spell, index) => (
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
                        >
                          {spell.name}
                        </Typography>
                        <Typography variant="body1" className={styles.text}>
                          {spell.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Abilities;
