import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_UserPoolDeviceConfiguration {
  // Whether a challenge is required on a new device. Only applicable to a new device.
  challengeRequiredOnNewDevice?: boolean;

  // Whether a device is only remembered on user prompt. `false` equates to "Always" remember, `true` is "User Opt In," and not using a `device_configuration` block is "No."
  deviceOnlyRememberedOnUserPrompt?: boolean;
}

export function cognito_UserPoolDeviceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "challengeRequiredOnNewDevice",
      "Whether a challenge is required on a new device. Only applicable to a new device.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deviceOnlyRememberedOnUserPrompt",
      'Whether a device is only remembered on user prompt. `false` equates to "Always" remember, `true` is "User Opt In," and not using a `device_configuration` block is "No."',
      () => [],
      false,
      false,
    ),
  ];
}
