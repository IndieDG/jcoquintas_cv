import styled from "styled-components";

const size = {
  mobile: "375px",
  tablet: "768px",
  pc: "1024px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

export const defaultFont = "Roboto Mono";
// export const defaultFont = "monospace";

export const Grid = styled.div`
  display: grid;
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding: 0px 10px 0px 10px;
  }
  @media ${device.pc} {
    grid-template-columns: 1fr 1fr;
    padding: 0px 50px 0px 50px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding: 0px 50px 0px 50px;
  }
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 3rem;
`;

export const BottomCell = styled(Cell)`
  @media ${device.pc} {
    margin-bottom: 0px;
  }
  @media ${device.mobile} {
    margin-bottom: 25px;
  }
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;
