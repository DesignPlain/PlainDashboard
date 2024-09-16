import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_SpotInstanceRequestEbsBlockDevice {
  // Whether the volume should be destroyed on instance termination. Defaults to `true`.
  deleteOnTermination?: boolean;

  // Name of the device to mount.
  deviceName?: string;

  // Snapshot ID to mount.
  snapshotId?: string;

  //
  volumeId?: string;

  // Size of the volume in gibibytes (GiB).
  volumeSize?: number;

  /*
Type of volume. Valid values include `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1`, or `st1`. Defaults to `gp2`.

> --NOTE:-- Currently, changes to the `ebs_block_device` configuration of _existing_ resources cannot be automatically detected by this provider. To manage changes and attachments of an EBS block to an instance, use the `aws.ebs.Volume` and `aws.ec2.VolumeAttachment` resources instead. If you use `ebs_block_device` on an `aws.ec2.Instance`, this provider will assume management over the full set of non-root EBS block devices for the instance, treating additional block devices as drift. For this reason, `ebs_block_device` cannot be mixed with external `aws.ebs.Volume` and `aws.ec2.VolumeAttachment` resources for a given instance.
*/
  volumeType?: string;

  // Enables [EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) on the volume. Defaults to `false`. Cannot be used with `snapshot_id`. Must be configured to perform drift detection.
  encrypted?: boolean;

  // Amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). Only valid for volume_type of `io1`, `io2` or `gp3`.
  iops?: number;

  // Amazon Resource Name (ARN) of the KMS Key to use when encrypting the volume. Must be configured to perform drift detection.
  kmsKeyId?: string;

  // Map of tags to assign to the device.
  tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  tagsAll?: Map<string, string>;

  // Throughput to provision for a volume in mebibytes per second (MiB/s). This is only valid for `volume_type` of `gp3`.
  throughput?: number;
}

export function ec2_SpotInstanceRequestEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'iops',
      'Amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). Only valid for volume_type of `io1`, `io2` or `gp3`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'Amazon Resource Name (ARN) of the KMS Key to use when encrypting the volume. Must be configured to perform drift detection.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      'Map of tags to assign to the device.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Name of the device to mount.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'snapshotId',
      'Snapshot ID to mount.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'volumeId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'volumeType',
      'Type of volume. Valid values include `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1`, or `st1`. Defaults to `gp2`.\n\n> **NOTE:** Currently, changes to the `ebs_block_device` configuration of _existing_ resources cannot be automatically detected by this provider. To manage changes and attachments of an EBS block to an instance, use the `aws.ebs.Volume` and `aws.ec2.VolumeAttachment` resources instead. If you use `ebs_block_device` on an `aws.ec2.Instance`, this provider will assume management over the full set of non-root EBS block devices for the instance, treating additional block devices as drift. For this reason, `ebs_block_device` cannot be mixed with external `aws.ebs.Volume` and `aws.ec2.VolumeAttachment` resources for a given instance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'encrypted',
      'Enables [EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) on the volume. Defaults to `false`. Cannot be used with `snapshot_id`. Must be configured to perform drift detection.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'throughput',
      'Throughput to provision for a volume in mebibytes per second (MiB/s). This is only valid for `volume_type` of `gp3`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'deleteOnTermination',
      'Whether the volume should be destroyed on instance termination. Defaults to `true`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'volumeSize',
      'Size of the volume in gibibytes (GiB).',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tagsAll',
      'A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
