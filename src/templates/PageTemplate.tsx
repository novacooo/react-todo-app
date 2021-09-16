import React from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import { MARGIN_SIDE_DESKTOP } from 'app_constants';

// TODO: Make mobile

interface IPageTemplateProps {
  children: JSX.Element;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 0 ${MARGIN_SIDE_DESKTOP};
  width: 100%;
`;

const PageTemplate = ({ children }: IPageTemplateProps): JSX.Element => (
  <MainContainer>
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </MainContainer>
);

export default PageTemplate;
