import React from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spinner } from "./components";
import { RootState } from "./store";

// lazy loading for code splitting
const DashboardPage = React.lazy(() => import("./pages/Dashboard"));
const ErrorPage = React.lazy(() => import("./pages/Error"));
const HomePage = React.lazy(() => import("./pages/Home"));


// create the app routes
const router = createBrowserRouter([
  {
    // root of the router and default error element to catch any errors
    path: "/",
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
