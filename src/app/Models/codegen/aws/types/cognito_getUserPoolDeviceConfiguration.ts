import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolDeviceConfiguration {
  // - Whether a challenge is required on new devices.
  challengeRequiredOnNewDevice?: boolean;

  // - Whether devices are only remembered if the user prompts it.
  deviceOnlyRememberedOnUserPrompt?: boolean;
}

export function cognito_getUserPoolDeviceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'challengeRequiredOnNewDevice',
      '- Whether a challenge is required on new devices.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'deviceOnlyRememberedOnUserPrompt',
      '- Whether devices are only remembered if the user prompts it.',
      () => [],
      true,
      false,
    ),
  ];
}
