
import { createTheme , responsiveFontSizes} from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

// const [darkmode, setDarkmode] = useState(false);

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
      // mode: darkmode ? "dark" : "light",
    },
    typography: {
      fontFamily: "Lexend",
    },
    components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
  });
  theme = responsiveFontSizes(theme);

export default theme;