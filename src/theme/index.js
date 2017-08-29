// ==============================
// APP STYLE CONSTANTS
// ==============================

import { injectGlobal } from 'styled-components'

const config = {
  header: '100px',
  footer: '50px',
  sidebar: '300px',
}

const color = {
  summerPink: '#e85a71',
  summerAqua: '#4ea1d3',
  summerPaleBlue: '#d8e9ef',
  summerMidnight: '#454552',
  springGreen: '#67D5B5',
  springPink: '#EE7785',
  springPurple: '#C89EC4',
  springBlue: '#84B1ED',
  fallYellow: '#FFBC42',
  fallPink: '#D81159',
  fallPurple: '#8F2D56',
  winterDusk: '#6d819c',
  winterBlue: '#47b8e0',
  winterGreen: '#55967e',
  winterMidnight: '263959',
}

const neutral = {
  white: '#FFFFFF',
  gray10: '#DCDCDC',
  gray20: '#D0D0D0',
  gray30: '#BEBEBE',
  gray40: '#A9A9A9',
  gray50: '#989898',
  gray60: '#808080',
  gray70: '#696969',
  gray80: '#585858',
  gray90: '#404040',
  black: '#000000',
}

const theme = {
  summer: {
    primary: color.summerPink,
    secondary: color.summerAqua,
    tertiary: color.summerPaleBlue,
    quaternary: color.summerMidnight,
    neutral: neutral,
  },
  spring: {
    primary: color.springGreen,
    secondary: color.springPink,
    tertiary: color.springPurple,
    quaternary: color.springBlue,
    neutral: neutral,
  },
  winter: {
    primary: color.winterBlue,
    secondary: color.winterGreen,
    tertiary: color.winterDusk,
    quaternary: color.winterMidnight,
    neutral: neutral,
  },
  fall: {
    primary: color.fallYellow,
    secondary: color.fallPink,
    tertiary: color.fallPurple,
    quaternary: color.fall,
    neutral: neutral,
  },
}

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${neutral.white};
    color: ${neutral.gray80};
    font-family: -apple-sytem,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
  }
`

export default {
  config,
  color,
  neutral,
  theme,
}
