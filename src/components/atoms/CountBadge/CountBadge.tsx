import { BP_MOBILE_MAX } from 'app_constants';
import React from 'react';
import styled from 'styled-components';
import SmallHeader from '../SmallHeader/SmallHeader';

interface ICountBadgeProps {
  count: number;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: ${({ theme }) => theme.BG_BADGE};

  @media (max-width: ${BP_MOBILE_MAX}) {
    width: 32px;
    height: 32px;
  }
`;

const StyledSmallHeader = styled(SmallHeader)`
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const CountBadge = ({ count }: ICountBadgeProps): JSX.Element => (
  <StyledContainer>
    <StyledSmallHeader>{count}</StyledSmallHeader>
  </StyledContainer>
);

export default CountBadge;
