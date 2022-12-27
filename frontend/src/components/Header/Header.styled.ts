import styled from 'styled-components';
import { ThemeProps, ImageProps } from '../../types';

export const StyledHeader = styled.header<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.header.backgroundColor};
  color: ${({ theme }) => theme.colors.header.color};
  padding: 5px 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

export const StyledHeaderLogo = styled.img<ImageProps>`
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
`;
