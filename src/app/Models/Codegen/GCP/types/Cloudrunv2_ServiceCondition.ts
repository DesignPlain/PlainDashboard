import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceCondition {
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
}

export function Cloudrunv2_ServiceCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RevisionReason",
      "(Output)\nA reason for the revision condition.",
      [],
      false,
      false,
    ),
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
      "The allocation type for this traffic target.\nPossible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.",
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
  ];
}
