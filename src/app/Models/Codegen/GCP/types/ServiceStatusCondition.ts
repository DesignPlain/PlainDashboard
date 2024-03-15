export interface ServiceStatusCondition {
  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  Status?: string;

  /*
(Output)
Type of domain mapping condition.
*/
  Type?: string;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  Message?: string;

  /*
(Output)
One-word CamelCase reason for the condition's current status.
*/
  Reason?: string;
}
