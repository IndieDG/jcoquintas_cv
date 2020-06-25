import React from "react";
import { render } from "@testing-library/react";
import { Company } from "./company";

describe("Company Tile", () => {
  it("should render passed props", () => {
    const { getByText, getByAltText } = render(
      <Company name="some-company-name" logo="some-logo.png" />
    );

    expect(getByText("some-company-name")).toBeTruthy();
    expect(getByAltText("some-company-name logo")).toHaveAttribute(
      "src",
      "some-logo.png"
    );
  });
});
