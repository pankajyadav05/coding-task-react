import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import { Providers } from "@/lib/providers";
import { ADD_IF_ODD_ERROR_MESSAGE, INCREMENT_AMOUNT_ERROR_MESSAGE } from "@/app/constant";

describe("Counter", () => {
  beforeEach(() => {
    // Resets the state before each test
    render(
      <Providers>
        <Counter />
      </Providers>
    );
  });

  it("should display initial count as 0", async () => {
    const countElement = screen.getByLabelText("count");
    await waitFor(() => {
      expect(countElement).toHaveTextContent("0");
    });
  });

  it("should increase count on increment", async () => {
    const incrementButton = screen.getByLabelText("Increment value");
    const countElement = screen.getByLabelText('count');

    act(() => {
      fireEvent.click(incrementButton);
    });

    await waitFor(() => {
      expect(countElement).toHaveTextContent("1");
    });
  });

  it("should decrease count on decrement", async () => {
    const decrementButton = screen.getByLabelText("Decrement value");
    const countElement = screen.getByLabelText('count');

    act(() => {
      fireEvent.click(decrementButton);
    });

    await waitFor(() => {
      expect(countElement).toHaveTextContent("0");
    });
  });

  it("should display an error message when adding 0 amount", async () => {
    const addButton = screen.getByText(/Add Amount/);

    act(() => {
      fireEvent.click(addButton);
    });

    const notificationElement = await waitFor(() =>
      screen.getByText(INCREMENT_AMOUNT_ERROR_MESSAGE)
    );

    expect(notificationElement).toBeInTheDocument();
  });

  it("should display an error message when adding to an even count", async () => {
    const addIfOddButton = screen.getByText(/Add If Odd/);
    const countElement = screen.getByLabelText('count');

    act(() => {
      fireEvent.change(screen.getByLabelText("Set increment amount"), {
        target: { value: "1" },
      });

      fireEvent.click(addIfOddButton);
    });

    await waitFor(() => {
      const notificationElement = screen.getByText(ADD_IF_ODD_ERROR_MESSAGE);
      expect(notificationElement).toBeInTheDocument();
      expect(countElement).toHaveTextContent("0");
    });
  });
});
