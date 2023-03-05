import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
`;

interface IDivProps {
  children: React.ReactNode;
}

export const DivTest = ({ children }: IDivProps) => {
  return <Div>{children}</Div>;
};
