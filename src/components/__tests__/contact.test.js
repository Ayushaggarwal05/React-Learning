import { render, screen } from "@testing-library/react";
import Conatct from "../Contact";
import "@testing-library/jest-dom";

test("SHould load contact us component", () => {
  render(<Conatct />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("SHould load button inside contact component", () => {
  render(<Conatct />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
