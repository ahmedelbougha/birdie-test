import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CardProps, StyledCard, StyledCardDivider } from './';

/**
 * Card component for the care recipient to be displayed in the home page
 * @param CardProps
 * @returns JSX.Element
 */
export function Card({
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
