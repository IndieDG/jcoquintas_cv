import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type BannerProps = {
  name: string;
  profile: string;
  email: string;
  phone: string;
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 8fr;
  position: sticky;
  top: 0px;
  background-color: #011627;
  padding: 0px 50px 0px 50px;
`;

const Name = styled.h1`
  text-align: right;
  margin: 5px 0px 5px 0px;
  font-size: 2em;
  font-family: ${defaultFont};
  color: #fdfffc;
`;

const Contacts = styled.div`
  text-align: right;
  font-size: 1em;
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
`;

const Image = styled.img`
  border-radius: 50%;
  height: 100px;
`;

export const Banner: React.FC<BannerProps> = ({
  name,
  profile,
  email,
  phone,
}) => (
  <Container>
    <section>
      <Image alt="Profile Picture" src={profile} />
    </section>
    <section>
      <Name>{name}</Name>
      <Contacts>{email}</Contacts>
      <Contacts>{phone}</Contacts>
    </section>
  </Container>
);
