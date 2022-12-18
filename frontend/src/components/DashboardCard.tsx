import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledDashboardCard } from './styles/Card.styled';
import { CardProps } from './Card.d';

export default function DashboardCard({ title, image }: CardProps) {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledDashboardCard>
      <div>
        <img src={image || themeContext.placeHolderImage} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </StyledDashboardCard>
  );
}
