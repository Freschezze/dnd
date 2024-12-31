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

const Feats: React.FC = () => {
  const { profile } = useDndStore();

  return (
    <>
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
    </>
  );
};

export default Feats;
