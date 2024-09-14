import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_JobTerminalCondition {
  /*
(Output)
type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: - "Ready": True when the Resource is ready.
*/
  type?: string;

  /*
(Output)
A reason for the execution condition.
*/
  executionReason?: string;

  /*
(Output)
Last time the condition transitioned from one status to another.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  lastTransitionTime?: string;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  message?: string;

  /*
(Output)
A common (service-level) reason for this condition.
*/
  reason?: string;

  /*
(Output)
A reason for the revision condition.
*/
  revisionReason?: string;

  /*
(Output)
How to interpret failures of this condition, one of Error, Warning, Info
*/
  severity?: string;

  /*
(Output)
State of the condition.
*/
  state?: string;
}

export function cloudrunv2_JobTerminalCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "(Output)\nHuman readable message indicating details about the current status.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "(Output)\nA common (service-level) reason for this condition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revisionReason",
      "(Output)\nA reason for the revision condition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "severity",
      "(Output)\nHow to interpret failures of this condition, one of Error, Warning, Info",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nState of the condition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      '(Output)\ntype is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionReason",
      "(Output)\nA reason for the execution condition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransitionTime",
      '(Output)\nLast time the condition transitioned from one status to another.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      () => [],
      false,
      false,
    ),
  ];
}
