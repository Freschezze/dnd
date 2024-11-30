import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Cinzel Decorative, cursive",
  },
  palette: {
    background: {
      default: "#1f1f1f", // Set background color
    },
    text: {
      primary: "#f5f5f5", // Set text color to white
    },
    primary: {
      main: "#f5f5f5", // Primary color as white (for selected items)
    },
    secondary: {
      main: "#808080", // Secondary color as grey (for unselected items)
    },
  },
  components: {
    // Accordion customizations
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", // Set background color of Accordion
          color: "#f5f5f5", // Set text color
          boxShadow: "none", // Remove the box shadow
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", // Dark background for the summary
          color: "#f5f5f5", // Text color in summary
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", // Dark background for details
          color: "#f5f5f5", // Text color
        },
      },
    },
    // AppBar customizations
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", // Set AppBar background color
        },
      },
    },
    // BottomNavigation customizations
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", // Set BottomNavigation background color
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#808080", // Default color for unselected items
          "&.Mui-selected": {
            color: "#f5f5f5",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#f5f5f5", // Default icon color
        },
      },
    },
  },
});

export default theme;
