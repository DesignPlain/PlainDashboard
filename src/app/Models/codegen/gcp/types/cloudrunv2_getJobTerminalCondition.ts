import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_getJobTerminalCondition {
  // type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: - "Ready": True when the Resource is ready.
  type?: string;

  // A reason for the execution condition.
  executionReason?: string;

  /*
Last time the condition transitioned from one status to another.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  lastTransitionTime?: string;

  // Human readable message indicating details about the current status.
  message?: string;

  // A common (service-level) reason for this condition.
  reason?: string;

  // A reason for the revision condition.
  revisionReason?: string;

  // How to interpret failures of this condition, one of Error, Warning, Info
  severity?: string;

  // State of the condition.
  state?: string;
}

export function cloudrunv2_getJobTerminalCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'revisionReason',
      'A reason for the revision condition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'severity',
      'How to interpret failures of this condition, one of Error, Warning, Info',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'State of the condition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'executionReason',
      'A reason for the execution condition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastTransitionTime',
      'Last time the condition transitioned from one status to another.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      'Human readable message indicating details about the current status.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'reason',
      'A common (service-level) reason for this condition.',
      () => [],
      true,
      false,
    ),
  ];
}
