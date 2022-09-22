import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./Theme";
import iconComplete from "../assets/icon-complete.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Heading = styled.p`
    margin-top: 37px;
    margin-bottom: 0;
    font-size: 1.7rem;
    letter-spacing: 0.22rem;
    text-transform: uppercase;
`;

const Body = styled.p`
    margin-top: 18px;
    color: ${colors.bodyText};
    font-size: 0.925rem;
    letter-spacing: 0.1rem;
    text-align: center;
`;

const ContinueButton = styled(Link)`
    margin-top: 35px;
    align-self: stretch;
`;

export default function SubmissionPage({ onReset }) {
    function resetValues() {
        onReset();
    }

    return (
        <Container>
            <h1 className="hidden">Card Submission</h1>
            <img src={iconComplete} alt="" />
            <Heading>Thank you!</Heading>
            <Body>We've added your card details</Body>
            <ContinueButton
                to="/"
                className="style-link-as-button"
                href=""
                onClick={resetValues}
            >
                Continue
            </ContinueButton>
        </Container>
    );
}
