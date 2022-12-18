export interface CareRecipient {
  care_recipient_id: string;
}

export interface Recipients {
  recipients: CareRecipient[];
}

export interface CareRecipientSummary {
  [key: string]: string;
}

export interface Summary {
  care_recipient_id: string;
  recipient_summary: CareRecipientSummary;
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
