import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type TitleProps = {
  title: "Education" | "Skills" | "Experience";
};

const Container = styled.section`
  text-align: center;
  background-color: #011627;
  padding: 5px;
`;

const Text = styled.h1`
  margin: 20px;
  font-size: 1em;
  font-family: ${defaultFont};
  color: #fdfffc;
`;

const titleMapper = (title: TitleProps) => {
  if (title.title === "Education") {
    return (
      <Container>
        <Text>EDUC</Text>
        <Text>ATIO</Text>
        <Text>N---</Text>
      </Container>
    );
  }
  if (title.title === "Skills") {
    return (
      <Container>
        <Text>SKIL</Text>
        <Text>LS--</Text>
        <br />
      </Container>
    );
  }
  if (title.title === "Experience") {
    return (
      <Container>
        <Text>EXPE</Text>
        <Text>RIEN</Text>
        <Text>CE--</Text>
      </Container>
    );
  }
};

export const Title: React.FC<TitleProps> = ({ title }) => (
  <>{titleMapper({ title })}</>
);
