import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./Theme";

const GlobalFormStyle = createGlobalStyle`
    .invalid-input {
        border-color: ${colors.formInvalid} !important;
        &::after {
            content: "Test";
            color: red;
        }
    }
`;

const ErrorMessage = styled.p`
    color: ${colors.formInvalid};
    font-size: 0.75rem;
    margin: 10px 0 0;
    letter-spacing: 0px;
`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
        "na na"
        "nu nu"
        "ex ex"
        "cv cv"
        "su su";
    row-gap: 20.5px;
    justify-items: stretch;
    align-items: start;
    height: fit-content;

    @media screen and (min-width: 321px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, auto);
        grid-template-areas:
            "na na"
            "nu nu"
            "ex cv"
            "su su";
    }

    @media screen and (min-width: 1300px) {
        row-gap: 0;
        margin-top: 26vh;
        row-gap: 27px;
    }

    @media screen and (min-width: 1920px) {
        margin-top: 34vh;
    }
`;

const NameContainer = styled.div`
    grid-area: na;
    display: flex;
    flex-direction: column;
`;

const NumberContainer = styled.div`
    grid-area: nu;
    display: flex;
    flex-direction: column;
`;

const ExpFieldset = styled.fieldset`
    grid-area: ex;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    column-gap: 8px;
    margin-right: 12px;

    legend {
        grid-column: 1 / -1;
        grid-row: 1;
    }

    select[name="exp-date-month"] {
        grid-column: 1;
        grid-row: 2;
        padding: 10px 6px 10px 11px;

        @media screen and (min-width: 1300px) {
            padding-left: 12px;
            padding-right: 12px;
        }
    }

    select[name="exp-date-year"] {
        grid-column: 2;
        grid-row: 2;
        padding: 10px 15px 10px 11px;

        @media screen and (min-width: 1300px) {
            padding-left: 13px;
            padding-right: 24px;
        }
    }

    ${ErrorMessage} {
        grid-column: 1 / -1;
        grid-row: 3;
    }
`;

const CVCContainer = styled.div`
    grid-area: cv;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const CVCLabel = styled.label`
    padding-bottom: 0;
    flex-grow: 1;
`;

const SubmitButton = styled.button`
    grid-area: su;
    margin-top: 7px;

    @media screen and (min-width: 1300px) {
        margin-top: 12px;
    }
`;

function createExpMonthOptions() {
    let months = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            months.push(`0${i}`);
        } else {
            months.push(`${i}`);
        }
    }

    return months;
}

function createExpYearOptions() {
    const d = new Date();
    let currentYear = `${d.getFullYear()}`;
    let years = [currentYear.slice(2)];
    for (let i = 1; i < 5; i++) {
        const year = `${d.getFullYear() + i}`;
        years.push(year.slice(2));
    }
    return years;
}

