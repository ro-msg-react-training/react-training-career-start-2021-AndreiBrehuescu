import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["sans-serif", "BlinkMacSystemFont"].join(","),
    fontWeightBold: 1000,
    fontSize: 22,
  },
  palette: {
    primary: {
      main: "#009879",
    },
    secondary: {
      main: "#f3f3f3",
    },
    common: {
      white: "#ffffff",
    },
  },
  mixins: {
    toolbar: {
      minWidth: 600,
      minHeight: 200,
    },
  },
});

export default theme;
