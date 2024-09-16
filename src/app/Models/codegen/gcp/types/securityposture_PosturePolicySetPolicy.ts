import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraint,
  securityposture_PosturePolicySetPolicyConstraint_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraint';
import {
  securityposture_PosturePolicySetPolicyComplianceStandard,
  securityposture_PosturePolicySetPolicyComplianceStandard_GetTypes,
} from './securityposture_PosturePolicySetPolicyComplianceStandard';

export interface securityposture_PosturePolicySetPolicy {
  /*
Mapping for policy to security standards and controls.
Structure is documented below.
*/
  complianceStandards?: Array<securityposture_PosturePolicySetPolicyComplianceStandard>;

  /*
Policy constraint definition.It can have the definition of one of following constraints: orgPolicyConstraint orgPolicyConstraintCustom securityHealthAnalyticsModule securityHealthAnalyticsCustomModule
Structure is documented below.
*/
  constraint?: securityposture_PosturePolicySetPolicyConstraint;

  // Description of the policy.
  description?: string;

  // ID of the policy.
  policyId?: string;
}

export function securityposture_PosturePolicySetPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'complianceStandards',
      'Mapping for policy to security standards and controls.\nStructure is documented below.',
      () => securityposture_PosturePolicySetPolicyComplianceStandard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'constraint',
      'Policy constraint definition.It can have the definition of one of following constraints: orgPolicyConstraint orgPolicyConstraintCustom securityHealthAnalyticsModule securityHealthAnalyticsCustomModule\nStructure is documented below.',
      () => securityposture_PosturePolicySetPolicyConstraint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'policyId',
      'ID of the policy.',
      () => [],
      true,
      false,
    ),
  ];
}
