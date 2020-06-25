import React from "react";
import { render } from "@testing-library/react";
import { Banner } from "./banner";

describe("Company Tile", () => {
  it("should render passed props", () => {
    const { getByText, getByAltText } = render(
      <Banner
        name="Some Name"
        profile="some-logo.png"
        email="some-email@some.com"
        phone="some-phone-number"
      />
    );

    expect(getByText("Some Name")).toBeTruthy();
    expect(getByAltText("Profile Picture")).toHaveAttribute(
      "src",
      "some-logo.png"
    );
    expect(getByText("some-email@some.com")).toBeTruthy();
    expect(getByText("some-phone-number")).toBeTruthy();
  });
});
