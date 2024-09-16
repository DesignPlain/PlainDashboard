import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint';

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom {
  /*
Definition of policy rules
Structure is documented below.
*/
  policyRules?: Array<securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule>;

  /*
Organization policy custom constraint definition.
Structure is documented below.
*/
  customConstraint?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'policyRules',
      'Definition of policy rules\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customConstraint',
      'Organization policy custom constraint definition.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint_GetTypes(),
      false,
      false,
    ),
  ];
}
