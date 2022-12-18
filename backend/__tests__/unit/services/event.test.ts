import { Sequelize } from "sequelize";
import eventService from "../../../src/services/event";
import Event from "../../../src/models/event";

const fetchEventsReturn = {
  rows: [
    {
      id: "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
      care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
      event_type: "fluid_intake_observation",
      payload: {
        id: "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
        fluid: "caffeinated",
        observed: false,
        visit_id: "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
        timestamp: "2019-04-26T07:08:21.758Z",
        event_type: "fluid_intake_observation",
        caregiver_id: "220d9432-b5ed-4c81-8709-434899d2cd1b",
        care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
        consumed_volume_ml: 230,
      },
    } as Event,
  ],
  count: expect.any(Number),
};

const fetchRecipientReturn = [
  {
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
  } as Event,
];
describe("Event Service 'services/event.ts'", () => {
  it("Should test the defaults fetchEvents (offset = 0, limit = 100, where = {}) with return", async () => {
    const findAndCountAll = jest
      .spyOn(Event, "findAndCountAll")
      .mockResolvedValue(Promise.resolve(fetchEventsReturn));
    const events = await eventService.fetchEvents(0, 100);
    expect(findAndCountAll).toHaveBeenCalledTimes(1);
    expect(findAndCountAll).toBeCalledWith(
      expect.objectContaining({
        offset: 0,
        limit: 100,
        where: {},
      })
    );
    expect(events).toEqual({
      events: fetchEventsReturn.rows,
      count: fetchEventsReturn.count,
    });
  });

  it("Should test the defaults fetchRecipients (offset = 0, limit = 100, attributes = [...]) with return", async () => {
    const findAll = jest
      .spyOn(Event, "findAll")
      .mockResolvedValue(Promise.resolve(fetchRecipientReturn));
    const events = await eventService.fetchRecipients(0, 100);
    expect(findAll).toHaveBeenCalledTimes(1);
    expect(findAll).toBeCalledWith(
      expect.objectContaining({
        offset: 0,
        limit: 100,
        attributes: [
          [
            Sequelize.fn("DISTINCT", Sequelize.col("care_recipient_id")),
            "care_recipient_id",
          ],
        ],
      })
    );
    expect(events).toEqual({
      recipients: fetchRecipientReturn,
    });
  });
});
