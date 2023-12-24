import 'whatwg-fetch'
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";

import { Providers } from "@/lib/providers";


describe("Counter1", () => {
    it("should increase amount on increment", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const increment = screen.getByTestId('increment-button');
        const count = screen.getByTestId('count');
        count.textContent = "0";
        await waitFor(() => fireEvent.click(increment));
        await waitFor(() => expect(count).toHaveTextContent("1"));
    })
})
describe("Counter2", () => {
    it("should decrease amount on decrement", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const decrement = screen.getByTestId('decrement-button');
        const count = screen.getByTestId('count');
        count.textContent = "1"
        await waitFor(() => decrement.click());
        expect(count).toHaveTextContent("0");
    })
})



describe("Counter3", () => {
    it("should add value from input to existing count on Add Amount click", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const addAmountBtn = screen.getByText(/Add Amount/i);
        const amountInput = screen.getByTestId('amount-input');
        const count = screen.getByTestId('count');
        await waitFor(() => fireEvent.change(amountInput, { target: { value: 5 } }));
        await waitFor(() => addAmountBtn.click())
        expect(count).toHaveTextContent("5");
    })
})

describe("Counter4", () => {
    it("should add value from input to existing count if existing count is odd on AddOnIfOdd click", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const addIfOddAmountBtn = screen.getByText(/Add If Odd/i);
        const amountInput = screen.getByTestId('amount-input');
        const count = screen.getByTestId('count');
        await waitFor(() => fireEvent.change(amountInput, { target: { value: 5 } }));
        await waitFor(() => addIfOddAmountBtn.click());
        setTimeout(() => {
            expect(count).toHaveTextContent("10");
        }, 2000)
    })
})

describe("Counter5", () => {
    it("should not add value from input to existing count if existing count is not odd on AddOnIfOdd click", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const addIfOddAmountBtn = screen.getByText(/Add If Odd/i);
        const amountInput = screen.getByTestId('amount-input');
        const count = screen.getByTestId('count');
        count.textContent = "8";
        await waitFor(() => fireEvent.change(amountInput, { target: { value: 1 } }));
        await waitFor(() => addIfOddAmountBtn.click());
        setTimeout(() => {
            expect(count).toHaveTextContent("8");
        }, 2000)
    })
})

describe("Counter 6", () => {
    it("should add value from input to existing count if existing count is odd on AddOnIfOdd click", async () => {
        render(
            <Providers>
                <Counter />
            </Providers>
        );
        const addIfOddAmountBtn = screen.getByText(/Add If Odd/i);
        const amountInput = screen.getByTestId('amount-input');
        const count = screen.getByTestId('count');
        count.nodeValue = "2";
        await waitFor(() => fireEvent.change(amountInput, { target: { value: 7 } }))
        await waitFor(() => addIfOddAmountBtn.click())
        setTimeout(() => {
            expect(count).toHaveTextContent("9");
        }, 2000)
    })
})