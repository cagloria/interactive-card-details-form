import styled from "styled-components";
import { colors } from "./Theme";
import cardBackBG from "../assets/bg-card-back.png";

const Card = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 32px;
    right: 4.5vw;
    width: 286px;
    height: 156px;
    border-radius: 6px;
    background-color: ${colors.primary};
    background-image: url(${cardBackBG});
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 18px 21px;

    p {
        position: absolute;
        right: 37px;
        top: 64px;
        font-size: 0.5rem;
        text-align: right;
    }
`;

export default function CardBack() {
    return (
        <Card>
            <p>000</p>
        </Card>
    );
}
