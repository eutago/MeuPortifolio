import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StyledButton, StyledText } from "../../atoms";

export const DownloadCV = () => {
  return (
    <StyledButton borderRadius='sm' buttonSize='lg'>
      <StyledText tag='span' fontWeight={600} color='white' fontSize='md'>
        <FiDownload />
      </StyledText>
      <StyledText tag='p' fontWeight={800} fontSize='sm' color='white'>
        <Link to='https://drive.google.com/file/d/1uw89Sr6gzaeJ4oxb_7qRe_HzPZJfw71Z/view?usp=sharing'>
          Download CV
        </Link>
      </StyledText>
    </StyledButton>
  );
};
