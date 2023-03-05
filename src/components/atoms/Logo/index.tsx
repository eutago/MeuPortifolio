import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { TitleLogo } from "./style";

export const Logo = () => {
  useEffect(() => {
    const sr = ScrollReveal({ duration: 2500, distance: "30px" });

    sr.reveal(".logo", { origin: "bottom", delay: 600 });
  }, []);

  return (
    <TitleLogo className='logo'>
      tago<span>Code</span>
    </TitleLogo>
  );
};
