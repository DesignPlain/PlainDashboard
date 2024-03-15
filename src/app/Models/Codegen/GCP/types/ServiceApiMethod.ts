export interface ServiceApiMethod {
  // The simple name of the endpoint as described in the config.
  Name?: string;

  // The type URL for the request to this API.
  RequestType?: string;

  // The type URL for the response from this API.
  ResponseType?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  Syntax?: string;
}
