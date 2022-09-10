import styled from "styled-components";
import { colors, zIndex } from "./Theme";
import cardFrontBG from "../assets/bg-card-front.png";
import logo from "../assets/card-logo.svg";

const LogoRow = styled.div`
    height: fit-content;

    @media screen and (min-width: 1300px) {
        img {
            width: 84px;
            height: 47px;
        }
    }
`;

const NumberRow = styled.div`
    flex: 1;
    font-size: 1.14rem;
    padding-top: 34px;
    letter-spacing: 2px;

    @media screen and (max-width: 320px) {
        padding-top: 20px;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 600px) {
        padding-top: 48px;
        font-size: 1.3rem;
    }

    @media screen and (min-width: 1300px) {
        padding-top: 61px;
        font-size: 1.89rem;
    }
`;

const DetailsRow = styled.div`
    flex: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 0.55rem;
    letter-spacing: 0.08rem;
    padding-top: 16px;
    text-transform: uppercase;

    @media screen and (min-width: 600px) {
        padding-top: 20px;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 1300px) {
        padding-top: 21px;
        font-size: 0.95rem;
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

    @media screen and (max-width: 320px) {
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
        border-radius: 8px;
    }

    @media screen and (min-width: 768px) {
        left: 20vw;
    }

    @media screen and (min-width: 1024px) {
        left: 29vw;
    }

    @media screen and (min-width: 1300px) {
        top: 20.8vh;
        left: 11.4vw;
        width: 447px;
        height: 245px;
        border-radius: 12px;
        padding: 28px 32px;
    }

    @media screen and (min-width: 1920px) {
        top: 25vh;
        left: 25vw;
    }

    @media screen and (min-width: 2400px) {
        top: 32vh;
        left: 29vw;
    }
`;

export default function CardFront({ number, holderName, expMonth, expYear }) {
    return (
        <Card>
            <LogoRow>
                <img src={logo} alt="Card logo" height="30" width="53" />
            </LogoRow>
            <NumberRow>
                <p>{number}</p>
            </NumberRow>
            <DetailsRow>
                <p>{holderName}</p>
                <p>
                    {expMonth}/{expYear}
                </p>
            </DetailsRow>
        </Card>
    );
}

CardFront.defaultProps = {
    number: "0000 0000 0000 0000",
    holderName: "Jane Appleseed",
    expMonth: "00",
    expYear: "00",
};
