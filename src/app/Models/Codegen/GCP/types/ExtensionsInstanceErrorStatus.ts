export interface ExtensionsInstanceErrorStatus {
  // The status code, which should be an enum value of google.rpc.Code.
  Code?: number;

  // A list of messages that carry the error details.
  Details?: Array<Map<string, string>>;

  // A developer-facing error message, which should be in English.
  Message?: string;
}
