import { createBrowserRouter, RouterProvider } from "react-router-dom";
import renderer from "react-test-renderer";
import { ErrorPage } from "../../pages";

const router = createBrowserRouter([
  {
    // dashboard page
    path: "/",
    element: <ErrorPage errorStatus={true} />,
  },
]);

describe("Error Page", () => {
  it("renders", () => {
    const component = renderer.create(<RouterProvider router={router} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
