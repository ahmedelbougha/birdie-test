import { StyledFooter, StyledFooterLogo } from '.';
import { Container } from '../styles';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterLogo src="/images/birdie-logo.svg" width="110" />
      </Container>
    </StyledFooter>
  );
}
