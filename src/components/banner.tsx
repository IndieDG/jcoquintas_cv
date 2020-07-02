import React from "react";
import styled from "styled-components";
import { defaultFont } from "./styled";

type Contacts = {
  email: string;
  phone: string;
  linkedIn: string;
  github?: string;
};

type BannerProps = {
  name: string;
  title: string;
  profile: string;
  contacts: Contacts;
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  position: sticky;
  top: 0px;
  background-color: #011627;
  padding: 0px 50px 0px 50px;
  margin-bottom: 25px;
`;

const Name = styled.h1`
  text-align: center;
  margin: 5px 0px 5px 0px;
  font-size: 2em;
  font-family: ${defaultFont};
  color: #fdfffc;
`;

const Title = styled.h1`
  text-align: center;
  margin: 5px 0px 5px 0px;
  font-size: 1.5em;
  font-family: ${defaultFont};
  color: #ff9f1c;
`;

const MarginSection = styled.section`
  margin: 10px 0px 10px 0px;
`;

const ContactSection = styled.section`
  margin-top: 10px;
  text-align: right;
`;

const Contacts = styled.div`
  margin: 5px 0px 5px 0px;
  font-size: 0.8em;
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 100px;
`;

const SocialMedia = styled.img`
  margin: 5px;
  height: 40px;
`;

export const Banner: React.FC<BannerProps> = ({
  name,
  title,
  profile,
  contacts,
}) => (
  <Container>
    <MarginSection>
      <ProfileImage alt="Profile Picture" src={profile} />
    </MarginSection>
    <MarginSection>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </MarginSection>
    <ContactSection>
      <Contacts>{contacts.email}</Contacts>
      <Contacts>{contacts.phone}</Contacts>
      <a href={contacts.linkedIn} target="_blank" rel="noopener noreferrer">
        <SocialMedia alt="LinkedIn" src="images/linkedin.png" />
      </a>
      {contacts.github && (
        <a href={contacts.github} target="_blank" rel="noopener noreferrer">
          <SocialMedia alt="Github" src="images/github.png" />
        </a>
      )}
    </ContactSection>
  </Container>
);
