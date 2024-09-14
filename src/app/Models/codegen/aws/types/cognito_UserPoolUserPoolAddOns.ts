import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_UserPoolUserPoolAddOns {
  // Mode for advanced security, must be one of `OFF`, `AUDIT` or `ENFORCED`.
  advancedSecurityMode?: string;
}

export function cognito_UserPoolUserPoolAddOns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "advancedSecurityMode",
      "Mode for advanced security, must be one of `OFF`, `AUDIT` or `ENFORCED`.",
      () => [],
      true,
      false,
    ),
  ];
}
