import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

// const defaultFont = "Cormorant Unicase";

type ExperienceProps = {
  title: string;
  description: string[];
  start: string;
  end: string;
  theme?: Theme;
};

export enum Theme {
  Dark,
  Light,
}

const Container = styled.section`
  min-width: 370px;
  padding: 10px;
  background-color: ${(props) => (props.color ? props.color : "#fdfffc")};
`;

const Title = styled.h2`
  font-size: 0.5em;
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#011627")};
`;

const Period = styled.div`
  font-size: 0.4em;
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
`;

const Description = styled.div`
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
`;

const Ul = styled.ul`
  font-size: 0.3em;
  font-family: ${defaultFont};
  margin: 10px 0px 10px 0px;
  list-style-type: "→   ";
`;

const Li = styled.li`
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
`;

export const Experience: React.FC<ExperienceProps> = ({
  title,
  theme,
  description,
  start,
  end,
}) => (
  <>
    <Container color={theme === Theme.Dark ? "#011627" : "#fdfffc"}>
      <Title color={theme === Theme.Dark ? "#fdfffc" : "#011627"}>
        {title}
      </Title>
      <Period color={theme === Theme.Dark ? "#ff9f1c" : "#ff9f1c"}>
        {start} - {end}
      </Period>
      <Ul>
        {description.map((d, i) => (
          <Li key={i} color={theme === Theme.Dark ? "#fdfffc" : "#979dac"}>
            <Description color={theme === Theme.Dark ? "#fdfffc" : "#979dac"}>
              {d}
            </Description>
          </Li>
        ))}
      </Ul>
    </Container>
  </>
);

// color palet:
// #fdfffc
// #011627
// #2ec4b6
// #2ec4b6
// #e71d36
// #ff9f1c
