import Event from '../models/event';

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
    order: [['timeStamp', 'DESC']],
  });
  return { events: rows, count };
};

export default { fetchEvents };
