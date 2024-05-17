import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule";

export interface Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint {
  /*
Definition of policy rules
Structure is documented below.
*/
  PolicyRules?: Array<Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule>;

  // Organization policy canned constraint Id
  CannedConstraintId?: string;
}

export function Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PolicyRules",
      "Definition of policy rules\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CannedConstraintId",
      "Organization policy canned constraint Id",
      [],
      true,
      false,
    ),
  ];
}
