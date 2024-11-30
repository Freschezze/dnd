import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useDndStore } from "../../store/DndStore ";
import styles from "./statsPanel.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StatsPanel: React.FC = () => {
  const { profile } = useDndStore();

  return (
    <>
      <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
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
          <p>{profile?.vitalInfo.hp} / {profile?.vitalInfo.maxHp}</p>
        </div>
        <div className={styles.flexItem}>
          <p>Temp HP</p>
          <p>{profile?.vitalInfo.thp}</p>
        </div>
      </div>

      {/* Initiative, CA, and Speed Section */}
      <div className={styles.statsGroup}>
        <div className={styles.flexItem}>
          <p>Iniziativa</p>
          <p>{profile?.combatInfo.initiative}</p>
        </div>
        <div className={styles.flexItem}>
          <p>CA</p>
          <p>{profile?.combatInfo.ac}</p>
        </div>
        <div className={styles.flexItem}>
          <p>Velocità</p>
          <p>{profile?.combatInfo.speed}</p>
        </div>
      </div>

      {/* Proficiency and Passive Perception Section */}
      <div className={styles.statsGroup}>
        <div className={styles.flexItem}>
          <p>Proficiency</p>
          <p>{profile?.survivalInfo.proficiency}</p>
        </div>
        <div className={styles.flexItem}>
          <p>Percezione Passiva</p>
          <p>{profile?.survivalInfo.perception}</p>
        </div>
      </div>

      {/* Death Saving Throws Section */}
      <div className={styles.statsGroup}>
        <div className={styles.flexItem}>
          <p>Death Saves</p>
          <div className={styles.deathSaves}>
              <p>Successi: {profile?.vitalInfo.deathSaves.success}</p>
              <p>Fallimenti: {profile?.vitalInfo.deathSaves.failures}</p>
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
