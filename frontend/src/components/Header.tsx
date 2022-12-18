import {
  StyledHeader,
  StyledHeaderLogo,
  StyledNav,
} from './styles/Header.styled';
import { Container } from './styles/Container.styled';

export default function Header() {
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
