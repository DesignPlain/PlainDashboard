import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceStatusCondition {
  // Human readable message indicating details about the current status.
  Message?: string;

  // One-word CamelCase reason for the condition's current status.
  Reason?: string;

  // Status of the condition, one of True, False, Unknown.
  Status?: string;

  // Type of domain mapping condition.
  Type?: string;
}

export function Cloudrun_getServiceStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
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
      "One-word CamelCase reason for the condition's current status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Status",
      "Status of the condition, one of True, False, Unknown.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of domain mapping condition.",
      [],
      true,
      false,
    ),
  ];
}
