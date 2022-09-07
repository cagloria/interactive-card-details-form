import styled from "styled-components";
import { colors, GlobalStyle } from "./Theme";
import CardForm from "./CardForm";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import SubmissionPage from "./SubmissionPage";

const CardSection = styled.section`
    background-color: ${colors.primary};
    color: ${colors.white};
    height: 240px;

    @media only screen and (min-width: 600px) {
        height: 300px;
    }
`;

const FormSection = styled.section`
    padding: 91px 6.15vw 40px;

    @media screen and (min-width: 426px) {
        display: flex;
        justify-content: center;

        > * {
            flex-grow: 1;
            max-width: 380px;
        }
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column-reverse;
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
