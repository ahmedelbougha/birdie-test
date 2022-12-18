import Event from "../../../src/models/event";
// import { DataTypes } from "sequelize";

describe("Event model", () => {
  it("Should has the correct fields", () => {
    const fields = Event.getAttributes();
    expect(fields).toHaveProperty("id");
    expect(fields).toHaveProperty("care_recipient_id");
    expect(fields).toHaveProperty("event_type");
    expect(fields).toHaveProperty("timestamp");
    expect(fields).toHaveProperty("payload");
  });
});
