import { render, screen } from "@testing-library/react";
import Conatct from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("SHould load contact us component", () => {
    render(<Conatct />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  // it and test are same
  it("Should load button inside contact component", () => {
    render(<Conatct />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
