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
`;

const Card = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 126px;
    left: 4.2vw;
    width: 286px;
    height: 156px;
    border-radius: 6px;
    background-color: ${colors.primary};
    background-image: url(${cardFrontBG});
    background-position: center 25%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 18px 21px;
    z-index: ${zIndex.foreground + zIndex.forwardIncrement};

    p {
        margin: 0;
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
