import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { TRANSITION_TIME } from 'app_constants';

interface IParagraphLink {
  children: string;
  to: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.MAIN};
  transition: color ${TRANSITION_TIME};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.MAIN_HOVER};
  }
`;

const ParapraphLink = ({ children, to }: IParagraphLink): JSX.Element => (
  <StyledLink to={to}>
    <StyledParagraph>{children}</StyledParagraph>
  </StyledLink>
);

export default ParapraphLink;
