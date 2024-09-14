import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getLaunchConfigurationEbsBlockDevice {
  // Provisioned IOPs of the volume.
  iops?: number;

  // Whether the device in the block device mapping of the AMI is suppressed.
  noDevice?: boolean;

  // Size of the volume.
  volumeSize?: number;

  // Type of the volume.
  volumeType?: string;

  // Whether the EBS Volume will be deleted on instance termination.
  deleteOnTermination?: boolean;

  // Name of the device.
  deviceName?: string;

  // Whether the volume is Encrypted.
  encrypted?: boolean;

  // Snapshot ID of the mount.
  snapshotId?: string;

  // Throughput of the volume.
  throughput?: number;
}

export function ec2_getLaunchConfigurationEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the device.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "Whether the volume is Encrypted.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "Snapshot ID of the mount.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput of the volume.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noDevice",
      "Whether the device in the block device mapping of the AMI is suppressed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of the volume.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of the volume.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "Whether the EBS Volume will be deleted on instance termination.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Provisioned IOPs of the volume.",
      () => [],
      true,
      false,
    ),
  ];
}
