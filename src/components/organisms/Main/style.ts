import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-rows: 100%;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
`;
