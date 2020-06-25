import React from "react";
import { render } from "@testing-library/react";
import { Experience, Theme } from "./experience";

describe("Experiance Tile", () => {
  it("should render passed props", () => {
    const { getByText } = render(
      <Experience
        title="Software Engineer"
        description={["Job description 1", "Job description 2"]}
        start="Fev 2018"
        end="Present"
      />
    );

    expect(getByText("Software Engineer")).toBeTruthy();
    expect(getByText("Fev 2018 - Present")).toBeTruthy();
    expect(getByText("Job description 1")).toBeTruthy();
    expect(getByText("Job description 2")).toBeTruthy();
  });

  it("should render light background dark text", () => {
    const { container, getByText } = render(
      <Experience
        title="Software Engineer"
        description={["Job description 1", "Job description 2"]}
        start="Fev 2018"
        end="Present"
      />
    );

    // light background
    expect(container.firstChild).toHaveStyle(
      "background-color: rgb(253, 255, 252);"
    );

    // text colors
    expect(getByText("Software Engineer")).toHaveStyle(
      "color: rgb(1, 22, 39);"
    );
    expect(getByText("Fev 2018 - Present")).toHaveStyle(
      "color: rgb(255, 159, 28);"
    );
    expect(getByText("Job description 1")).toHaveStyle(
      "color: rgb(151, 157, 172);"
    );
  });

  it("should render dark background light text", () => {
    const { container, getByText } = render(
      <Experience
        title="Software Engineer"
        description={["Job description 1", "Job description 2"]}
        start="Fev 2018"
        end="Present"
        theme={Theme.Dark}
      />
    );

    // light background
    expect(container.firstChild).toHaveStyle(
      "background-color: rgb(1, 22, 39);"
    );

    // text colors
    expect(getByText("Software Engineer")).toHaveStyle(
      "color: rgb(253, 255, 252);"
    );
    expect(getByText("Fev 2018 - Present")).toHaveStyle(
      "color: rgb(255, 159, 28);"
    );
    expect(getByText("Job description 1")).toHaveStyle(
      "color: rgb(253, 255, 252);"
    );
  });
});
