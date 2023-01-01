export enum Status {
  OK_CODE = 200,
  OK_MESSAGE = "OK",
  NOT_FOUND_CODE = 404,
  NOT_FOUND_MESSAGE = "Not Found",
  INTERNAL_SERVER_ERROR_CODE = 500,
  INTERNAL_SERVER_ERROR_MESSAGE = "Unexpected Error",
}

export interface RecipientSummary {
  [key: string]: number;
}
