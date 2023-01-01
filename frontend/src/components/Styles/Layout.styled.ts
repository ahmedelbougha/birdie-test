import styled from 'styled-components';
import { ThemeProps } from "../../types";

export const Layout = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;

  & > * {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;
