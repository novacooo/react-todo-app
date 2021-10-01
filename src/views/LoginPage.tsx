import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Input from 'components/atoms/Input/Input';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import LoginHeader from 'components/atoms/LoginHeader/LoginHeader';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ParapraphLink from 'components/atoms/ParapraphLink/ParapraphLink';
import ThemeButton from 'components/molecules/ThemeButton/ThemeButton';
import ModeButton from 'components/molecules/ModeButton/ModeButton';
import { StateType } from 'state';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 80px;
  padding: 120px 0;
  width: 100%;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    gap: 60px;
    padding: 100px 0;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 40px;
    padding: 50px 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 35px;
  right: 0;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: 20px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    display: none;
  }
`;

const StyledAppLogo = styled(AppLogo)`
  width: 210px;
  height: auto;
  fill: ${({ theme }) => theme.MAIN};

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    width: 180px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    width: 140px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 400px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledCheckBox = styled(CheckBox)`
  align-self: flex-start;
  margin-left: 10px;
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

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LoginPage = (): JSX.Element => {
  const theme = useSelector((state: StateType) => state.theme);

  return (
    <PageTemplate showPattern>
      <Container>
        <ButtonsContainer>
          <ThemeButton hoverBackground={theme.BG_HOVER} iconColor={theme.ICON_SECONDARY} />
          <ModeButton hoverBackground={theme.BG_HOVER} iconColor={theme.ICON_SECONDARY} />
        </ButtonsContainer>
        <StyledAppLogo />
        <FormContainer>
          <LoginHeader>Sign In</LoginHeader>
          <InputsContainer>
            <Input icon={EmailIcon} placeholder="Email address" />
            <Input type="password" icon={LockIcon} placeholder="Password" />
          </InputsContainer>
          <StyledCheckBox text="Remember me" />
          <StyledLink to={routes.home}>
            <StyledButton icon={ArrowRightIcon}>Login</StyledButton>
          </StyledLink>
        </FormContainer>
        <RegisterContainer>
          <Paragraph>Don’t have an account?</Paragraph>
          <ParapraphLink to={routes.home}>Register</ParapraphLink>
        </RegisterContainer>
      </Container>
    </PageTemplate>
  );
};

export default LoginPage;
