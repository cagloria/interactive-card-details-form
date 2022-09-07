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

        @media screen and (max-width: 300px) {
            right: 30px;
            top: 50px;
        }

        @media screen and (min-width: 600px) {
            top: 72px;
            font-size: 0.7rem;
        }
    }

    @media screen and (max-width: 300px) {
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
    }
`;

export default function CardBack() {
    return (
        <Card>
            <p>000</p>
        </Card>
    );
}
