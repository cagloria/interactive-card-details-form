import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "#21092f",
    secondary: "#6448fe",
    tertiary: "#600594",
    white: "#ffffff",
    grayLight: "#CBCBCB",
    gray: "#8e8593",
    black: "#21092f",
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
        background-color: ${colors.white};
        color: ${colors.black};
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
        font-size: 0.75rem;
        letter-spacing: 2px;
    }

    label,
    legend {
        text-transform: uppercase;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    input,
    select {
        margin-top: 9px;
        padding: 11px 16px;
        border: 1px solid ${colors.grayLight};
        border-radius: 10px;
        font-size: 1.13rem;
    }

    select {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.13rem;
        color: ${colors.grayLight};

        option {
            color: ${colors.black};
        }
    }

    input {
        &::placeholder {
            font-family: "Space Grotesk", sans-serif;
            color: ${colors.grayLight};
            text-transform: none;
            font-size: 1.13rem;
        }
    }

    fieldset {
        padding: 0;
        margin: 0;
        border: 0;
    }

    button {
        border: 0;
        border-radius: 10px;
        background-color: ${colors.primary};
        padding: 15px 16px;
        color: ${colors.white};
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.1rem;
        text-align: center;
    }

    .style-link-as-button {
        text-decoration: none;
        border-radius: 10px;
        background-color: ${colors.primary};
        padding: 17px 16px;
        color: ${colors.white};
        font-family: "Space Grotesk", sans-serif;
        font-size: 1rem;
        letter-spacing: 1px;
        text-align: center;
    }
`;
