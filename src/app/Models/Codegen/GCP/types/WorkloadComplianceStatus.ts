export interface WorkloadComplianceStatus {
  // Number of current orgPolicy violations which are acknowledged.
  AcknowledgedViolationCounts?: Array<number>;

  // Number of current orgPolicy violations which are not acknowledged.
  ActiveViolationCounts?: Array<number>;
}
