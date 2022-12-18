import renderer from 'react-test-renderer';
import { CardProps } from '../../components/Card.d';
import { Button } from '../../components/styles/Button.styled';
import Card from '../../components/Card';
import { theme } from '../../utils/constants';
import { ThemeProvider } from 'styled-components';

const cardProps: CardProps = {
  title: 'Test Card',
  image: '',
  children: (
    <>
      <p>Birdie Client</p>
      <Button> Details </Button>
    </>
  ),
};

describe('Card', () => {
  it('renders', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card {...cardProps} />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
