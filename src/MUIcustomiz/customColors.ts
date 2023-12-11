// buttonColors.ts
import { createTheme } from "@mui/material/styles";

// Extend Material-UI palette for custom button color
declare module "@mui/material/styles" {
  interface Palette {
    button: Palette["primary"];
  }

  interface PaletteOptions {
    button?: PaletteOptions["primary"];
  }
}

// Extend Button component for custom button color option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    button: true;
  }
}

// Define the custom theme with button-specific colors
export const buttonTheme = createTheme({
  palette: {
    button: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});
