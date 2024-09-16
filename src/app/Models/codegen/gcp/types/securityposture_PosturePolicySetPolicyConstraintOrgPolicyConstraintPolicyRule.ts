import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues';

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule {
  // Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  denyAll?: boolean;

  /*
If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.
This field can be set only in policies for boolean constraints.
*/
  enforce?: boolean;

  /*
List of values to be used for this policy rule. This field can be set only in policies for list constraints.
Structure is documented below.
*/
  values?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues;

  // Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  allowAll?: boolean;

  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  condition?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'values',
      'List of values to be used for this policy rule. This field can be set only in policies for list constraints.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowAll',
      'Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'condition',
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.\nThis page details the objects and attributes that are used to the build the CEL expressions for\ncustom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'denyAll',
      'Setting this to true means that all values are denied. This field can be set only in policies for list constraints.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enforce',
      'If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.\nThis field can be set only in policies for boolean constraints.',
      () => [],
      false,
      false,
    ),
  ];
}
