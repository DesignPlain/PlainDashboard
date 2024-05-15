import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_JobCondition {
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
(Output)
type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: - "Ready": True when the Resource is ready.
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
}

export function Cloudrunv2_JobCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Severity",
      "(Output)\nHow to interpret failures of this condition, one of Error, Warning, Info",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nState of the condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      '(Output)\ntype is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionReason",
      "(Output)\nA reason for the execution condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastTransitionTime",
      '(Output)\nLast time the condition transitioned from one status to another.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nHuman readable message indicating details about the current status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "(Output)\nA common (service-level) reason for this condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RevisionReason",
      "(Output)\nA reason for the revision condition.",
      [],
      false,
      false,
    ),
  ];
}
