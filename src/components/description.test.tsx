import React from "react";
import { render } from "@testing-library/react";
import { Description } from "./description";

describe("About", () => {
  it("should render passed props", () => {
    const { getByText } = render(
      <Description title="Some Name" description="Some long description" />
    );

    expect(getByText("Some Name")).toBeTruthy();
    expect(getByText("Some long description")).toBeTruthy();
  });
});
