import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { fontSettings } from 'theme/fontSettings';

const Container = styled.div`
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  font-size: ${fontSettings.sizesDesktop.xl};
  font-weight: ${fontSettings.weights.semiBold};
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 30px;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.medium};
`;

const DonePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <StyledHeader>DonePage</StyledHeader>
        <StyledNavLink to={routes.home}>{'<'}- HomePage</StyledNavLink>
      </Container>
    </PageTemplate>
  );
};

export default DonePage;
