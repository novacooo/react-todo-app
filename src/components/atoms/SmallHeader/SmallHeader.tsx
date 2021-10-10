import { BP_MOBILE_MAX } from 'app_constants';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

const SmallHeader = styled.h2`
  font-size: ${fontSettings.sizesDesktop.l};
  font-weight: ${fontSettings.weights.semiBold};
  color: ${({ theme }) => theme.TEXT_PRIMARY};

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.l};
  }
`;

export default SmallHeader;
