import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { grey, blue, red } from "@material-ui/core/colors";

let theme = createMuiTheme({
   typography: {
      fontSize: 18
   },
   palette: {
      type: "dark",
      default: grey,
      primary: blue,
      secondary: red
   }
});
theme = responsiveFontSizes(theme);

export default theme;
