import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityPolicyRuleRedirectOptions {
  // External redirection target when `EXTERNAL_302` is set in `type`.
  target?: string;

  // Type of redirect action.
  type?: string;
}

export function compute_SecurityPolicyRuleRedirectOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      "External redirection target when `EXTERNAL_302` is set in `type`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of redirect action.",
      () => [],
      true,
      false,
    ),
  ];
}
