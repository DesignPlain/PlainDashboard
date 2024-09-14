import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudwatch_EventPermissionCondition {
  // Key for the condition. Valid values: `aws:PrincipalOrgID`.
  key?: string;

  // Type of condition. Value values: `StringEquals`.
  type?: string;

  // Value for the key.
  value?: string;
}

export function cloudwatch_EventPermissionCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of condition. Value values: `StringEquals`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for the key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the condition. Valid values: `aws:PrincipalOrgID`.",
      () => [],
      true,
      false,
    ),
  ];
}
