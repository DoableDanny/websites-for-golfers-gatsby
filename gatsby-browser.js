import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

// gatsby-browser allows us to wrap the root element and provide a global theme using styled components.

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

/* Footer height so body doesn't overlap footer. */
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
    }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
