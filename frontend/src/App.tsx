import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import Spinner from './components/Spinner';
import ErrorPage from './pages/Error';
import { RootState } from './store/index';

const router = createBrowserRouter([
  {
    // error page for any non existing page
    path: '*',
    element: <ErrorPage errorStatus={true} />,
  },
  {
    // home page
    path: '/',
    element: <HomePage />,
  },
  {
    // dashboard page
    path: '/dashboard/:recipientId',
    element: <DashboardPage />,
  },
]);

function App() {
  const { loading, error, errorStatus } = useSelector(
    (
      state: RootState
    ): { error: unknown; errorStatus: boolean; loading: boolean } => {
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
  return (
    <>
      {!!loading && <Spinner />}

      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </>
  );
}

export default App;
