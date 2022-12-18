import { Container } from './styles/Container.styled';
import { StyledFooter, StyledFooterLogo } from './styles/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterLogo src="/images/birdie-logo.svg" width="110" />
      </Container>
    </StyledFooter>
  );
}
