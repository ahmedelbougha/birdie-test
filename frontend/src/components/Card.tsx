import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCard, StyledCardDivider } from './styles/Card.styled';
import { CardProps } from './Card.d';

/**
 * Card component for the care recipient to be displayed in the home page
 * @param CardProps
 * @returns JSX.Element
 */
export default function Card({
  title,
  image,
  children,
}: CardProps): JSX.Element {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledCard>
      <div>
        <img src={image || themeContext.placeHolderImage} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <StyledCardDivider />
        {children}
      </div>
    </StyledCard>
  );
}
