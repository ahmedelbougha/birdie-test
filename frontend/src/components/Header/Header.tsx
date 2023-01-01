import { Container } from '../';
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledNav
} from './';

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
