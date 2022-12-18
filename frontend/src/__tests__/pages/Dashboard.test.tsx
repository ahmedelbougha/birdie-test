import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/constants';
import DashboardPage from '../../pages/Dashboard';

const router = createBrowserRouter([
  {
    // dashboard page
    path: '/',
    element: <DashboardPage />,
  },
]);

const mockStore = configureStore([]);

describe('Dashboard Page', () => {
  let testStore: any;

  beforeEach(() => {
    testStore = mockStore({
      recipients: {
        summaryRecipient: {
          care_recipient_id: 'some-recipient-id',
          recipient_summary: {
            alert_qualified: '5',
            catheter_observation: '12',
            medication_schedule_created: '10',
          },
        },
        eventsRecipient: [
          {
            id: 'some-event-id',
            care_recipient_id: 'some-recipient-id',
            event_type: 'task_completed',
            timestamp: '2019-05-12T18:54:09.116Z',
            payload: {
              id: 'some-event-id',
              visit_id: 'some-visit-id',
              timestamp: '2019-05-12T18:54:09.116Z',
              event_type: 'task_completed',
              caregiver_id: 'some-giver-id',
              task_instance_id: 'some-instance-id',
              task_schedule_id: 'scheduled-id',
              care_recipient_id: 'some-recipient-id',
              task_definition_id: 'task-definition-id',
              task_schedule_note: 'some note goes here!',
              task_definition_description: 'some description goes here!',
            },
          },
        ],
      },
    });
  });

  it('Dashboard page in initial state', () => {
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

  it("Dashboard page after loading recipient's data", () => {
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
