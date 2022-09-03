import styled from "styled-components";
import { colors, GlobalStyle } from "./Theme";
import CardForm from "./CardForm";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
// import SubmissionPage from "./SubmissionPage";

const CardSection = styled.section`
    background-color: ${colors.primary};
    color: ${colors.lightText};
    height: 34%;
`;

const FormSection = styled.section`
    flex: 1;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
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
