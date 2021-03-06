import React from "react";
import "./App.css";
import "./assets/css/fonts.css";
import { Grid, Cell, BottomCell } from "./components/styled";
import { Experience, Theme } from "./components/experience";
import { Institution } from "./components/institution";
import { Banner } from "./components/banner";
import { Title } from "./components/title";
import { Description } from "./components/description";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <Banner
        name="João Quintas"
        title="Software Engineer"
        profile="images/profile.jpg"
        contacts={{
          email: "jcoquintas@gmail.com",
          phone: "+351 919 581 374",
          linkedIn: "https://www.linkedin.com/in/jo%C3%A3o-quintas-29a77696/",
          github: "https://github.com/IndieDG/jcoquintas_cv",
        }}
      />
      <Grid>
        {/* ===== EXPERIENCE ===== */}
        <Cell>
          <Title title="Experience" />
        </Cell>
        <BottomCell>
          <Description
            title="I'm João Quintas,"
            description={`
            a software engineer based in Lisbon but available for some long term travel if necessary.
            I consider myself a fast learner and a good team player.
            `}
          />
        </BottomCell>

        {/* ===== EQUAL EXPERTS ===== */}
        <Cell>
          <Experience
            title="Software Engineer"
            description={[
              "Micro-services architecture and development",
              "Breaking down big monolithic codebases into micro-service based architectures",
              "Coach Extreme Programming technics such as Pair Programming and Test Driven Development",
            ]}
            start="Fev 2019"
            end="Present"
          />
        </Cell>
        <BottomCell>
          <Institution
            name="Equal Experts"
            logo="images/equalexperts.png"
            link="https://www.equalexperts.com/"
          />
        </BottomCell>

        {/* ===== TUGA SAUCE ===== */}
        <Cell>
          <Institution
            name="Tuga Sauce"
            logo="images/tugasauce.png"
            link="https://www.facebook.com/tugasauce/"
          />
        </Cell>
        <BottomCell>
          <Experience
            title="Owner and Co-Founder"
            description={[
              "E-Liquid production",
              "Stock management",
              "Financial management",
              "Public relations",
              "Marketing",
              "Flavour researcher",
            ]}
            start="Sept 2015"
            end="Mar 2019"
            theme={Theme.Light}
          />
        </BottomCell>

        {/* ===== GMV ===== */}
        <Cell>
          <Experience
            title="Aerospace Software Engineer"
            description={[
              "Developed a DO-178C (DAL-A) Real Time Operating System for aircrafts",
              "Developed any necessary code, testing and documentation for different types of CPU architectures",
              "Developed an Ethernet eTSEC driver for powerpc p1010",
            ]}
            start="Jun 2016"
            end="Feb 2019"
          />
        </Cell>
        <BottomCell>
          <Institution
            name="GMV"
            logo="images/gmv.jpg"
            link="https://www.gmv.com/en/"
          />
        </BottomCell>

        {/* ===== CYCLOID ===== */}
        <Cell>
          <Institution
            name="Cycloid"
            logo="images/cycloid.png"
            link="https://cycloid.pt/"
          />
        </Cell>
        <BottomCell>
          <Experience
            title="Android Developer"
            description={[
              "Developed OTT television solutions for Vodafone international",
              "Developed TV Net Voz Android App",
              "Developed TV Net Voz Tablet App",
              "Developed TV Net Voz Android Tv App",
              "Developed proof of concepts with TDT and eMBMs technology",
            ]}
            start="Sept 2015"
            end="Mar 2019"
            theme={Theme.Light}
          />
        </BottomCell>

        {/* ===== Collab ===== */}
        <Cell>
          <Experience
            title="Software Engineer"
            description={[
              "Development of a Web Portal to sell, rent, and configure a complete Contact Center and PBX system",
            ]}
            start="Jun 2016"
            end="Feb 2019"
          />
        </Cell>
        <BottomCell>
          <Institution
            name="Collab"
            logo="images/collab.png"
            link="https://www.collab.com/pt-br/"
          />
        </BottomCell>

        {/* ===== SKILLS ===== */}
        <Cell>
          <Title title="Skills" />
        </Cell>
        <BottomCell>
          <Skills skills={[{ name: "Back End", level: 4 }]} />
          <Skills skills={[{ name: "Front End", level: 3 }]} />
          <Skills skills={[{ name: "Embedded", level: 4 }]} />
          <Skills skills={[{ name: "Mobile", level: 3 }]} />
        </BottomCell>

        {/* ===== EDUCATION ===== */}
        <Cell>
          <Description
            title="Software Engineering"
            description={`
            Graduated Instituto Superior Técnico with a Master's 
            degree in software engineering. 
            Majored in embedded systems and IoT with a minor in UI/UX.`}
          />
        </Cell>
        <BottomCell>
          <Title title="Education" />
        </BottomCell>

        {/* ===== IST MASTER'S ===== */}
        <Cell>
          <Institution
            name="IST"
            logo="images/ist.png"
            link="https://tecnico.ulisboa.pt/pt/"
          />
        </Cell>
        <BottomCell>
          <Experience
            title="Master's Degree"
            description={[
              "Thesis: MIPSter32 - A 32 bit MIPS Simulator",
              "Embedded Systems as Major",
              "UI/UX multimedia as Minor",
              "Focus on architecture for embedded computing, mobile computation, and digital Signal processing",
            ]}
            start="Sept 2013 "
            end="June 2016"
          />
        </BottomCell>
        {/* ===== IST BACHELOR ===== */}
        <Cell>
          <Experience
            title="Bachelor's Degree"
            description={[
              "Focus on  algorithms, data strutures, computer architecture, signal processing, operating systems, compilers, object oriented programming, and graphic development",
              "Did two extra curricular summer internships at iTdS and Collab",
            ]}
            start="Sept 2007"
            end="July 2011"
          />
        </Cell>
        <Cell>
          <Institution
            name="IST"
            logo="images/ist.png"
            link="https://tecnico.ulisboa.pt/pt/"
          />
        </Cell>
      </Grid>
    </>
  );
}

export default App;
