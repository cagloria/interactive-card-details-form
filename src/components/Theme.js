import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "#21092f",
    secondary: "#6448fe",
    tertiary: "#600594",
    lightText: "#ffffff",
    background: "#ffffff",
};

// The value of z-index is "zIndex.foreground" or "z-index.background", with
// background being behind the base content. To change z-index of an element to
// be relative to sibling elements, add backgroundIncrement or forwardIncrement
// to the value.
export const zIndex = {
    background: -100,
    foreground: 100,
    backgroundIncrement: -10,
    forwardIncrement: 10,
};

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    body {
        margin: 0;
        background-color: ${colors.background};
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
    }
`;
