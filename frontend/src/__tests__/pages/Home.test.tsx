import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/constants';
import HomePage from '../../pages/Home';

const router = createBrowserRouter([
  {
    // home page
    path: '/',
    element: <HomePage />,
  },
]);

const mockStore = configureStore([]);

describe('Home Page', () => {
  let testStore: any;

  beforeEach(() => {
    testStore = mockStore({
      recipients: {
        data: [
          {
            care_recipient_id: 'df50cac5-293c-490d-a06c-ee26796f850d',
          },
          {
            care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227',
          },
          {
            care_recipient_id: 'ad3512a6-91b1-4d7d-a005-6f8764dd0111',
          },
        ],
      },
    });
  });

  it('Home page in initial state', () => {
    testStore = mockStore({
      recipients: {
        data: [],
        summaryRecipient: {},
        eventsRecipient: [],
      },
    });
    const component = renderer.create(
      <Provider store={testStore}>
        <RouterProvider router={router} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home page after loading recipients', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Provider store={testStore}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
