import renderer from 'react-test-renderer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../../pages/Error';

const router = createBrowserRouter([
  {
    // dashboard page
    path: '/',
    element: <ErrorPage />,
  },
]);

describe('Error Page', () => {
  it('renders', () => {
    const component = renderer.create(<RouterProvider router={router} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
