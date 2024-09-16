import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_UserPoolUserAttributeUpdateSettings {
  // A list of attributes requiring verification before update. If set, the provided value(s) must also be set in `auto_verified_attributes`. Valid values: `email`, `phone_number`.
  attributesRequireVerificationBeforeUpdates?: Array<string>;
}

export function cognito_UserPoolUserAttributeUpdateSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'attributesRequireVerificationBeforeUpdates',
      'A list of attributes requiring verification before update. If set, the provided value(s) must also be set in `auto_verified_attributes`. Valid values: `email`, `phone_number`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
