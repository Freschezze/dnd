import React from "react";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import InventoryIcon from "@mui/icons-material/Inventory";
import EditIcon from "@mui/icons-material/Edit";
import { useDndStore } from "../../store/DndStore ";

const BottomAppBar: React.FC = () => {
  const { tabValue, setTabValue } = useDndStore();

  return (
    <AppBar
      position="fixed"
      sx={{ bottom: 0, top: "auto", backgroundColor: "#1f1f1f" }}
    >
      <BottomNavigation
        value={tabValue}
        onChange={(event, newValue) => {
          setTabValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Abilities" icon={<EqualizerIcon />} />
        <BottomNavigationAction label="Offense" icon={<MilitaryTechIcon />} />
        <BottomNavigationAction label="Equipment" icon={<InventoryIcon />} />
        <BottomNavigationAction label="Edit" icon={<EditIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomAppBar;
