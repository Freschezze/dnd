import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Cinzel Decorative, cursive',
  },
  palette: {
    background: {
      default: '#1f1f1f', // Set background color
    },
    text: {
      primary: '#ffffff', // Set text color to white
    },
  },
});

export default theme;
