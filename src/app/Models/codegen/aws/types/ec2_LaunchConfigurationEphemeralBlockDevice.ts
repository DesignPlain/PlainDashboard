import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchConfigurationEphemeralBlockDevice {
  //
  deviceName?: string;

  //
  noDevice?: boolean;

  //
  virtualName?: string;
}

export function ec2_LaunchConfigurationEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'virtualName',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.Bool, 'noDevice', '', () => [], false, true),
  ];
}
