import app from "../../src/application";
import * as request from "supertest";

describe("Test error controller actions", () => {
  it("Should test a non existing path /not-exist should return 404 with message", async () => {
    await request(app)
      .get("/not-exist")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect(function (res) {
        expect(res.body.error).toBe("Not found");
      });
  });

  it("Should test an existing path /not-exist should return any non 404", async () => {
    await request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        console.log(res.statusCode);
        expect(res.statusCode).not.toBe(404);
      });
  });
});
