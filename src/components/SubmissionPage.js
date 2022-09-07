import styled from "styled-components";
import { colors } from "./Theme";
import iconComplete from "../assets/icon-complete.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    margin-top: 37px;
    margin-bottom: 0;
    font-size: 1.7rem;
    letter-spacing: 0.22rem;
    text-transform: uppercase;
`;

const Body = styled.p`
    margin-top: 18px;
    color: ${colors.gray};
    font-size: 0.925rem;
    letter-spacing: 0.1rem;
    text-align: center;
`;

const ContinueButton = styled.a`
    margin-top: 35px;
    align-self: stretch;
`;

export default function SubmissionPage() {
    return (
        <Container>
            <img src={iconComplete} alt="" />
            <Heading>Thank you!</Heading>
            <Body>We've added your card details</Body>
            <ContinueButton className="style-link-as-button" href="">
                Continue
            </ContinueButton>
        </Container>
    );
}
