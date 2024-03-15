export interface PrivateConnectionError {
  // A list of messages that carry the error details.
  Details?: Map<string, string>;

  // A message containing more information about the error that occurred.
  Message?: string;
}
