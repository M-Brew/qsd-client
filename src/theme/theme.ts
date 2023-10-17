import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#89CFF0",
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontWeightRegular: 200,
    fontWeightBold: 400,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;