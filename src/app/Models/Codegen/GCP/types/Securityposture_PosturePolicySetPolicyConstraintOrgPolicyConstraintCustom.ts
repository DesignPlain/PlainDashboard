import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule";

export interface Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom {
  /*
Organization policy custom constraint definition.
Structure is documented below.
*/
  CustomConstraint?: Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint;

  /*
Definition of policy rules
Structure is documented below.
*/
  PolicyRules?: Array<Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule>;
}

export function Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomConstraint",
      "Organization policy custom constraint definition.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyRules",
      "Definition of policy rules\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes(),
      true,
      false,
    ),
  ];
}
