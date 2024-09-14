import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ServiceVolumeConfigurationManagedEbsVolume {
  // Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. Recommended using the Amazon ECS-managed `AmazonECSInfrastructureRolePolicyForVolumes` IAM policy with this role.
  roleArn?: string;

  // Whether the volume should be encrypted. Default value is `true`.
  encrypted?: boolean;

  // Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption.
  kmsKeyId?: string;

  // Size of the volume in GiB. You must specify either a `size_in_gb` or a `snapshot_id`. You can optionally specify a volume size greater than or equal to the snapshot size.
  sizeInGb?: number;

  // Snapshot that Amazon ECS uses to create the volume. You must specify either a `size_in_gb` or a `snapshot_id`.
  snapshotId?: string;

  // Throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s.
  throughput?: number;

  // Volume type.
  volumeType?: string;

  // Linux filesystem type for the volume. For volumes created from a snapshot, same filesystem type must be specified that the volume was using when the snapshot was created. Valid values are `ext3`, `ext4`, `xfs`. Default value is `xfs`.
  fileSystemType?: string;

  // Number of I/O operations per second (IOPS).
  iops?: number;
}

export function ecs_ServiceVolumeConfigurationManagedEbsVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "Whether the volume should be encrypted. Default value is `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Volume type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Number of I/O operations per second (IOPS).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. Recommended using the Amazon ECS-managed `AmazonECSInfrastructureRolePolicyForVolumes` IAM policy with this role.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeInGb",
      "Size of the volume in GiB. You must specify either a `size_in_gb` or a `snapshot_id`. You can optionally specify a volume size greater than or equal to the snapshot size.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "Snapshot that Amazon ECS uses to create the volume. You must specify either a `size_in_gb` or a `snapshot_id`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileSystemType",
      "Linux filesystem type for the volume. For volumes created from a snapshot, same filesystem type must be specified that the volume was using when the snapshot was created. Valid values are `ext3`, `ext4`, `xfs`. Default value is `xfs`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption.",
      () => [],
      false,
      false,
    ),
  ];
}
