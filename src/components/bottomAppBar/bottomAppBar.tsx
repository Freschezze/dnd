import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InventoryIcon from "@mui/icons-material/Inventory";

const BottomAppBar: React.FC = () => {
  const [value, setValue] = useState(0); // Track which tab is selected

  return (
    <AppBar position="fixed" sx={{ bottom: 0, top: 'auto', backgroundColor: '#1f1f1f' }}>
      <BottomNavigation
      sx={{backgroundColor: '#1f1f1f',
        "& .Mui-selected": {
            color: "whitesmoke", 
            "& svg": {
            color: "whitesmoke", 
          },
          },

        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction sx={{color: value === 0 ? "whitesmoke" : "gray",}} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{color: value === 1 ? "whitesmoke" : "gray",}} label="Stats" icon={<EqualizerIcon />} />
        <BottomNavigationAction sx={{color: value === 2 ? "whitesmoke" : "gray",}} label="Spells" icon={<AutoAwesomeIcon />} />
        <BottomNavigationAction sx={{color: value === 3 ? "whitesmoke" : "gray",}} label="Equipment" icon={<InventoryIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomAppBar;