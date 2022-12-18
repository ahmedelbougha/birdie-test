import renderer from 'react-test-renderer';
import { CardProps } from '../../components/Card.d';
import { theme } from '../../utils/constants';
import { ThemeProvider } from 'styled-components';
import DashboardCard from '../../components/DashboardCard';

const cardProps: CardProps = {
  title: 'Test Dashboard Card',
  image: '',
};

describe('DashboardCard', () => {
  it('renders', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <DashboardCard {...cardProps} />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
