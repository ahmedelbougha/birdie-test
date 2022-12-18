import app from "../../src/application";
import * as request from "supertest";

describe("Test careRecipient controller actions", () => {
  it("Get /recipients should return recipients with status 200", async () => {
    await request(app)
      .get("/recipients")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (res) {
        expect(res.body.data).toBeInstanceOf(Array);
      });
  });
});
