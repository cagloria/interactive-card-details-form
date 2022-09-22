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

const ExpDateCVCContainer = styled.div`
    display: flex;
    column-gap: 10px;
    row-gap: 21px;
    flex-wrap: wrap;

    @media screen and (min-width: 1300px) {
        column-gap: 20px;
    }
`;

const SelectContainer = styled.div`
    display: flex;
    column-gap: 8px;

    select[name="exp-date-month"] {
        padding: 10px 6px 10px 11px;

        @media screen and (min-width: 1300px) {
            padding-left: 12px;
            padding-right: 12px;
        }
    }

    select[name="exp-date-year"] {
        padding: 10px 15px 10px 11px;

        @media screen and (min-width: 1300px) {
            padding-left: 13px;
            padding-right: 24px;
        }
    }
`;

const ExpFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
`;

const CVCContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const CVCLabel = styled.label`
    padding-bottom: 0;
    width: 0;
    min-width: 115px;
    flex-grow: 1;
`;

const SubmitButton = styled.button`
    margin-top: 6px;
`;

const ErrorMessage = styled.p`
    color: ${colors.formInvalid};
    font-size: 0.75rem;
    margin: -14px 0 -3px;
    letter-spacing: 0px;

    @media screen and (min-width: 1300px) {
        margin-top: -23px;
    }
`;

const ExpErrorMessage = styled(ErrorMessage)`
    margin-top: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (min-width: 1300px) {
        row-gap: 29px;
        margin-top: 26vh;
    }

    @media screen and (min-width: 1920px) {
        margin-top: 34vh;
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

    function validateName(event) {
        if (event.target.value.length <= 0) {
            setNameValidity({ isValid: false, message: "Cannot be blank" });
        } else {
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

        if (value.length <= 0) {
            setNumberValidity({ isValid: false, message: "Cannot be blank" });
        } else if (value.length < 15) {
            setNumberValidity({
                isValid: false,
                message: "Too few characters, must be 15 to 16 characters",
            });
        } else if (value.length > 16) {
            setNumberValidity({
                isValid: false,
                message: "Too many characters, must be 15 to 16 characters",
            });
        } else if (!/\d+$/.test(value)) {
            setNumberValidity({
                isValid: false,
                message: "Wrong format, numbers only",
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

    function validateExpMonth(event) {
        if (event.target.value.length <= 0) {
            setExpMonthValidity({ isValid: false, message: "Cannot be blank" });
        }
    }

    function handleExpYearChange(event) {
        setExpYear(event.target.value);
        onExpYearChange(event.target.value);
        if (!expYearValidity.isValid) {
            setExpYearValidity({ isValid: true, message: "" });
        }
    }

    function validateExpYear(event) {
        if (event.target.value.length <= 0) {
            setExpYearValidity({ isValid: false, message: "Cannot be blank" });
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

        if (value.length <= 0) {
            setCvcValidity({ isValid: false, message: "Cannot be blank" });
        } else if (value.length !== 3) {
            setCvcValidity({
                isValid: false,
                message: "Must be three characters long",
            });
        } else if (!/\d+$/.test(value)) {
            setCvcValidity({
                isValid: false,
                message: "Wrong format, numbers only",
            });
        } else {
            setCvcValidity({ isValid: true, message: "" });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
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
    }

    return (
        <>
            <GlobalFormStyle />
            <h1 className="hidden">Card Form</h1>

            <Form onSubmit={handleSubmit}>
                <label>
                    Cardholder Name
                    <input
                        id="card-name"
                        className={nameValidity.isValid ? "" : "invalid-input"}
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        minLength={1}
                        maxLength={25}
                        value={name}
                        onChange={handleNameChange}
                        onBlur={validateName}
                        required
                    />
                </label>
                {nameValidity.isValid ? null : (
                    <ErrorMessage>{nameValidity.message}</ErrorMessage>
                )}

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

                <ExpDateCVCContainer>
                    <ExpFieldset>
                        <legend aria-label="Expiration Date (MM/YY)">
                            Exp. Date (MM/YY)
                        </legend>
                        <SelectContainer>
                            <select
                                name="exp-date-month"
                                className={
                                    expMonthValidity.isValid
                                        ? ""
                                        : "invalid-input"
                                }
                                placeholder="MM"
                                aria-label="Month"
                                value={expMonth}
                                onChange={handleExpMonthChange}
                                onBlur={validateExpMonth}
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
                                    expYearValidity.isValid
                                        ? ""
                                        : "invalid-input"
                                }
                                placeholder="YY"
                                aria-label="Year"
                                value={expYear}
                                onChange={handleExpYearChange}
                                onBlur={validateExpYear}
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
                        </SelectContainer>
                        {!expMonthValidity.isValid ? (
                            <ExpErrorMessage>
                                {expMonthValidity.message}
                            </ExpErrorMessage>
                        ) : !expYearValidity.isValid ? (
                            <ExpErrorMessage>
                                {expYearValidity.message}
                            </ExpErrorMessage>
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
                                type="text"
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
                            <ExpErrorMessage>{cvcValidity.message}</ExpErrorMessage>
                        )}
                    </CVCContainer>
                </ExpDateCVCContainer>

                <SubmitButton type="submit">Confirm</SubmitButton>
            </Form>
        </>
    );
}
