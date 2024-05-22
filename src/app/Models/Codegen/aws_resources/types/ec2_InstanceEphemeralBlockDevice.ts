import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_InstanceEphemeralBlockDevice {
  // Name of the block device to mount on the instance.
  deviceName?: string;

  // Suppresses the specified device included in the AMI's block device mapping.
  noDevice?: boolean;

  /*
[Instance Store Device Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames) (e.g., `ephemeral0`).

Each AWS Instance type has a different set of Instance Store block devices available for attachment. AWS [publishes a list](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#StorageOnInstanceTypes) of which ephemeral devices are available on each type. The devices are always identified by the `virtual_name` in the format `ephemeral{0..N}`.
*/
  virtualName?: string;
}

export function ec2_InstanceEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the block device to mount on the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noDevice",
      "Suppresses the specified device included in the AMI's block device mapping.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "[Instance Store Device Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames) (e.g., `ephemeral0`).\n\nEach AWS Instance type has a different set of Instance Store block devices available for attachment. AWS [publishes a list](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#StorageOnInstanceTypes) of which ephemeral devices are available on each type. The devices are always identified by the `virtual_name` in the format `ephemeral{0..N}`.",
      [],
      false,
      false,
    ),
  ];
}
