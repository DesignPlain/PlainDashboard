export interface ServiceCondition {
  /*
(Output)
Human readable message indicating details about the current status.
*/
  Message?: string;

  /*
(Output)
A common (service-level) reason for this condition.
*/
  Reason?: string;

  /*
(Output)
A reason for the revision condition.
*/
  RevisionReason?: string;

  /*
(Output)
How to interpret failures of this condition, one of Error, Warning, Info
*/
  Severity?: string;

  /*
(Output)
State of the condition.
*/
  State?: string;

  /*
The allocation type for this traffic target.
Possible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.
*/
  Type?: string;

  /*
(Output)
A reason for the execution condition.
*/
  ExecutionReason?: string;

  /*
(Output)
Last time the condition transitioned from one status to another.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  LastTransitionTime?: string;
}
