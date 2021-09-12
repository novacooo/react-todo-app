import TopBar from 'components/organisms/TopBar/TopBar';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
`;

const Header = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.MAIN};
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  font-size: 600;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const LoginPage = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Container>
        <Header>LoginPage</Header>
        <StyledLink to={routes.home}>{'<'}- Home</StyledLink>
      </Container>
    </>
  );
};

export default LoginPage;
