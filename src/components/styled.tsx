import styled from "styled-components";

export const defaultFont = "Roboto";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 3rem;
`;
