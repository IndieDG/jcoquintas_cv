import React from "react";
import { render } from "@testing-library/react";
import { About } from "./about";

describe("About", () => {
  it("should render passed props", () => {
    const { getByText } = render(
      <About name="Some Name" description="Some long description" />
    );

    expect(getByText("I'm Some Name.")).toBeTruthy();
    expect(getByText("Some long description")).toBeTruthy();
  });
});
