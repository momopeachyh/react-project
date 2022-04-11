import { render, screen } from "@testing-library/react";
import App from "./App";

// screen.debug();
// const listElement = screen.getByRole("list");
// const listItems = screen.getAllByRole("listitem");
// expect(listElement).toBeInTheDocument();
// expect(listElement).toHaveClass("animals");
// expect(listItems.length).toEqual(4);
// });

describe("Testing App component", () => {
  test("username is rendered", async () => {
    render(<App />);
    const userName = await screen.findByText("Jack");
    expect(userName).toBeInTheDocument();
  });

  test("loading text appears", async () => {
    render(<App />);
    const loadingText = await screen.findByText("Loading");
    expect(loadingText).toBeInTheDocument();
    // await waitForElementToBeRemoved(() => screen.getByText());
  });
});
