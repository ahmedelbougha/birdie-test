import { CareRecipientSummary } from '../store/reducers/recipients.d';

export interface TableProps {
  summaryTypes: CareRecipientSummary;
  eventTypes: string[][];
}
