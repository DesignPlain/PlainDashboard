import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues {
  // List of values allowed at this resource.
  AllowedValues?: Array<string>;

  // List of values denied at this resource.
  DeniedValues?: Array<string>;
}

export function Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedValues",
      "List of values allowed at this resource.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DeniedValues",
      "List of values denied at this resource.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
