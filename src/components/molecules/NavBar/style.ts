import styled from "styled-components";

export const StyledNavbar = styled.nav`
  color: ${({ theme }) => theme.font.colors.text};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: 1.1rem;
  a {
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:before {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 0;
    height: 7px;
    z-index: -1;
    border-radius: 0.6rem;
    position: absolute;
    top: 15px;
    left: -9px;
    transition: ${({ theme }) => theme.transitions.time};
  }
  a:hover:before {
    width: 100%;
  }
`;
