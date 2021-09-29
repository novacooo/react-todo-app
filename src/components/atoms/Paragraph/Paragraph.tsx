import { BP_MOBILE_MAX } from 'app_constants';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

const Paragraph = styled.p`
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.medium};
  color: ${({ theme }) => theme.TEXT_SECONDARY};

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

export default Paragraph;
