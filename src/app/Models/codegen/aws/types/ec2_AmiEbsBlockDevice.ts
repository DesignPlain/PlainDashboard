import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_AmiEbsBlockDevice {
  // Boolean controlling whether the created EBS volumes will be encrypted. Can't be used with `snapshot_id`.
  encrypted?: boolean;

  /*
Number of I/O operations per second the
created volumes will support.
*/
  iops?: number;

  // Throughput that the EBS volume supports, in MiB/s. Only valid for `volume_type` of `gp3`.
  throughput?: number;

  /*
Size of created volumes in GiB.
If `snapshot_id` is set and `volume_size` is omitted then the volume will have the same size
as the selected snapshot.
*/
  volumeSize?: number;

  /*
Boolean controlling whether the EBS volumes created to
support each created instance will be deleted once that instance is terminated.
*/
  deleteOnTermination?: boolean;

  // Path at which the device is exposed to created instances.
  deviceName?: string;

  /*
ARN of the Outpost on which the snapshot is stored.

> --Note:-- You can specify `encrypted` or `snapshot_id` but not both.
*/
  outpostArn?: string;

  /*
ID of an EBS snapshot that will be used to initialize the created
EBS volumes. If set, the `volume_size` attribute must be at least as large as the referenced
snapshot.
*/
  snapshotId?: string;

  // Type of EBS volume to create. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `standard`).
  volumeType?: string;
}

export function ec2_AmiEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Number of I/O operations per second the\ncreated volumes will support.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput that the EBS volume supports, in MiB/s. Only valid for `volume_type` of `gp3`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of EBS volume to create. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `standard`).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "outpostArn",
      "ARN of the Outpost on which the snapshot is stored.\n\n> **Note:** You can specify `encrypted` or `snapshot_id` but not both.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "ID of an EBS snapshot that will be used to initialize the created\nEBS volumes. If set, the `volume_size` attribute must be at least as large as the referenced\nsnapshot.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "Boolean controlling whether the created EBS volumes will be encrypted. Can't be used with `snapshot_id`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of created volumes in GiB.\nIf `snapshot_id` is set and `volume_size` is omitted then the volume will have the same size\nas the selected snapshot.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "Boolean controlling whether the EBS volumes created to\nsupport each created instance will be deleted once that instance is terminated.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Path at which the device is exposed to created instances.",
      () => [],
      true,
      true,
    ),
  ];
}
