import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "#21092f",
    secondary: "#6448fe",
    tertiary: "#600594",
    white: "#ffffff",
    formInput: "#b4b4b4",
    bodyText: "#8e8593",
    black: "#21092f",
    formInvalid: "#ff5252",
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
        margin-top: 8px;
        padding: 10px 16px;
        border: 1px solid ${colors.formInput};
        border-radius: 10px;
        font-size: 1.13rem;
        font-family: 'Space Grotesk', sans-serif;

        &:hover, &:active, &:focus {
            border-color: ${colors.secondary};
            outline: none;
        }
    }

    select {
        font-size: 1.13rem;
        color: ${colors.formInput};

        option {
            color: ${colors.black};
        }
    }

    input {
        &::placeholder {
            color: ${colors.formInput};
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
        cursor: pointer;
    }

    .style-link-as-button {
        text-decoration: none;
        border-radius: 10px;
        background-color: ${colors.primary};
        padding: 17px 16px;
        color: ${colors.white};
        font-size: 1rem;
        letter-spacing: 1px;
        text-align: center;
    }

    .hidden {
        position: absolute;
        transform: translate(-100vw, -100vh);
    }
`;
