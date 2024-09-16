import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityposture_PosturePolicySetPolicyComplianceStandard {
  // Mapping of compliance standards for the policy.
  standard?: string;

  // Mapping of security controls for the policy.
  control?: string;
}

export function securityposture_PosturePolicySetPolicyComplianceStandard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'standard',
      'Mapping of compliance standards for the policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'control',
      'Mapping of security controls for the policy.',
      () => [],
      false,
      false,
    ),
  ];
}
