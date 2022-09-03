export default function CardForm() {
    return (
        <form>
            <label htmlFor="card-name">Cardholder Name</label>
            <input
                id="card-name"
                type="text"
                placeholder="e.g. Jane Appleseed"
            />

            <label htmlFor="card-number">Card Number</label>
            <input
                id="card-number"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
            />

            <fieldset>
                <legend aria-label="Expiration Date (MM/YY)">
                    Exp. Date (MM/YY)
                </legend>
                <input
                    id="exp-date-month"
                    type="number"
                    placeholder="MM"
                    aria-label="Month"
                />
                <input
                    id="exp-date-year"
                    type="number"
                    placeholder="YY"
                    aria-label="Year"
                />
            </fieldset>

            <label htmlFor="card-cvc">CVC</label>
            <input id="card-cvc" type="number" placeholder="e.g. 123" />

            <button type="submit">Confirm</button>
        </form>
    );
}
