import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_getDeviceAwsLocation {
  // ARN of the subnet that the device is located in.
  subnetArn?: string;

  // Zone that the device is located in.
  zone?: string;
}

export function networkmanager_getDeviceAwsLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subnetArn',
      'ARN of the subnet that the device is located in.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'zone',
      'Zone that the device is located in.',
      () => [],
      true,
      false,
    ),
  ];
}
