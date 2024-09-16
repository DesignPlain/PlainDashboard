import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolAccountRecoverySettingRecoveryMechanism {
  // - Priority of this mechanism in the recovery process (lower numbers are higher priority).
  priority?: number;

  // - Name of the attribute.
  name?: string;
}

export function cognito_getUserPoolAccountRecoverySettingRecoveryMechanism_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'priority',
      '- Priority of this mechanism in the recovery process (lower numbers are higher priority).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      '- Name of the attribute.',
      () => [],
      true,
      false,
    ),
  ];
}
