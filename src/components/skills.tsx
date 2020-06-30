import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type Skill = {
  name: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
};

type SkillProps = {
  skills: Skill[];
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
  margin: 10px;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 0.4em;
  font-family: ${defaultFont};
  color: #979dac;
`;

const Svg = styled.svg`
  height: 40px;
  width: 40px;
`;

const FilledCircle = styled.circle`
  cx: 20;
  cy: 20;
  r: 15;
  stroke: #011627;
  stroke-width: 3;
  fill: #2ec4b6;
`;

const EmptyCircle = styled.circle`
  cx: 20;
  cy: 20;
  r: 15;
  stroke: #011627;
  stroke-width: 3;
  fill: #fdfffc;
`;

export const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <>
      {skills.map((s, i) => (
        <Grid key={i}>
          <Text>{s.name}</Text>
          {Array(s.level)
            .fill(0)
            .map((_, j) => (
              <Svg data-testid={`${s.name} level`} key={j}>
                <FilledCircle />
              </Svg>
            ))}
          {Array(5 - s.level)
            .fill(0)
            .map((_, j) => (
              <Svg data-testid={`${s.name} empty`} key={j}>
                <EmptyCircle />
              </Svg>
            ))}
        </Grid>
      ))}
    </>
  );
};
