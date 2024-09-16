import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule';

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint {
  // Organization policy canned constraint Id
  cannedConstraintId?: string;

  /*
Definition of policy rules
Structure is documented below.
*/
  policyRules?: Array<securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule>;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cannedConstraintId',
      'Organization policy canned constraint Id',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'policyRules',
      'Definition of policy rules\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes(),
      true,
      false,
    ),
  ];
}
