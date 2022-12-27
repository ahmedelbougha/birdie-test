import {
  StyledHeader,
  StyledHeaderLogo,
  StyledNav
} from '.';
import { Container } from '../styles/Container.styled';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledHeaderLogo src="/images/birdie-logo.svg" width="110" />
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}
