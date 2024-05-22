import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_getServiceStatusCondition {
  // Human readable message indicating details about the current status.
  message?: string;

  // One-word CamelCase reason for the condition's current status.
  reason?: string;

  // Status of the condition, one of True, False, Unknown.
  status?: string;

  // Type of domain mapping condition.
  type?: string;
}

export function cloudrun_getServiceStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of the condition, one of True, False, Unknown.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of domain mapping condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "Human readable message indicating details about the current status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "One-word CamelCase reason for the condition's current status.",
      [],
      true,
      false,
    ),
  ];
}
