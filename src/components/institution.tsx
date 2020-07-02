import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type InstitutionProps = {
  name: String;
  logo: string;
  link: string;
};

const Container = styled.section`
  text-align: center;
  background-color: #011627;
  padding: 5px;
`;

const Name = styled.h1`
  font-size: 0.7em;
  font-family: ${defaultFont};
  color: #fdfffc;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 200px;
`;

export const Institution: React.FC<InstitutionProps> = ({
  name,
  logo,
  link,
}) => (
  <Container>
    <Name>{name}</Name>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image alt={`${name} logo`} src={logo} />
    </a>
  </Container>
);
