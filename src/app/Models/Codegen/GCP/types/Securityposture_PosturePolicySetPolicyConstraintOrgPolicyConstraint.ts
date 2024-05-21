import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule";

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint {
  /*
Definition of policy rules
Structure is documented below.
*/
  policyRules?: Array<securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule>;

  // Organization policy canned constraint Id
  cannedConstraintId?: string;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "policyRules",
      "Definition of policy rules\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cannedConstraintId",
      "Organization policy canned constraint Id",
      [],
      true,
      false,
    ),
  ];
}
