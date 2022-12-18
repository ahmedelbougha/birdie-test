import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '../../types';

const GlobalStyles = createGlobalStyle<ThemeProps>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body.backgroundColor};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  p {
    opacity: 0.9;
    line-height: 1.5;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
