import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Header from "./components/Header/Header";
import NewHeader from "./components/Header/NewHeader";
import Main from "./components/Main/Main";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const setmode = () => {
    setDarkmode(!darkmode);
  };
  let theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#2962FF",
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#E8C375",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      mode: darkmode ? "dark" : "light",
    },
    typography: {
      fontFamily: "Lexend",
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <NewHeader mode={darkmode} setmode={setmode} />
      <Container maxWidth="xl">
      <ScrollToTop smooth color="#2962FF" />
        <Box sx={{ my: 4 }}>
          {/* <Header mode={darkmode} setmode={setmode} /> */}
          <Main />
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
