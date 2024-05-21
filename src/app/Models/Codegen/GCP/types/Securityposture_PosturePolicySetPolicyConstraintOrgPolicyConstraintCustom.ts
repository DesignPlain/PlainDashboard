import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint";
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule";

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom {
  /*
Organization policy custom constraint definition.
Structure is documented below.
*/
  customConstraint?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint;

  /*
Definition of policy rules
Structure is documented below.
*/
  policyRules?: Array<securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule>;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customConstraint",
      "Organization policy custom constraint definition.\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyRules",
      "Definition of policy rules\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes(),
      true,
      false,
    ),
  ];
}
