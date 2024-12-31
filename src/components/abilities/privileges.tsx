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

const Privileges: React.FC = () => {
  const { profile } = useDndStore();

  return (
    <>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            backgroundColor: "#333",
            borderRadius: "8px",
            margin: "10px",
          }}
        >
          <Typography sx={{ fontSize: 28 }}>Privilegi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
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

            {/* Fighting Styles Section */}
            <Box
              sx={{
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Stili di Combattimento
              </Typography>
              {profile?.privileges.combatStyle.map(
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
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Privileges;
