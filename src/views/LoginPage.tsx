import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledAppLogo = styled(AppLogo)`
  margin-top: 160px;
  width: 180px;
  height: auto;
  fill: ${({ theme }) => theme.MAIN};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  margin-top: 70px;
`;

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <StyledAppLogo />
        <StyledLink to={routes.home}>
          <StyledButton>Go to HomePage</StyledButton>
        </StyledLink>
      </Container>
    </PageTemplate>
  );
};

export default LoginPage;
