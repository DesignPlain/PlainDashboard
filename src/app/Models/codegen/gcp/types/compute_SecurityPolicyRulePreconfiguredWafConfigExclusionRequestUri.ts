import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /*
A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
The field value must be given if the field `operator` is not `EQUALS_ANY`, and cannot be given if the field `operator` is `EQUALS_ANY`.
*/
  value?: string;

  // You can specify an exact match or a partial match by using a field operator and a field value.
  operator?: string;
}

export function compute_SecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.\nThe field value must be given if the field `operator` is not `EQUALS_ANY`, and cannot be given if the field `operator` is `EQUALS_ANY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      "You can specify an exact match or a partial match by using a field operator and a field value.",
      () => [],
      true,
      false,
    ),
  ];
}