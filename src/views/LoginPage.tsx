import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Input from 'components/atoms/Input/Input';

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

const StyledInput = styled(Input)`
  margin-top: 50px;
  width: 400px;
`;

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <StyledAppLogo />
        <StyledLink to={routes.home}>
          <StyledButton>Go to HomePage</StyledButton>
        </StyledLink>
        <StyledInput icon={ClockIcon} placeholder="Username" />
      </Container>
    </PageTemplate>
  );
};

export default LoginPage;
