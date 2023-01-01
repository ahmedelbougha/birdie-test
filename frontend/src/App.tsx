import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spinner } from "./components";
import { DashboardPage, ErrorPage, HomePage } from "./pages";
import { RootState } from "./store";

// create the app routes
const router = createBrowserRouter([
  {
    // root of the router and default error element to catch any errors
    path: "/",
    errorElement: <ErrorPage errorStatus={true} />,
    children: [
      {
        // home page
        index: true,
        element: <HomePage />,
      },
      {
        // dashboard page
        path: "/dashboard/:recipientId",
        element: <DashboardPage />,
      },
      {
        // error page for any non existing path
        path: "*",
        element: <ErrorPage errorStatus={true} />,
      },
    ],
  },
]);

function App() {
  const { loading, error, errorStatus } = useSelector(
    (
      state: RootState
    ): { error: unknown; errorStatus: boolean; loading: number } => {
      // get errors
      const error = state.general.error;
      // get loading status
      const loading = state.general.loading;
      return { ...error, loading };
    }
  );

  if (errorStatus) {
    return <ErrorPage error={error} errorStatus={errorStatus} />;
  }

  if (loading > 0) {
    return <Spinner />;
  }

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
}

export default App;