export default function CardForm({
    onNameChange,
    onNumberChange,
    onExpMonthChange,
    onExpYearChange,
    onCVCChange,
}) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [nameValidity, setNameValidity] = useState({
        isValid: true,
        message: "",
    });
    const [numberValidity, setNumberValidity] = useState({
        isValid: true,
        message: "",
    });
    const [expMonthValidity, setExpMonthValidity] = useState({
        isValid: true,
        message: "",
    });
    const [expYearValidity, setExpYearValidity] = useState({
        isValid: true,
        message: "",
    });
    const [cvcValidity, setCvcValidity] = useState({
        isValid: true,
        message: "",
    });

    let navigate = useNavigate();

    function handleNameChange(event) {
        const value = event.target.value;
        setName(value);
        onNameChange(value);
        if (!nameValidity.isValid) {
            setNameValidity({ isValid: true, message: "" });
        }
    }

    function handleNumberChange(event) {
        const value = event.target.value;
        setNumber(value);
        onNumberChange(value);
        if (!numberValidity.isValid) {
            setNumberValidity({ isValid: true, message: "" });
        }
    }

    function validateNumber(event) {
        const value = event.target.value;

        // Test if only numbers
        if (value.length > 0 && !/^\d+$/.test(value)) {
            setNumberValidity({
                isValid: false,
                message: "Wrong format, numbers only",
            });
        }
        // Test if less than 15 characters
        else if (value.length > 0 && value.length < 15) {
            setNumberValidity({
                isValid: false,
                message: "Too few characters, must be 15 to 16 characters",
            });
        }
        // Test if greater than 16 characters
        else if (value.length > 16) {
            setNumberValidity({
                isValid: false,
                message: "Too many characters, must be 15 to 16 characters",
            });
        } else {
            setNumberValidity({ isValid: true, message: "" });
        }
    }

    function handleExpMonthChange(event) {
        setExpMonth(event.target.value);
        onExpMonthChange(event.target.value);
        if (!expMonthValidity.isValid) {
            setExpMonthValidity({ isValid: true, message: "" });
        }
    }

    function handleExpYearChange(event) {
        setExpYear(event.target.value);
        onExpYearChange(event.target.value);
        if (!expYearValidity.isValid) {
            setExpYearValidity({ isValid: true, message: "" });
        }
    }

    function handleCVCChange(event) {
        setCvc(event.target.value);
        onCVCChange(event.target.value);
        if (!cvcValidity.isValid) {
            setCvcValidity({ isValid: true, message: "" });
        }
    }

    function validateCVC(event) {
        const value = event.target.value;

        if (value.length > 0) {
            // Test if exactly three characters
            if (value.length !== 3) {
                setCvcValidity({
                    isValid: false,
                    message: "Must be three characters long",
                });
            }
            // Test if only numbers
            else if (!/^\d+$/.test(value)) {
                setCvcValidity({
                    isValid: false,
                    message: "Wrong format, numbers only",
                });
            }
        } else {
            setCvcValidity({ isValid: true, message: "" });
        }
    }

    function containsEmptyFields() {
        // Check individual fields
        if (name.length <= 0) {
            setNameValidity({ isValid: false, message: "Cannot be blank" });
        }
        if (number.length <= 0) {
            setNumberValidity({ isValid: false, message: "Cannot be blank" });
        }
        if (expMonth.length <= 0) {
            setExpMonthValidity({ isValid: false, message: "Cannot be blank" });
        }
        if (expYear.length <= 0) {
            setExpYearValidity({ isValid: false, message: "Cannot be blank" });
        }
        if (cvc.length <= 0) {
            setCvcValidity({ isValid: false, message: "Cannot be blank" });
        }

        // Check all fields
        if (
            name.length > 0 &&
            number.length > 0 &&
            expMonth.length > 0 &&
            expYear.length > 0 &&
            cvc.length > 0
        ) {
            return true;
        }
        return false;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!containsEmptyFields()) {
            return false;
        } else if (
            nameValidity.isValid > 0 &&
            numberValidity.isValid > 0 &&
            expMonthValidity.isValid > 0 &&
            expYearValidity.isValid > 0 &&
            cvcValidity.isValid > 0
        ) {
            localStorage.setItem(
                "form-data",
                JSON.stringify({
                    name: name,
                    number: number,
                    expMonth: expMonth,
                    expYear: expYear,
                    cvc: cvc,
                })
            );
            navigate("/complete");
            return true;
        }
        return false;
    }

    return (
        <>
            <GlobalFormStyle />
            <h1 className="hidden">Card Form</h1>

            <Form onSubmit={handleSubmit} noValidate>
                <NameContainer>
                    <label>
                        Cardholder Name
                        <input
                            id="card-name"
                            className={
                                nameValidity.isValid ? "" : "invalid-input"
                            }
                            type="text"
                            placeholder="e.g. Jane Appleseed"
                            minLength={1}
                            maxLength={25}
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </label>
                    {nameValidity.isValid ? null : (
                        <ErrorMessage>{nameValidity.message}</ErrorMessage>
                    )}
                </NameContainer>

                <NumberContainer>
                    <label>
                        Card Number
                        <input
                            id="card-number"
                            className={
                                numberValidity.isValid ? "" : "invalid-input"
                            }
                            type="number"
                            placeholder="e.g. 1234 5678 9123 0000"
                            minLength={15}
                            maxLength={16}
                            min={0}
                            pattern="\d+$"
                            value={number}
                            onChange={handleNumberChange}
                            onBlur={validateNumber}
                            required
                        />
                    </label>
                    {numberValidity.isValid ? null : (
                        <ErrorMessage>{numberValidity.message}</ErrorMessage>
                    )}
                </NumberContainer>

                <ExpFieldset>
                    <legend aria-label="Expiration Date (MM/YY)">
                        Exp. Date (MM/YY)
                    </legend>
                    <select
                        name="exp-date-month"
                        className={
                            expMonthValidity.isValid ? "" : "invalid-input"
                        }
                        placeholder="MM"
                        aria-label="Month"
                        value={expMonth}
                        onChange={handleExpMonthChange}
                        required
                    >
                        <option value="" disabled hidden key="default">
                            MM
                        </option>
                        {createExpMonthOptions().map((val) => (
                            <option value={val} key={val}>
                                {val}
                            </option>
                        ))}
                    </select>
                    <select
                        name="exp-date-year"
                        className={
                            expYearValidity.isValid ? "" : "invalid-input"
                        }
                        placeholder="YY"
                        aria-label="Year"
                        value={expYear}
                        onChange={handleExpYearChange}
                        required
                    >
                        <option value="" disabled hidden key="default">
                            YY
                        </option>
                        {createExpYearOptions().map((val) => (
                            <option value={val} key={val}>
                                {val}
                            </option>
                        ))}
                    </select>
                    {!expMonthValidity.isValid ? (
                        <ErrorMessage>{expMonthValidity.message}</ErrorMessage>
                    ) : !expYearValidity.isValid ? (
                        <ErrorMessage>{expYearValidity.message}</ErrorMessage>
                    ) : null}
                </ExpFieldset>

                <CVCContainer>
                    <CVCLabel>
                        CVC
                        <input
                            id="card-cvc"
                            className={
                                cvcValidity.isValid ? "" : "invalid-input"
                            }
                            type="number"
                            size={3}
                            min={0}
                            placeholder="e.g. 123"
                            pattern="\d+$"
                            value={cvc}
                            onChange={handleCVCChange}
                            onBlur={validateCVC}
                            required
                        />
                    </CVCLabel>
                    {cvcValidity.isValid ? null : (
                        <ErrorMessage>{cvcValidity.message}</ErrorMessage>
                    )}
                </CVCContainer>

                <SubmitButton type="submit">Confirm</SubmitButton>
            </Form>
        </>
    );
}
