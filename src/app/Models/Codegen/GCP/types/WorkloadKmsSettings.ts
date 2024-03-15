export interface WorkloadKmsSettings {
  // Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
  NextRotationTime?: string;

  // Required. Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
  RotationPeriod?: string;
}
