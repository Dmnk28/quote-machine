import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#55268b',
    },
    secondary: {
      main: '#175f50',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;