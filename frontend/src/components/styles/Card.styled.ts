import styled from 'styled-components';
import { ThemeProps } from '../../types';

export const StyledCardDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #00264d;
`;

export const StyledCard = styled.div<ThemeProps>`
  display: flex;
  width: 20%;
  max-width: 30%;
  min-width: 225px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card.backgroundColor}};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px;
  padding-bottom: 10px;
  flex-direction: column;


  img {
    width: 100%;
    border-radius: 5px;
  }
  h2 {
    width: 100%;
  }
  & > div:first-child {
    flex: 1;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const StyledDashboardCard = styled.div`
  width: 17%;
  background-color: transparent;
  border-radius: 70%;
  margin: 10px 20px;

  img {
    width: 100%;
    border-radius: 50%;
  }

  & > div {
    flex: 1;
    text-align: center;
  }
`;
