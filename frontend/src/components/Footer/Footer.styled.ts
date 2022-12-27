import styled from 'styled-components';
import { ThemeProps, ImageProps } from '../../types';

export const StyledFooter = styled.footer<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.footer.backgroundColor};
  color: ${({ theme }) => theme.colors.footer.color};
  padding: 20px 0;
  margin-top: auto;
  align-self: flex-bottom;
`;

export const StyledFooterLogo = styled.img<ImageProps>`
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
`;
