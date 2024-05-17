import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getServiceTerminalCondition {
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

  // A reason for the execution condition.
  ExecutionReason?: string;

  // Last time the condition transitioned from one status to another.
  LastTransitionTime?: string;

  // Human readable message indicating details about the current status.
  Message?: string;
}

export function Cloudrunv2_getServiceTerminalCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExecutionReason",
      "A reason for the execution condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastTransitionTime",
      "Last time the condition transitioned from one status to another.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "Human readable message indicating details about the current status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "A common (service-level) reason for this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RevisionReason",
      "A reason for the revision condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Severity",
      "How to interpret failures of this condition, one of Error, Warning, Info",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "State of the condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      'type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.',
      [],
      true,
      false,
    ),
  ];
}
