import { BP_MOBILE_MAX } from 'app_constants';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

const LoginHeader = styled.h2`
  color: ${({ theme }) => theme.MAIN};
  font-size: ${fontSettings.sizesDesktop.xl};
  font-weight: ${fontSettings.weights.semiBold};

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.xl};
  }
`;

export default LoginHeader;
