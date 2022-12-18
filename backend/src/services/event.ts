import { Sequelize } from "sequelize";
import Event from "../models/event";

type recipientSummary = {
  event_type: string;
  event_type_count: number;
};

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
    // assigning empty where object in case there's no recipientId
    where: { ...(recipientId && { care_recipient_id: recipientId }) },
    order: [["timeStamp", "DESC"]],
  });
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
  recipient_summary: recipientSummary[];
}> => {
  const rows = await Event.findAll({
    attributes: [
      "event_type",
      [Sequelize.fn("Count", Sequelize.col("event_type")), "event_type_count"],
    ],
    group: ["care_recipient_id", "event_type"],
    having: { care_recipient_id: recipientId },
  });

  const recipientSummary = <recipientSummary[]>(
    (<unknown>rows.map((row) => ({ ...row.dataValues })))
  );

  return {
    care_recipient_id: recipientId,
    recipient_summary: recipientSummary,
  };
};

export default { fetchEvents, fetchRecipients, fetchRecipientSummary };
