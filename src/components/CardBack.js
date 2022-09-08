import styled from "styled-components";
import { colors } from "./Theme";
import cardBackBG from "../assets/bg-card-back.png";

const Card = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 32px;
    right: 4.5vw;
    width: 286px;
    height: 157px;
    border-radius: 6px;
    background-color: ${colors.primary};
    background-image: url(${cardBackBG});
    background-size: cover;

    p {
        position: absolute;
        right: 37px;
        top: 64px;
        font-size: 0.5rem;
        text-align: right;

        @media screen and (max-width: 320px) {
            right: 30px;
            top: 50px;
        }

        @media screen and (min-width: 600px) {
            top: 72px;
            font-size: 0.7rem;
        }

        @media screen and (min-width: 1300px) {
            top: 100px;
            right: 58px;
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 320px) {
        top: 40px;
        right: 4vw;
        width: 234px;
        height: 129px;
    }

    @media screen and (min-width: 600px) {
        top: 32px;
        right: 12vw;
        width: 333px;
        height: 184px;
        border-radius: 8px;
    }

    @media screen and (min-width: 768px) {
        right: 17vw;
    }

    @media screen and (min-width: 1024px) {
        right: 23vw;
    }

    @media screen and (min-width: 1300px) {
        top: 52vh;
        right: unset;
        left: 17.9vw;
        width: 447px;
        height: 245px;
        border-radius: 12px;
    }

    @media screen and (min-width: 1920px) {
        top: 52vh;
        left: 28vw;
    }

    @media screen and (min-width: 2400px) {
        top: 50vh;
        left: 31vw;
    }
`;

export default function CardBack({ cvc }) {
    return (
        <Card>
            <p>{cvc}</p>
        </Card>
    );
}

CardBack.defaultProps = {
    cvc: "000",
};
