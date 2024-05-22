import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getAmiBlockDeviceMapping {
  // Physical name of the device.
  deviceName?: string;

  // Map containing EBS information, if the device is EBS based. Unlike most object attributes, these are accessed directly (e.g., `ebs.volume_size` or `ebs["volume_size"]`) rather than accessed through the first element of a list (e.g., `ebs[0].volume_size`).
  ebs?: Map<string, string>;

  // Suppresses the specified device included in the block device mapping of the AMI.
  noDevice?: string;

  // Virtual device name (for instance stores).
  virtualName?: string;
}

export function ec2_getAmiBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Physical name of the device.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ebs",
      'Map containing EBS information, if the device is EBS based. Unlike most object attributes, these are accessed directly (e.g., `ebs.volume_size` or `ebs["volume_size"]`) rather than accessed through the first element of a list (e.g., `ebs[0].volume_size`).',
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "noDevice",
      "Suppresses the specified device included in the block device mapping of the AMI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "Virtual device name (for instance stores).",
      [],
      true,
      false,
    ),
  ];
}
