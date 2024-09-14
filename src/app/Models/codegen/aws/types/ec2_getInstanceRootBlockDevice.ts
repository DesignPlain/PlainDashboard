import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getInstanceRootBlockDevice {
  // `0` If the volume is not a provisioned IOPS image, otherwise the supported IOPS count.
  iops?: number;

  //
  kmsKeyId?: string;

  // Throughput of the volume, in MiB/s.
  throughput?: number;

  // Size of the volume, in GiB.
  volumeSize?: number;

  // If the root block device will be deleted on termination.
  deleteOnTermination?: boolean;

  // Physical name of the device.
  deviceName?: string;

  // If the EBS volume is encrypted.
  encrypted?: boolean;

  // Map of tags assigned to the Instance.
  tags?: Map<string, string>;

  //
  volumeId?: string;

  // Type of the volume.
  volumeType?: string;
}

export function ec2_getInstanceRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "`0` If the volume is not a provisioned IOPS image, otherwise the supported IOPS count.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "If the root block device will be deleted on termination.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "If the EBS volume is encrypted.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "volumeId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags assigned to the Instance.",
      () => InputType_Map_GetTypes(),
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
    new DynamicUIProps(InputType.String, "kmsKeyId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput of the volume, in MiB/s.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of the volume, in GiB.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Physical name of the device.",
      () => [],
      true,
      false,
    ),
  ];
}
