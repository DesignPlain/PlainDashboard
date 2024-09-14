import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_RoleInlinePolicy {
  // Name of the role policy.
  name?: string;

  // Policy document as a JSON formatted string.
  policy?: string;
}

export function iam_RoleInlinePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the role policy.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policy",
      "Policy document as a JSON formatted string.",
      () => [],
      false,
      false,
    ),
  ];
}
