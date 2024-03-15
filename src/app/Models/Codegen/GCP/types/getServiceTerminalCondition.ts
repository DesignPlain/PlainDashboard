export interface getServiceTerminalCondition {
  // A reason for the execution condition.
  ExecutionReason?: string;

  // Last time the condition transitioned from one status to another.
  LastTransitionTime?: string;

  // Human readable message indicating details about the current status.
  Message?: string;

  // A common (service-level) reason for this condition.
  Reason?: string;

  // A reason for the revision condition.
  RevisionReason?: string;

  // How to interpret failures of this condition, one of Error, Warning, Info
  Severity?: string;

  // State of the condition.
  State?: string;

  // type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: - "Ready": True when the Resource is ready.
  Type?: string;
}
