import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer';
import { theme } from '../../utils/constants';

describe('Footer', () => {
  it('renders', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
