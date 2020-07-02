import React from "react";
import { render } from "@testing-library/react";
import { Institution } from "./institution";

describe("Company Tile", () => {
  it("should render passed props", () => {
    const { getByText, getByAltText } = render(
      <Institution
        name="some-company-name"
        logo="some-logo.png"
        link="www.company.com"
      />
    );

    const logo = getByAltText("some-company-name logo");

    expect(getByText("some-company-name")).toBeTruthy();
    expect(logo).toHaveAttribute("src", "some-logo.png");
    expect(logo.parentElement).toHaveAttribute("href", "www.company.com");
    expect(logo.parentElement).toHaveAttribute("target", "_blank");
    expect(logo.parentElement).toHaveAttribute("rel", "noopener noreferrer");
  });
});
