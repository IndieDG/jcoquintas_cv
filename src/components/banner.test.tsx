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
    expect(linkedIn).toHaveAttribute("src", "images/linkedin.png");
    expect(linkedIn.parentElement).toHaveAttribute("href", "www.linkedin.com");
    expect(linkedIn.parentElement).toHaveAttribute("target", "_blank");
    expect(linkedIn.parentElement).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

  it("should render github when prop is passed", () => {
    const { getByAltText } = render(
      <Banner
        name="Some Name"
        title="Some Title"
        profile="some-logo.png"
        contacts={{
          email: "some-email@some.com",
          phone: "some-phone-number",
          linkedIn: "www.linkedin.com",
          github: "www.github.com",
        }}
      />
    );

    const github = getByAltText("Github");
    expect(github).toHaveAttribute("src", "images/github.png");
    expect(github.parentElement).toHaveAttribute("href", "www.github.com");
    expect(github.parentElement).toHaveAttribute("target", "_blank");
    expect(github.parentElement).toHaveAttribute("rel", "noopener noreferrer");
  });
});
