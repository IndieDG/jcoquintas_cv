import styled from "styled-components";

export const defaultFont = "monospace";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 50px 0px 50px;
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 3rem;
`;
