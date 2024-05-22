import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_LaunchTemplateBlockDeviceMappingEbs,
  ec2_LaunchTemplateBlockDeviceMappingEbs_GetTypes,
} from "./ec2_LaunchTemplateBlockDeviceMappingEbs";

export interface ec2_LaunchTemplateBlockDeviceMapping {
  // The name of the device to mount.
  deviceName?: string;

  // Configure EBS volume properties.
  ebs?: ec2_LaunchTemplateBlockDeviceMappingEbs;

  // Suppresses the specified device included in the AMI's block device mapping.
  noDevice?: string;

  /*
The [Instance Store Device
Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames)
(e.g., `"ephemeral0"`).
*/
  virtualName?: string;
}

export function ec2_LaunchTemplateBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ebs",
      "Configure EBS volume properties.",
      ec2_LaunchTemplateBlockDeviceMappingEbs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "noDevice",
      "Suppresses the specified device included in the AMI's block device mapping.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      'The [Instance Store Device\nName](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames)\n(e.g., `"ephemeral0"`).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "The name of the device to mount.",
      [],
      false,
      false,
    ),
  ];
}
