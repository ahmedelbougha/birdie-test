import app from "../../src/application";
import * as request from "supertest";

describe("We are grateful to you for doing this.", () => {
  it("thanks you", async () => {
    await request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (res) {
        expect(res.body.greetings).toContain("Thank you");
        expect(res.body.routes).toBe(
          "/events, /events/[care-recipient-id], /recipients, and /recipients/[care-recipient-id]"
        );
      });
  });
});
