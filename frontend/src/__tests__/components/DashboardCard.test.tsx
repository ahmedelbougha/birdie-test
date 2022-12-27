import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CardProps, DashboardCard } from '../../components/Card';
import { theme } from '../../utils/constants';

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
