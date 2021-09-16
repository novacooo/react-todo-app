import React from 'react';
import styled from 'styled-components';

interface IFooterIconProps {
  icon: React.FC;
  size?: number;
}

const FooterIcon = ({ icon, size = 30 }: IFooterIconProps): JSX.Element => {
  const StyledIcon = styled(icon)`
    display: block;
    width: ${size}px;
    height: ${size}px;
    fill: ${({ theme }) => theme.MAIN_ITEMS};
  `;

  return <StyledIcon />;
};

export default FooterIcon;
