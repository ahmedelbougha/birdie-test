import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CardProps, StyledDashboardCard } from '.';

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
