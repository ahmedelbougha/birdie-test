import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import { HomePage } from "../../pages";
import { theme } from "../../utils/constants";

const router = createBrowserRouter([
  {
    // home page
    path: "/",
    element: <HomePage />,
  },
]);

const mockStore = configureStore([]);

describe("Home Page", () => {
  let testStore: any;

  beforeEach(() => {
    testStore = mockStore({
      recipients: {
        list: null,
        summaryRecipient: null,
        eventsRecipient: null,
      },
    });
  });

  it("Home page in initial state", () => {

    const component = renderer.create(
      <Provider store={testStore}>
        <RouterProvider router={router} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Home page after loading recipients", () => {
    testStore = mockStore({
      recipients: {
        data: [
          {
            recipientId: "df50cac5-293c-490d-a06c-ee26796f850d",
          },
        ],
      },
    });
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
