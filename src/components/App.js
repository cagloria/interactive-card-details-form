import styled from "styled-components";
import { colors, GlobalStyle } from "./Theme";
import CardForm from "./CardForm";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import SubmissionPage from "./SubmissionPage";
import cardSectionBGMobile from "../assets/bg-main-mobile.png";
import cardSectionBGDesktop from "../assets/bg-main-desktop.png";

const CardSection = styled.section`
    background-color: ${colors.primary};
    background-image: url(${cardSectionBGMobile});
    background-size: cover;
    color: ${colors.white};
    height: 240px;

    @media only screen and (min-width: 600px) {
        height: 300px;
    }

    @media screen and (min-width: 1300px) {
        height: 100%;
        width: 33.5%;
        background-image: url(${cardSectionBGDesktop});
    }
`;

const FormSection = styled.section`
    padding: 91px 6.15vw 40px;

    @media screen and (min-width: 425px) {
        display: flex;
        justify-content: center;

        > * {
            flex-grow: 1;
            max-width: 380px;
        }
    }

    @media screen and (min-width: 1300px) {
        flex-grow: 1;
        padding-top: 40px;
        padding-left: 14.6vw;
        align-items: center;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 1300px) {
        flex-direction: row-reverse;
        height: 100%;
    }
`;

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <FormSection>
                    <CardForm />
                </FormSection>
                <CardSection>
                    <CardFront />
                    <CardBack />
                </CardSection>
            </Main>
        </>
    );
}
