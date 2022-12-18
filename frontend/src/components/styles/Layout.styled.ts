import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  & > * {
    padding: 20px;
  }
`;
