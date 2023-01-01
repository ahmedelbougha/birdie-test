export interface Error {
  errorStatus: boolean;
  error?: unknown;
}

export interface GeneralProps {
  backgroundColor?: string;
  color?: string;
  layout?: string;
}

export interface Params {
  recipientId: string;
  type: string;
}
