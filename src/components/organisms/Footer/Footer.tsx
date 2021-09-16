import { MARGIN_SIDE_DESKTOP } from 'app_constants';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 30px ${MARGIN_SIDE_DESKTOP};
  width: 100%;
  background-color: ${({ theme }) => theme.MAIN};
  border-top: 2px solid ${({ theme }) => theme.MAIN_BORDER};
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <p>footer</p>
    </StyledFooter>
  );
};

export default Footer;
