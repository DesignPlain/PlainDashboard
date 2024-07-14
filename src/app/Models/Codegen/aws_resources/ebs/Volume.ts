import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VolumeArgs {
  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true. Note: The provider must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted.
  kmsKeyId?: string;

  // The Amazon Resource Name (ARN) of the Outpost.
  outpostArn?: string;

  // The size of the drive in GiBs.
  size?: number;

  /*
The throughput that the volume supports, in MiB/s. Only valid for `type` of `gp3`.

> --NOTE:-- When changing the `size`, `iops` or `type` of an instance, there are [considerations](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/considerations.html) to be aware of.
*/
  throughput?: number;

  // The AZ where the EBS volume will exist.
  availabilityZone?: string;

  // If true, the disk will be encrypted.
  encrypted?: boolean;

  // If true, snapshot will be created before volume deletion. Any tags on the volume will be migrated to the snapshot. By default set to false
  finalSnapshot?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of EBS volume. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `gp2`).
  type?: string;

  // The amount of IOPS to provision for the disk. Only valid for `type` of `io1`, `io2` or `gp3`.
  iops?: number;

  // Specifies whether to enable Amazon EBS Multi-Attach. Multi-Attach is supported on `io1` and `io2` volumes.
  multiAttachEnabled?: boolean;

  // A snapshot to base the EBS volume off of.
  snapshotId?: string;
}
export class Volume extends Resource {
  // The volume ARN (e.g., arn:aws:ec2:us-east-1:0123456789012:volume/vol-59fcb34e).
  public arn?: string;

  // If true, the disk will be encrypted.
  public encrypted?: boolean;

  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true. Note: The provider must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted.
  public kmsKeyId?: string;

  /*
The throughput that the volume supports, in MiB/s. Only valid for `type` of `gp3`.

> --NOTE:-- When changing the `size`, `iops` or `type` of an instance, there are [considerations](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/considerations.html) to be aware of.
*/
  public throughput?: number;

  // The AZ where the EBS volume will exist.
  public availabilityZone?: string;

  // The Amazon Resource Name (ARN) of the Outpost.
  public outpostArn?: string;

  // The size of the drive in GiBs.
  public size?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // If true, snapshot will be created before volume deletion. Any tags on the volume will be migrated to the snapshot. By default set to false
  public finalSnapshot?: boolean;

  // The amount of IOPS to provision for the disk. Only valid for `type` of `io1`, `io2` or `gp3`.
  public iops?: number;

  // Specifies whether to enable Amazon EBS Multi-Attach. Multi-Attach is supported on `io1` and `io2` volumes.
  public multiAttachEnabled?: boolean;

  // A snapshot to base the EBS volume off of.
  public snapshotId?: string;

  // The type of EBS volume. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `gp2`).
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true. Note: The provider must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "outpostArn",
        "The Amazon Resource Name (ARN) of the Outpost.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of EBS volume. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `gp2`).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "iops",
        "The amount of IOPS to provision for the disk. Only valid for `type` of `io1`, `io2` or `gp3`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiAttachEnabled",
        "Specifies whether to enable Amazon EBS Multi-Attach. Multi-Attach is supported on `io1` and `io2` volumes.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotId",
        "A snapshot to base the EBS volume off of.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "size",
        "The size of the drive in GiBs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "throughput",
        "The throughput that the volume supports, in MiB/s. Only valid for `type` of `gp3`.\n\n> **NOTE:** When changing the `size`, `iops` or `type` of an instance, there are [considerations](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/considerations.html) to be aware of.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The AZ where the EBS volume will exist.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encrypted",
        "If true, the disk will be encrypted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "finalSnapshot",
        "If true, snapshot will be created before volume deletion. Any tags on the volume will be migrated to the snapshot. By default set to false",
        [],
        false,
        false,
      ),
    ];
  }
}
