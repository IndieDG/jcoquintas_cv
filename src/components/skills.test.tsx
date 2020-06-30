import React from "react";
import { render } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  it("should render passed skills", () => {
    const { getByText, getAllByTestId } = render(
      <Skills
        skills={[
          { name: "some-skill-1", level: 4 },
          { name: "some-skill-2", level: 3 },
        ]}
      />
    );

    expect(getByText("some-skill-1")).toBeTruthy();
    expect(getByText("some-skill-2")).toBeTruthy();
    expect(getAllByTestId("some-skill-1 level")).toHaveLength(4);
    expect(getAllByTestId("some-skill-1 empty")).toHaveLength(1);
    expect(getAllByTestId("some-skill-2 level")).toHaveLength(3);
    expect(getAllByTestId("some-skill-2 empty")).toHaveLength(2);
  });
});
