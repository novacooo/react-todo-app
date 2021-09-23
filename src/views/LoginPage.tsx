import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Input from 'components/atoms/Input/Input';
import { fontSettings } from 'theme/fontSettings';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledAppLogo = styled(AppLogo)`
  margin-top: 140px;
  width: 180px;
  height: auto;
  fill: ${({ theme }) => theme.MAIN};

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    margin-top: 80px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    margin-top: 40px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 40px;
  width: 100%;
  max-width: 400px;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.MAIN};
  font-size: ${fontSettings.sizesDesktop.xl};
  font-weight: ${fontSettings.weights.semiBold};
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  align-self: center;
  width: 100%;
  max-width: 220px;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate showPattern>
      <Container>
        <StyledAppLogo />
        <FormContainer>
          <Header>Sign In</Header>
          <InputsContainer>
            <Input icon={EmailIcon} placeholder="Email address" />
            <Input type="password" icon={LockIcon} placeholder="Password" />
          </InputsContainer>
          <StyledLink to={routes.home}>
            <StyledButton icon={ArrowRightIcon}>Login</StyledButton>
          </StyledLink>
        </FormContainer>
      </Container>
    </PageTemplate>
  );
};

export default LoginPage;
