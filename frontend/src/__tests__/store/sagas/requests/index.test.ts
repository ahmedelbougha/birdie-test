import axios from "axios";
import { apiRequest } from "../../../../store/sagas/requests";

jest.mock("axios");

describe("API Requests", () => {
  it("Should pass correct paths to API requests", async () => {
    const path = "some-path";
    await apiRequest(path);

    expect(axios.request).toBeCalledTimes(1);
    expect(axios.request).toBeCalledWith({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/${path}`,
    });
  });

  it("Should throw error if no path", async () => {
    expect(() => apiRequest("")).toThrow("Request path cannot be empty!");
  });
});
