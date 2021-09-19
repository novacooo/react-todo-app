import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg';
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

const InputsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
`;

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <StyledAppLogo />
        <InputsContainer>
          <Input icon={EmailIcon} placeholder="Email address" />
          <Input icon={LockIcon} placeholder="Password" />
        </InputsContainer>
        <StyledLink to={routes.home}>
          <StyledButton>Go to HomePage</StyledButton>
        </StyledLink>
      </Container>
    </PageTemplate>
  );
};

export default LoginPage;
