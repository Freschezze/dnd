import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { useDndStore } from "../../store/DndStore ";

// Helper function to calculate D&D 5e modifiers
const calculateModifier = (score: number): number => Math.floor((score - 10) / 2);

const Offense: React.FC = () => {
  const { profile } = useDndStore();

  if (!profile) {
    return (
      <Box p={2} textAlign="center">
        <Typography variant="h6" color="error">
          Profile data is not available.
        </Typography>
      </Box>
    );
  }

  // Extract necessary values and calculate modifiers
  const proficiency = profile.survivalInfo.proficiency;
  const dexMod = calculateModifier(profile.abilityScores.dex.value);
  const wisMod = calculateModifier(profile.abilityScores.wis.value);

  // Calculations
  const rangedAttack = dexMod + proficiency + 2; // Tiro per Colpire a Distanza
  const meleeAttack = dexMod + proficiency; // Tiro per Colpire Corpo a Corpo
  const savingThrowDC = 8 + proficiency + wisMod; // CD Tiro Salvezza

  return (
    <Box p={2}>
      <Grid2 container spacing={3}>
        {/* Box for Tiro per Colpire a Distanza */}
        <Grid2 sx={{width: '100%'}}>
          <Box
            border={1}
            borderRadius={2}
            p={2}
            textAlign="center"
            borderColor="grey.300"
          >
            <Typography variant="h6" gutterBottom>
              Tiro per Colpire a Distanza
            </Typography>
            <Typography variant="h4" color="primary">
              + {rangedAttack}
            </Typography>
          </Box>
        </Grid2>
        {/* Box for Tiro per Colpire Corpo a Corpo */}
        <Grid2 sx={{width: '100%'}}>
          <Box
            border={1}
            borderRadius={2}
            p={2}
            textAlign="center"
            borderColor="grey.300"
          >
            <Typography variant="h6" gutterBottom>
              Tiro per Colpire Corpo a Corpo
            </Typography>
            <Typography variant="h4" color="primary">
              + {meleeAttack}
            </Typography>
          </Box>
        </Grid2>
        {/* Box for CD Tiro Salvezza */}
        <Grid2 sx={{width: '100%'}}>
          <Box
            border={1}
            borderRadius={2}
            p={2}
            textAlign="center"
            borderColor="grey.300"
          >
            <Typography variant="h6" gutterBottom>
              CD Tiro Salvezza
            </Typography>
            <Typography variant="h4" color="primary">
              {savingThrowDC}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Offense;
