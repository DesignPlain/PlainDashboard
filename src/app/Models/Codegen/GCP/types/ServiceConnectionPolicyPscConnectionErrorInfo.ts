export interface ServiceConnectionPolicyPscConnectionErrorInfo {
  // The logical grouping to which the "reason" belongs.
  Domain?: string;

  // Additional structured details about this error.
  Metadata?: Map<string, string>;

  // The reason of the error.
  Reason?: string;
}
