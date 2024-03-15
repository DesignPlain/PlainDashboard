export interface ServiceConnectionPolicyPscConnectionError {
  // The status code, which should be an enum value of [google.rpc.Code][].
  Code?: number;

  /*
(Output)
A list of messages that carry the error details.
*/
  Details?: Array<Map<string, string>>;

  // A developer-facing error message.
  Message?: string;
}
