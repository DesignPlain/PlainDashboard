import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues {
  // List of values allowed at this resource.
  allowedValues?: Array<string>;

  // List of values denied at this resource.
  deniedValues?: Array<string>;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allowedValues',
      'List of values allowed at this resource.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'deniedValues',
      'List of values denied at this resource.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
