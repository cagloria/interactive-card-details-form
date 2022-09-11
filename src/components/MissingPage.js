import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./Theme";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

const HomeLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
`;

export default function MissingPage() {
    return (
        <Container>
            <Heading>404: Missing Page</Heading>
            <Body>
                This page doesn't exist. Check your URL or return to the{" "}
                <HomeLink to="/">home page</HomeLink>.
            </Body>
        </Container>
    );
}
