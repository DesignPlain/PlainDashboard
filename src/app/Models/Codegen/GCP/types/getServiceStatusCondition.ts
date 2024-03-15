export interface getServiceStatusCondition {
  // Human readable message indicating details about the current status.
  Message?: string;

  // One-word CamelCase reason for the condition's current status.
  Reason?: string;

  // Status of the condition, one of True, False, Unknown.
  Status?: string;

  // Type of domain mapping condition.
  Type?: string;
}
