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
`;

const FormSection = styled.section`
    padding: 91px 23px 30px;
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
                    <SubmissionPage />
                </FormSection>
                <CardSection>
                    <CardFront />
                    <CardBack />
                </CardSection>
            </Main>
        </>
    );
}
