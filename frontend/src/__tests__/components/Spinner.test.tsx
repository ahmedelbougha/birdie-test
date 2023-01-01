import renderer from 'react-test-renderer';
import { Spinner } from '../../components';

describe('Spinner', () => {
  it('renders', () => {
    const component = renderer.create(<Spinner />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
