import React from "react";
import styled from "styled-components";
import { defaultFont, device } from "./styled";

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
  margin-bottom: 25px;
  background-color: #011627;
  @media ${device.pc} {
    padding: 0px 50px 0px 50px;
  }
  @media ${device.mobile} {
    padding: 0px 15px 0px 15px;
  }
  @media ${device.tablet} {
    padding: 0px 50px 0px 50px;
  }
`;

const Name = styled.h1`
  text-align: center;
  margin: 5px 0px 5px 0px;
  font-family: ${defaultFont};
  color: #fdfffc;
  @media ${device.pc} {
    font-size: 2em;
  }
  @media ${device.mobile} {
    font-size: 1em;
  }
  @media ${device.tablet} {
    font-size: 2em;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 5px 0px 5px 0px;
  font-family: ${defaultFont};
  color: #ff9f1c;
  @media ${device.pc} {
    font-size: 1.5em;
  }
  @media ${device.mobile} {
    font-size: 0.7em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
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
  font-family: ${defaultFont};
  color: ${(props) => (props.color ? props.color : "#979dac")};
  font-size: 0.8em;
  @media ${device.pc} {
    font-size: 0.8em;
  }
  @media ${device.mobile} {
    font-size: 0.5em;
  }
  @media ${device.tablet} {
    font-size: 0.8em;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 100px;
  @media ${device.pc} {
    height: 100px;
  }
  @media ${device.mobile} {
    height: 50px;
  }
  @media ${device.tablet} {
    height: 100px;
  }
`;

const SocialMedia = styled.img`
  margin: 5px;
  @media ${device.pc} {
    height: 40px;
  }
  @media ${device.mobile} {
    height: 20px;
  }
  @media ${device.tablet} {
    height: 40px;
  }
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
