import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner";
import { DashboardPage, ErrorPage, HomePage } from "./pages";
import { RootState } from "./store";

const router = createBrowserRouter([
  {
    // error page for any non existing page
    path: "*",
    element: <ErrorPage errorStatus={true} />,
  },
  {
    // home page
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage errorStatus={true} />,
  },
  {
    // dashboard page
    path: "/dashboard/:recipientId",
    element: <DashboardPage />,
    errorElement: <ErrorPage errorStatus={true} />,
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
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </>
  );
}

export default App;
