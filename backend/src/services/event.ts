import { Sequelize } from "sequelize";
import ApiError from "../exceptions/apiError";
import Event from "../models/event";
import { RecipientSummary, Status } from "../types";

/**
 * Fetching array of events with their counts
 *
 * @param {number} offset
 * @param {number} limit
 * @param {string} [recipientId]
 */
const fetchEvents = async (
  offset = 0,
  limit = 100,
  recipientId?: string
): Promise<{ events: Event[]; count: number }> => {
  const { rows, count } = await Event.findAndCountAll({
    offset,
    limit,
    // assigning empty "where" object in case there's no recipientId
    where: { ...(recipientId && { care_recipient_id: recipientId }) },
    order: [["timeStamp", "DESC"]],
  });

  // passing 404 in case no records found
  if (count === 0) {
    throw new ApiError(Status.NOT_FOUND_MESSAGE, Status.NOT_FOUND_CODE);
  }

  return { events: rows, count };
};

/**
 * Fetching array of recipient with their counts
 *
 * @param {number} offset
 * @param {number} limit
 */
const fetchRecipients = async (
  offset = 0,
  limit = 100
): Promise<{ recipients: Event[] }> => {
  const rows = await Event.findAll({
    attributes: [
      [
        Sequelize.fn("DISTINCT", Sequelize.col("care_recipient_id")),
        "care_recipient_id",
      ],
    ],
    offset,
    limit,
  });
  return { recipients: rows };
};

/**
 * Fetching summary of recipient's events with their counts
 *
 * @param {string} recipientId
 */
const fetchRecipientSummary = async (
  recipientId: string
): Promise<{
  care_recipient_id: string;
  recipient_summary: RecipientSummary;
}> => {
  const rows = await Event.findAll({
    attributes: [
      "event_type",
      [Sequelize.fn("Count", Sequelize.col("event_type")), "event_type_count"],
    ],
    group: ["care_recipient_id", "event_type"],
    having: { care_recipient_id: recipientId },
  });

  // passing 404 in case no records found
  if (rows.length === 0) {
    throw new ApiError(Status.NOT_FOUND_MESSAGE, Status.NOT_FOUND_CODE);
  }

  const recipientSummary = <{ event_type: string; event_type_count: number }[]>(
    (<unknown>rows.map((row) => ({ ...row.dataValues })))
  );
  // flattening the recipient_summary: restructuring the data for better consumption
  // converting
  // [{event_type: "a", event_type_count: 1}, {event_type: "b", event_type_count: 3}]
  // to {a: 1, b: 3}
  const flattenedRecipientSummary = recipientSummary.reduce(
    (obj, item) =>
      Object.assign(obj, { [item.event_type]: item.event_type_count }),
    {}
  );

  return {
    care_recipient_id: recipientId,
    recipient_summary: flattenedRecipientSummary,
  };
};

export default { fetchEvents, fetchRecipients, fetchRecipientSummary };
