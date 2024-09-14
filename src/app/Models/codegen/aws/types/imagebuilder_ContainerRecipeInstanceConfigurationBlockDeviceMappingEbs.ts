import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {
  // Size of the volume, in GiB.
  volumeSize?: number;

  // Type of the volume. For example, `gp2` or `io2`.
  volumeType?: string;

  // Whether to delete the volume on termination. Defaults to unset, which is the value inherited from the parent image.
  deleteOnTermination?: string;

  // Whether to encrypt the volume. Defaults to unset, which is the value inherited from the parent image.
  encrypted?: string;

  // Number of Input/Output (I/O) operations per second to provision for an `io1` or `io2` volume.
  iops?: number;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key for encryption.
  kmsKeyId?: string;

  // Identifier of the EC2 Volume Snapshot.
  snapshotId?: string;

  // For GP3 volumes only. The throughput in MiB/s that the volume supports.
  throughput?: number;
}

export function imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of the volume. For example, `gp2` or `io2`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deleteOnTermination",
      "Whether to delete the volume on termination. Defaults to unset, which is the value inherited from the parent image.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "encrypted",
      "Whether to encrypt the volume. Defaults to unset, which is the value inherited from the parent image.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Number of Input/Output (I/O) operations per second to provision for an `io1` or `io2` volume.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "Amazon Resource Name (ARN) of the Key Management Service (KMS) Key for encryption.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "Identifier of the EC2 Volume Snapshot.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "For GP3 volumes only. The throughput in MiB/s that the volume supports.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of the volume, in GiB.",
      () => [],
      false,
      true,
    ),
  ];
}
