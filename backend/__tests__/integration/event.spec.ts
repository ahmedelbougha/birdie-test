import * as request from "supertest";
import app from "../../src/application";

describe("Test event controller actions", () => {
  it("Get /events should return events with status 200", async () => {
    await request(app)
      .get("/events")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (res) {
        expect(res.body.data).toBeInstanceOf(Array);
      });
  });

  it("Get /events/recipient/{recipientId} should return recipient's events with status 200", async () => {
    await request(app)
      .get("/events/recipient/df50cac5-293c-490d-a06c-ee26796f850d")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (res) {
        expect(res.body.data).toBeInstanceOf(Array);
        // Ignoring this following line of type scripts checks
        // to avoid making types just for testing purpose
        // @ts-ignore
        const belongToSameRecipient = res.body.data.every(
          (event: any) =>
            event.care_recipient_id === res.body.data[0].care_recipient_id
        );
        expect(belongToSameRecipient).toEqual(true);
      });
  });

  it("Get /events/{recipientId} should return recipient's events with status 200", async () => {
    await request(app)
      .get("/events/not-found-recipient-id")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect(function (res) {
        expect(res.body.data).toBe(undefined);
        expect(res.body.message).toBe("Not Found");
      });
  });
});
