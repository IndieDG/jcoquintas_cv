import React from "react";
import "./App.css";
import { Grid, Cell } from "./components/styled";
import { Experience, Theme } from "./components/experience";
import { Company } from "./components/company";

function App() {
  return (
    <Grid>
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
          start="Fev 2019"
          end="Present"
          theme={Theme.Light}
        />
      </Cell>
    </Grid>
  );
}

export default App;
