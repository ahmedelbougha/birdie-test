export interface CareRecipient {
  recipientId: string;
}


export interface Event {
  id: string;
  care_recipient_id: string;
  event_type: string;
  timestamp: string;
  payload: {
    [key: string]: unknown;
  };
}
