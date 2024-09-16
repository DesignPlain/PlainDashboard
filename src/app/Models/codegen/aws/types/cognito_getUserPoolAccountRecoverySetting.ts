import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_getUserPoolAccountRecoverySettingRecoveryMechanism,
  cognito_getUserPoolAccountRecoverySettingRecoveryMechanism_GetTypes,
} from './cognito_getUserPoolAccountRecoverySettingRecoveryMechanism';

export interface cognito_getUserPoolAccountRecoverySetting {
  //
  recoveryMechanisms?: Array<cognito_getUserPoolAccountRecoverySettingRecoveryMechanism>;
}

export function cognito_getUserPoolAccountRecoverySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'recoveryMechanisms',
      '',
      () =>
        cognito_getUserPoolAccountRecoverySettingRecoveryMechanism_GetTypes(),
      true,
      false,
    ),
  ];
}
