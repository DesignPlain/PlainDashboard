export interface DomainMappingStatusCondition {
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

  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  Status?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;
}
