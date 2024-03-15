export interface FulfillmentGenericWebService {
  // The password for HTTP Basic authentication.
  Password?: string;

  // The HTTP request headers to send together with fulfillment requests.
  RequestHeaders?: Map<string, string>;

  // The fulfillment URI for receiving POST requests. It must use https protocol.
  Uri?: string;

  // The user name for HTTP Basic authentication.
  Username?: string;
}
