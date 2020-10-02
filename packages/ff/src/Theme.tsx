import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: { main: purple[900], light: purple[300] }
  }
});
