import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import { useDndStore } from "../../store/DndStore ";
import styles from "./statsPanel.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StatsPanel: React.FC = () => {
  const { profile } = useDndStore();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize={28}>Pannello Statistiche</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.statsContainer}>
            {/* HP and Temp HP Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p>HP</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>
                    {profile?.vitalInfo.hp} / {profile?.vitalInfo.maxHp}
                  </p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
              <div className={styles.flexItem}>
                <p>Temp HP</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.vitalInfo.thp}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Initiative, CA, and Speed Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p>Iniziativa</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.combatInfo.initiative}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
              <div className={styles.flexItem}>
                <p>CA</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.combatInfo.ac}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
              <div className={styles.flexItem}>
                <p>Velocità</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.combatInfo.speed}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Proficiency and Passive Perception Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p>Proficiency</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.survivalInfo.proficiency}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
              <div className={styles.flexItem}>
                <p>Percezione Passiva</p>
                <div className={styles.valueWithControls}>
                  <IconButton size="small">
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                  <p>{profile?.survivalInfo.perception}</p>
                  <IconButton size="small">
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Death Saving Throws Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p>Death Saves</p>
                <div className={styles.deathSaves}>
                  <div className={styles.valueWithControls}>
                    <p>Successi:</p>
                    <IconButton size="small">
                      <RemoveIcon sx={{ color: "white" }} />
                    </IconButton>
                    <p>{profile?.vitalInfo.deathSaves.success}</p>
                    <IconButton size="small">
                      <AddIcon sx={{ color: "white" }} />
                    </IconButton>
                  </div>
                  <div className={styles.valueWithControls}>
                    <p>Fallimenti:</p>
                    <IconButton size="small">
                      <RemoveIcon sx={{ color: "white" }} />
                    </IconButton>
                    <p>{profile?.vitalInfo.deathSaves.failures}</p>
                    <IconButton size="small">
                      <AddIcon sx={{ color: "white" }} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default StatsPanel;
