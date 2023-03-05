import React, { useEffect } from "react";
import { FlexBox } from "../../../styles/";
import { NavItem } from "../../atoms/NavItem";
import ScrollReveal from "scrollreveal";
import { StyledNavbar } from "./style";

export const Navbar = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      origin: "top"
    });

    sr.reveal(".home", {
      delay: 500
    });
    sr.reveal(".about", {
      delay: 600
    });
    sr.reveal(".abilities", {
      delay: 700
    });
    sr.reveal(".contact", {
      delay: 800
    });
  }, []);

  return (
    <StyledNavbar className='navbar'>
      <FlexBox align='center' justify='center' gap='lg' direction='row'>
        <NavItem className='home' text='Iniciar' to='home' />
        <NavItem className='about' text='Quem sou' to='about' />
        <NavItem className='abilities' text='Habilidades' to='abilities' />
        <NavItem className='contact' text='Contato' to='contact' />
      </FlexBox>
    </StyledNavbar>
  );
};
