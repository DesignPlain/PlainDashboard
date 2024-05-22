import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iam_RoleInlinePolicy {
  // Policy document as a JSON formatted string.
  policy?: string;

  // Name of the role policy.
  name?: string;
}

export function iam_RoleInlinePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policy",
      "Policy document as a JSON formatted string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the role policy.",
      [],
      false,
      false,
    ),
  ];
}
