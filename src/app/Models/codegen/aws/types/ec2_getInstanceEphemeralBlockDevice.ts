import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getInstanceEphemeralBlockDevice {
  // Whether the specified device included in the device mapping was suppressed or not (Boolean).
  noDevice?: boolean;

  // Virtual device name.
  virtualName?: string;

  // Physical name of the device.
  deviceName?: string;
}

export function ec2_getInstanceEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'noDevice',
      'Whether the specified device included in the device mapping was suppressed or not (Boolean).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'virtualName',
      'Virtual device name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Physical name of the device.',
      () => [],
      true,
      false,
    ),
  ];
}
