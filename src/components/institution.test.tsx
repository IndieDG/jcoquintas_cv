import React from "react";
import { render } from "@testing-library/react";
import { Institution } from "./institution";

describe("Company Tile", () => {
  it("should render passed props", () => {
    const { getByText, getByAltText } = render(
      <Institution name="some-company-name" logo="some-logo.png" />
    );

    expect(getByText("some-company-name")).toBeTruthy();
    expect(getByAltText("some-company-name logo")).toHaveAttribute(
      "src",
      "some-logo.png"
    );
  });
});
