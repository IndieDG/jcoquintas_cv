import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type AboutProps = {
  name: string;
  description: string;
};

const Name = styled.h1`
  margin: 10px;
  font-size: 1em;
  font-family: ${defaultFont};
  color: #011627;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 0.4em;
  font-family: ${defaultFont};
  color: #979dac;
`;

export const About: React.FC<AboutProps> = ({ name, description }) => (
  <>
    <Name>{`I'm ${name}.`}</Name>
    <Text>{description}</Text>
  </>
);
