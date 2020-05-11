import { createMuiTheme } from "@material-ui/core/styles"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"

// thin
import BrandonThinWoff2 from "./Fonts/BrandonGrotesque-Thin.woff2"
import BrandonThinWoff from "./Fonts/BrandonGrotesque-Thin.woff"

// thin italic
import BrandonThinItalicWoff2 from "./Fonts/BrandonGrotesque-ThinItalic.woff2"
import BrandonThinItalicWoff from "./Fonts/BrandonGrotesque-ThinItalic.woff"

// light
import BrandonLightWoff2 from "./Fonts/BrandonGrotesque-Light.woff2"
import BrandonLightWoff from "./Fonts/BrandonGrotesque-Light.woff"

// light italic
import BrandonLightItalicWoff2 from "./Fonts/BrandonGrotesque-LightItalic.woff2"
import BrandonLightItalicWoff from "./Fonts/BrandonGrotesque-LightItalic.woff"

// regular
import BrandonRegularWoff2 from "./Fonts/BrandonGrotesque-Regular.woff2"
import BrandonRegularWoff from "./Fonts/BrandonGrotesque-Regular.woff"

// regular italic
import BrandonRegularItalicWoff2 from "./Fonts/BrandonGrotesque-RegularItalic.woff2"
import BrandonRegularItalicWoff from "./Fonts/BrandonGrotesque-RegularItalic.woff"

// medium
import BrandonMediumWoff2 from "./Fonts/BrandonGrotesque-Medium.woff2"
import BrandonMediumWoff from "./Fonts/BrandonGrotesque-Medium.woff"

// medium italic
import BrandonMediumItalicWoff2 from "./Fonts/BrandonGrotesque-MediumItalic.woff2"
import BrandonMediumItalicWoff from "./Fonts/BrandonGrotesque-MediumItalic.woff"

// bold
import BrandonBoldWoff2 from "./Fonts/BrandonGrotesque-Bold.woff2"
import BrandonBoldWoff from "./Fonts/BrandonGrotesque-Bold.woff"

// bold italic
import BrandonBoldItalicWoff2 from "./Fonts/BrandonGrotesque-BoldItalic.woff2"
import BrandonBoldItalicWoff from "./Fonts/BrandonGrotesque-BoldItalic.woff"

// black
import BrandonBlackWoff2 from "./Fonts/BrandonGrotesque-Black.woff2"
import BrandonBlackWoff from "./Fonts/BrandonGrotesque-Black.woff"

// black italic
import BrandonBlackItalicWoff2 from "./Fonts/BrandonGrotesque-BlackItalic.woff2"
import BrandonBlackItalicWoff from "./Fonts/BrandonGrotesque-BlackItalic.woff"

const brandon_thin = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 100,
  src: `
    url(${BrandonThinWoff2}) format('woff2'),
    url(${BrandonThinWoff}) format('woff')
  `,
}

const brandon_thin_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 100,
  src: `
    url(${BrandonThinItalicWoff2}) format('woff2'),
    url(${BrandonThinItalicWoff}) format('woff')
  `,
}

const brandon_light = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 300,
  src: `
    url(${BrandonLightWoff2}) format('woff2'),
    url(${BrandonLightWoff}) format('woff')
  `,
}

const brandon_light_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 300,
  src: `
    url(${BrandonLightItalicWoff2}) format('woff2'),
    url(${BrandonLightItalicWoff}) format('woff')
  `,
}

const brandon_regular = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    url(${BrandonRegularWoff2}) format('woff2'),
    url(${BrandonRegularWoff}) format('woff')
  `,
}

const brandon_regular_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 400,
  src: `
    url(${BrandonRegularItalicWoff2}) format('woff2'),
    url(${BrandonRegularItalicWoff}) format('woff')
  `,
}

const brandon_medium = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 600,
  src: `
    url(${BrandonMediumWoff2}) format('woff2'),
    url(${BrandonMediumWoff}) format('woff')
  `,
}

const brandon_medium_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 600,
  src: `
    url(${BrandonMediumItalicWoff2}) format('woff2'),
    url(${BrandonMediumItalicWoff}) format('woff')
  `,
}

const brandon_bold = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 700,
  src: `
    url(${BrandonBoldWoff2}) format('woff2'),
    url(${BrandonBoldWoff}) format('woff')
  `,
}

const brandon_bold_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 700,
  src: `
    url(${BrandonBoldItalicWoff2}) format('woff2'),
    url(${BrandonBoldItalicWoff}) format('woff')
  `,
}

const brandon_black = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "normal",
  fontWeight: 900,
  src: `
    url(${BrandonBlackWoff2}) format('woff2'),
    url(${BrandonBlackWoff}) format('woff')
  `,
}

const brandon_black_italic = {
  fontFamily: "Brandon Grotesque",
  fontStyle: "italic",
  fontWeight: 900,
  src: `
    url(${BrandonBlackItalicWoff2}) format('woff2'),
    url(${BrandonBlackItalicWoff}) format('woff')
  `,
}

export const breakpoints = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1400,
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Brandon Grotesque",
    htmlFontSize: 16,
    fontSize: 20,
    h1: {
      fontSize: "76px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "54px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "40px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "700",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "700",
    },
    h6: {
      fontSize: "24px",
      fontWeight: "700",
      fontStyle: "italic",
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: "300",
      fontStyle: "italic",
    },
    button: {
      fontSize: "20px",
      fontWeight: "700",
    },
  },
  palette: {
    text: {
      primary: "#2D2D2D",
      secondary: "#F5F5F5",
    },
    primary: {
      main: "#AD578D",
      dark: "#914A7A",
    },
    secondary: {
      main: "#72C7B4",
      dark: "#64AD98",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          brandon_thin,
          brandon_thin_italic,
          brandon_light,
          brandon_light_italic,
          brandon_regular,
          brandon_regular_italic,
          brandon_medium,
          brandon_medium_italic,
          brandon_bold,
          brandon_bold_italic,
          brandon_black,
          brandon_black_italic,
        ],
      },
    },
  },
})
