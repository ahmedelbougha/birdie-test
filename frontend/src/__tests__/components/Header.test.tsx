import renderer from 'react-test-renderer';
import { theme } from '../../utils/constants';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
