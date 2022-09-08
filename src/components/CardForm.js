import styled from "styled-components";

const ExpDateCVCContainer = styled.div`
    display: flex;
    column-gap: 10px;
    row-gap: 21px;
    flex-wrap: wrap;

    @media screen and (min-width: 1300px) {
        column-gap: 20px;
    }
`;

const ExpFieldset = styled.fieldset`
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (min-width: 1300px) {
        row-gap: 29px;
    }
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

export default function CardForm() {
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

    return (
        <Form>
            <label>
                Cardholder Name
                <input type="text" placeholder="e.g. Jane Appleseed" required />
            </label>

            <label>
                Card Number
                <input
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    required
                />
            </label>
            <ExpDateCVCContainer>
                <ExpFieldset>
                    <legend aria-label="Expiration Date (MM/YY)">
                        Exp. Date (MM/YY)
                    </legend>
                    <select
                        name="exp-date-month"
                        placeholder="MM"
                        aria-label="Month"
                        required
                        defaultValue=""
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
                        placeholder="YY"
                        aria-label="Year"
                        required
                        defaultValue=""
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
                </ExpFieldset>

                <CVCLabel>
                    CVC
                    <input
                        id="card-cvc"
                        type="number"
                        placeholder="e.g. 123"
                        required
                    />
                </CVCLabel>
            </ExpDateCVCContainer>

            <SubmitButton type="submit">Confirm</SubmitButton>
        </Form>
    );
}
