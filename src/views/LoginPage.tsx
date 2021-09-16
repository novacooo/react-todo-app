import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import PageTemplate from 'templates/PageTemplate';

const StyledAppLogo = styled(AppLogo)`
  width: 220px;
  height: auto;
  fill: ${({ theme }) => theme.MAIN};
`;

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <StyledAppLogo />
    </PageTemplate>
  );
};

export default LoginPage;
