import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type AboutProps = {
  title: string;
  description: string;
};

const Title = styled.h1`
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

export const Description: React.FC<AboutProps> = ({
  title: name,
  description,
}) => (
  <>
    <Title>{name}</Title>
    <Text>{description}</Text>
  </>
);
