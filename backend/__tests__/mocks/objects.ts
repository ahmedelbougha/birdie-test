import { Request, Response } from "express";

let recipientId = "some-recipient-id";
let responseObject = { statusCode: 200, body: {} };
let request: Partial<Request> = {};
let response: Partial<Response> = {};

request = {
  params: {
    recipientId,
  },
};
response = {
  status: jest.fn().mockImplementation((code: number) => {
    responseObject.statusCode = code;
    return response;
  }),
  json: jest.fn().mockImplementation((result) => {
    responseObject.body = result;
  }),
};

export default { recipientId, response, request, responseObject };
