import styled from "styled-components";
import { colors, zIndex } from "./Theme";
import cardFrontBG from "../assets/bg-card-front.png";
import logo from "../assets/card-logo.svg";

const LogoRow = styled.div`
    flex: 1;
`;

const NumberRow = styled.div`
    flex: 1;
    font-size: 1.14rem;
    padding-top: 34px;
    letter-spacing: 2px;

    @media screen and (max-width: 300px) {
        padding-top: 20px;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 600px) {
        font-size: 1.3rem;
        padding-top: 48px;
    }
`;

const DetailsRow = styled.div`
    flex: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.55rem;
    letter-spacing: 0.08rem;
    padding-top: 16px;
    text-transform: uppercase;

    @media screen and (min-width: 600px) {
        padding-top: 20px;
        font-size: 0.8rem;
    }
`;

const Card = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 126px;
    left: 4.2vw;
    width: 286px;
    height: 157px;
    border-radius: 6px;
    background-color: ${colors.primary};
    background-image: url(${cardFrontBG});
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 18px 21px;
    z-index: ${zIndex.foreground + zIndex.forwardIncrement};

    p {
        margin: 0;
    }

    @media screen and (max-width: 300px) {
        top: 150px;
        left: 3vw;
        width: 234px;
        height: 129px;
    }

    @media screen and (min-width: 600px) {
        top: 147px;
        left: 13vw;
        width: 333px;
        height: 184px;
    }
`;

export default function CardFront() {
    return (
        <Card>
            <LogoRow>
                <img src={logo} alt="Card logo" height="30" width="53" />
            </LogoRow>
            <NumberRow>
                <p>0000 0000 0000 0000</p>
            </NumberRow>
            <DetailsRow>
                <p>Jane Appleseed</p>
                <p>00/00</p>
            </DetailsRow>
        </Card>
    );
}
