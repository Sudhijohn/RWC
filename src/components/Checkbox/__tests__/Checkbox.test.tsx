import React from "react";
import "@testing-library/jest-dom";
import "jest";
import { render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Running Test for Checkbox", () => {
  test("Check Button Disabled", () => {
    render(<Checkbox id="id-1" checked={true} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
