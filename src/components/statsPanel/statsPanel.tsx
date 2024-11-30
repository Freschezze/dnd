import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    IconButton,
  } from "@mui/material";
  import styles from "./statsPanel.module.scss";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import AddIcon from "@mui/icons-material/Add";
  import RemoveIcon from "@mui/icons-material/Remove";
  import { doc, updateDoc } from "firebase/firestore";
import { useDndStore } from "../../store/DndStore ";
import { db } from "../../firebaseConfig";
import { useState } from "react";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
  
  const StatsPanel: React.FC = () => {
    const { profile, setProfile} = useDndStore();

    const [statsEdit, setStatsEdit] = useState<boolean>(false);

    const toggleEdit = () => {
        setStatsEdit(!statsEdit);
      };
  
    // Add 1 to a specified field
    const addOne = async (field: string, section: string) => {
      if (!profile || !profile.id) return;
  
      // Increment the field value by 1
      const updatedProfile = { ...profile };
      updatedProfile[section][field] += 1;
  
      try {
        // Update the Zustand store (optional if you use Zustand for state management)
        setProfile(updatedProfile) // Assuming you are using Zustand's `set` function
  
        // Update Firebase with the new value
        const docRef = doc(db, "characters", profile.id);
        await updateDoc(docRef, {
          [`${section}.${field}`]: updatedProfile[section][field],
        });
      } catch (error) {
        console.error("Error updating profile in Firebase:", error);
      }
    };
    // Remove 1 from a specified field
    const removeOne = async (field: string, section: string) => {
      if (!profile || !profile.id) return;
  
      // Decrement the field value by 1
      const updatedProfile = { ...profile };
      updatedProfile[section][field] -= 1;
  
      try {
        // Update the Zustand store (optional if you use Zustand for state management)
        setProfile(updatedProfile) // Assuming you are using Zustand's `set` function
        // Update Firebase with the new value
        const docRef = doc(db, "characters", profile.id);
        await updateDoc(docRef, {
          [`${section}.${field}`]: updatedProfile[section][field],
        });
      } catch (error) {
        console.error("Error updating profile in Firebase:", error);
      }
    };
  
    return (
      <Accordion sx={{width: '100%'}}>
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
                <p className={styles.bold}>HP</p>
                <div className={styles.valueWithControls}>
                  { statsEdit && <IconButton size="small" onClick={() => removeOne("hp", "vitalInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>
                    {profile?.vitalInfo.hp} / {profile?.vitalInfo.maxHp}
                  </p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("hp", "vitalInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
              <div className={styles.flexItem}>
                <p className={styles.bold}>Temp HP</p>
                <div className={styles.valueWithControls}>
                  { statsEdit && <IconButton size="small" onClick={() => removeOne("thp", "vitalInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.vitalInfo.thp}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("thp", "vitalInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
            </div>
  
            {/* Initiative, CA, and Speed Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p className={styles.bold}>Iniziativa</p>
                <div className={styles.valueWithControls}>
                  {statsEdit && <IconButton size="small" onClick={() => removeOne("initiative", "combatInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.combatInfo.initiative}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("initiative", "combatInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
              <div className={styles.flexItem}>
                <p className={styles.bold}>CA</p>
                <div className={styles.valueWithControls}>
                  {statsEdit && <IconButton size="small" onClick={() => removeOne("ac", "combatInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.combatInfo.ac}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("ac", "combatInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
              <div className={styles.flexItem}>
                <p className={styles.bold}>Velocità</p>
                <div className={styles.valueWithControls}>
                  {statsEdit && <IconButton size="small" onClick={() => removeOne("speed", "combatInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.combatInfo.speed}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("speed", "combatInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
            </div>
  
            {/* Proficiency and Passive Perception Section */}
            <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p className={styles.bold}>Competenza</p>
                <div className={styles.valueWithControls}>
                  {statsEdit && <IconButton size="small" onClick={() => removeOne("proficiency", "survivalInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.survivalInfo.proficiency}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("proficiency", "survivalInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
              <div className={styles.flexItem}>
                <p className={styles.bold}>Perc. Passiva</p>
                <div className={styles.valueWithControls}>
                 {statsEdit && <IconButton size="small" onClick={() => removeOne("perception", "survivalInfo")}>
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>}
                  <p>{profile?.survivalInfo.perception}</p>
                  {statsEdit && <IconButton size="small" onClick={() => addOne("perception", "survivalInfo")}>
                    <AddIcon sx={{ color: "white" }} />
                  </IconButton>}
                </div>
              </div>
            </div>
  
            {/* Death Saving Throws Section */}
            {/* <div className={styles.statsGroup}>
              <div className={styles.flexItem}>
                <p>Death Saves</p>
                <div className={styles.deathSaves}>
                  <div className={styles.valueWithControls}>
                    <p>Successi:</p>
                    {statsEdit && <IconButton size="small" onClick={() => removeOne("success", "deathSaves")}>
                      <RemoveIcon sx={{ color: "white" }} />
                    </IconButton>}
                    <p>{profile?.vitalInfo.deathSaves.success}</p>
                    {statsEdit && <IconButton size="small" onClick={() => addOne("success", "deathSaves")}>
                      <AddIcon sx={{ color: "white" }} />
                    </IconButton>}
                  </div>
                  <div className={styles.valueWithControls}>
                    <p>Fallimenti:</p>
                    {statsEdit && <IconButton size="small" onClick={() => removeOne("failures", "deathSaves")}>
                      <RemoveIcon sx={{ color: "white" }} />
                    </IconButton>}
                    <p>{profile?.vitalInfo.deathSaves.failures}</p>
                    {statsEdit && <IconButton size="small" onClick={() => addOne("deathSaves.failures", "vitalInfo")}>
                      <AddIcon sx={{ color: "white" }} />
                    </IconButton>}
                  </div>
                </div>
              </div>
            </div> */}
            <div>
            <Typography onClick={toggleEdit} sx={{ fontSize: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: 2 }}>
            Edit
            <IconButton>
              {statsEdit ? <LockOpenIcon sx={{ color: 'white' }} /> : <LockIcon sx={{ color: 'white' }} />}
            </IconButton>
          </Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };
  
  export default StatsPanel;  