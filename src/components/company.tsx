import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type CompanyProps = {
  name: string;
  logo: string;
};

const Container = styled.section`
  text-align: center;
  background-color: #011627;
  padding: 5px;
`;

const Name = styled.h1`
  font-size: 0.7em;
  font-family: '${defaultFont}';
  color: #fdfffc;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 200px;
`;

export const Company: React.FC<CompanyProps> = ({ name, logo }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Image alt={`${name} logo`} src={logo} />
    </Container>
  );
};
