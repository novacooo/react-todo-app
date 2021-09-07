import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from 'theme/GlobalStyle';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  color: hsl(0, 0%, 80%);
`;

const Paragraph = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: hsl(0, 0%, 60%);
`;

const Root = (): JSX.Element => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <Container>
      <Header>todo-app</Header>
      <Paragraph>app is under development</Paragraph>
    </Container>
  </>
);

export default Root;
