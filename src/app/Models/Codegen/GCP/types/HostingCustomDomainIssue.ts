export interface HostingCustomDomainIssue {
  // The status code, which should be an enum value of `google.rpc.Code`
  Code?: number;

  // A list of messages that carry the error details.
  Details?: string;

  // Error message
  Message?: string;
}
