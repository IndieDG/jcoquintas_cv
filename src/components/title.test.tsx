import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./title";

describe("Company Tile", () => {
  it("should format the Education title", () => {
    const { getByText } = render(<Title title="Education" />);

    expect(getByText("EDUC")).toBeTruthy();
    expect(getByText("ATIO")).toBeTruthy();
    expect(getByText("N---")).toBeTruthy();
  });

  it("should format the Skills title", () => {
    const { getByText } = render(<Title title="Skills" />);

    expect(getByText("SKIL")).toBeTruthy();
    expect(getByText("LS--")).toBeTruthy();
  });

  it("should format the Experience title", () => {
    const { getByText } = render(<Title title="Experience" />);

    expect(getByText("EXPE")).toBeTruthy();
    expect(getByText("RIEN")).toBeTruthy();
    expect(getByText("CE--")).toBeTruthy();
  });
});
