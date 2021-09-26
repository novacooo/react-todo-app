import React from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import {
  BP_MOBILE_MAX,
  BP_TABLET_MAX,
  BP_TABLET_MIN,
  MARGIN_SIDE_DESKTOP,
  MARGIN_SIDE_MOBILE,
  MARGIN_SIDE_TABLET,
} from 'app_constants';
import BackgroundPattern from 'components/molecules/BackgroundPattern/BackgroundPattern';

interface IPageTemplateProps {
  children: JSX.Element;
  showPattern?: boolean;
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

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 0 ${MARGIN_SIDE_TABLET};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 0 ${MARGIN_SIDE_MOBILE};
  }
`;

const PageTemplate = ({ children, showPattern }: IPageTemplateProps): JSX.Element => (
  <MainContainer>
    <ContentContainer>{children}</ContentContainer>
    {showPattern && <BackgroundPattern />}
    <Footer />
  </MainContainer>
);

export default PageTemplate;
