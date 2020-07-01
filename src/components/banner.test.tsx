import React from "react";
import { render } from "@testing-library/react";
import { Banner } from "./banner";

describe("Banner", () => {
  it("should render passed props", () => {
    const { getByText, getByAltText } = render(
      <Banner
        name="Some Name"
        title="Some Title"
        profile="some-logo.png"
        contacts={{
          email: "some-email@some.com",
          phone: "some-phone-number",
          linkedIn: "www.linkedin.com",
        }}
      />
    );

    const linkedIn = getByAltText("LinkedIn");

    expect(getByText("Some Name")).toBeTruthy();
    expect(getByText("Some Title")).toBeTruthy();
    expect(getByAltText("Profile Picture")).toHaveAttribute(
      "src",
      "some-logo.png"
    );
    expect(getByText("some-email@some.com")).toBeTruthy();
    expect(getByText("some-phone-number")).toBeTruthy();
    expect(linkedIn).toHaveAttribute("src", "images/linkedin.webp");
    expect(linkedIn.parentElement).toHaveAttribute("href", "www.linkedin.com");
    expect(linkedIn.parentElement).toHaveAttribute("target", "_blank");
    expect(linkedIn.parentElement).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
});
