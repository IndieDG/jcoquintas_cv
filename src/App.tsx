import React from "react";
import "./App.css";
import { Grid, Cell } from "./components/styled";
import { Experience, Theme } from "./components/experience";
import { Company } from "./components/company";
import { Banner } from "./components/banner";
import { Title } from "./components/title";
import { About } from "./components/about";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <Banner
        name="João Quintas"
        profile="images/profile.jpg"
        email="jcoquintas@gmail.com"
        phone="+351 919 581 374"
      />
      <Grid>
        {/* ===== EXPERIENCE ===== */}
        <Cell>
          <Title title="Experience" />
        </Cell>
        <Cell>
          <About
            name="João Quintas"
            description="some long description long description long description long description long description long description long description"
          />
        </Cell>

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
        <Cell>
          <Company name="Equal Experts" logo="images/equalexperts.png" />
        </Cell>

        {/* ===== TUGA SAUCE ===== */}
        <Cell>
          <Company name="Tuga Sauce" logo="images/tugasauce.png" />
        </Cell>
        <Cell>
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
        </Cell>

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
        <Cell>
          <Company name="GMV" logo="images/gmv.jpg" />
        </Cell>

        {/* ===== CYCLOID ===== */}
        <Cell>
          <Company name="Cycloid" logo="images/cycloid.png" />
        </Cell>
        <Cell>
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
        </Cell>

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
        <Cell>
          <Company name="Collab" logo="images/collab.png" />
        </Cell>

        {/* ===== SKILLS ===== */}
        <Cell>
          <Title title="Skills" />
        </Cell>
        <Cell>
          <Skills skills={[{ name: "Back End", level: 4 }]} />
          <Skills skills={[{ name: "Front End", level: 3 }]} />
          <Skills skills={[{ name: "Embedded", level: 4 }]} />
          <Skills skills={[{ name: "Mobile", level: 3 }]} />
        </Cell>
      </Grid>
    </>
  );
}

export default App;
