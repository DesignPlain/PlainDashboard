import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_LaunchTemplateBlockDeviceMappingEbs {
  /*
Whether the volume should be destroyed on instance termination.
See [Preserving Amazon EBS Volumes on Instance Termination](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination) for more information.
*/
  deleteOnTermination?: string;

  /*
Enables [EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) on the volume.
Cannot be used with `snapshot_id`.
*/
  encrypted?: string;

  /*
The amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).
This must be set with a `volume_type` of `"io1/io2/gp3"`.
*/
  iops?: number;

  /*
The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the encrypted volume.
`encrypted` must be set to `true` when this is set.
*/
  kmsKeyId?: string;

  // The Snapshot ID to mount.
  snapshotId?: string;

  // The throughput to provision for a `gp3` volume in MiB/s (specified as an integer, e.g., 500), with a maximum of 1,000 MiB/s.
  throughput?: number;

  // The size of the volume in gigabytes.
  volumeSize?: number;

  /*
The volume type.
Can be one of `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1`.
*/
  volumeType?: string;
}

export function ec2_LaunchTemplateBlockDeviceMappingEbs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deleteOnTermination",
      "Whether the volume should be destroyed on instance termination.\nSee [Preserving Amazon EBS Volumes on Instance Termination](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination) for more information.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encrypted",
      "Enables [EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) on the volume.\nCannot be used with `snapshot_id`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      'The amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).\nThis must be set with a `volume_type` of `"io1/io2/gp3"`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the encrypted volume.\n`encrypted` must be set to `true` when this is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "The Snapshot ID to mount.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "The throughput to provision for a `gp3` volume in MiB/s (specified as an integer, e.g., 500), with a maximum of 1,000 MiB/s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "The size of the volume in gigabytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "The volume type.\nCan be one of `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1`.",
      [],
      false,
      false,
    ),
  ];
}
