import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { colors, GlobalStyle } from "./Theme";
import CardForm from "./CardForm";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import SubmissionPage from "./SubmissionPage";
import MissingPage from "./MissingPage";
import cardSectionBGMobile from "../assets/bg-main-mobile.png";
import cardSectionBGDesktop from "../assets/bg-main-desktop.png";

const CardSection = styled.section`
    background-color: ${colors.primary};
    background-image: url(${cardSectionBGMobile});
    background-size: cover;
    color: ${colors.white};
    height: 240px;

    @media only screen and (min-width: 600px) {
        height: 300px;
    }

    @media screen and (min-width: 1300px) {
        height: 100%;
        width: 33.5%;
        background-image: url(${cardSectionBGDesktop});
    }

    @media screen and (min-width: 1920px) {
        width: 40%;
    }
`;

const FormSection = styled.section`
    padding: 91px 6.15vw 40px;

    @media screen and (min-width: 425px) {
        display: flex;
        justify-content: center;

        > * {
            flex-grow: 1;
            max-width: 380px;
        }
    }

    @media screen and (min-width: 1300px) {
        flex-grow: 1;
        padding-top: 40px;
        padding-left: 14.6vw;
        align-items: center;
    }

    @media screen and (min-width: 1920px) {
        padding-right: 14.6vw;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 1300px) {
        flex-direction: row-reverse;
        height: 100%;
    }
`;

export default function App() {
    const [name, setName] = useState("Jane Appleseed");
    const [number, setNumber] = useState("0000 0000 0000 0000");
    const [expMonth, setExpMonth] = useState("00");
    const [expYear, setExpYear] = useState("00");
    const [cvc, setCvc] = useState("000");

    function handleNameChange(value) {
        setName(value);
    }

    function handleNumberChange(value) {
        setNumber(value);
    }

    function handleExpMonthChange(value) {
        setExpMonth(value);
    }

    function handleExpYearChange(value) {
        setExpYear(value);
    }

    function handleCVCChange(value) {
        setCvc(value);
    }

    function handleReset() {
        setName("Jane Appleseed");
        setNumber("0000 0000 0000 0000");
        setExpMonth("00");
        setExpYear("00");
        setCvc("000");
    }

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Main>
                    <FormSection>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <CardForm
                                        onNameChange={handleNameChange}
                                        onNumberChange={handleNumberChange}
                                        onExpMonthChange={handleExpMonthChange}
                                        onExpYearChange={handleExpYearChange}
                                        onCVCChange={handleCVCChange}
                                    />
                                }
                            />
                            <Route
                                path="/complete"
                                element={
                                    <SubmissionPage onReset={handleReset} />
                                }
                            />
                            <Route path="*" element={<MissingPage />} />
                        </Routes>
                    </FormSection>
                    <CardSection>
                        <h1 className="hidden">Card Details</h1>
                        <CardFront
                            number={number}
                            holderName={name}
                            expMonth={expMonth}
                            expYear={expYear}
                        />
                        <CardBack cvc={cvc} />
                    </CardSection>
                </Main>
            </BrowserRouter>
        </>
    );
}
