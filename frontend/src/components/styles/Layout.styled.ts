import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;

  & > * {
    padding: 20px;
  }
`;
