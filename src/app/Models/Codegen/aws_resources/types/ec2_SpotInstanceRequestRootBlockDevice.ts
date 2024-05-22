import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_SpotInstanceRequestRootBlockDevice {
  // Throughput to provision for a volume in mebibytes per second (MiB/s). This is only valid for `volume_type` of `gp3`.
  throughput?: number;

  // Size of the volume in gibibytes (GiB).
  volumeSize?: number;

  /*
Type of volume. Valid values include `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1`, or `st1`. Defaults to the volume type that the AMI uses.

Modifying the `encrypted` or `kms_key_id` settings of the `root_block_device` requires resource replacement.
*/
  volumeType?: string;

  // Name of the device to mount.
  deviceName?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  tagsAll?: Map<string, string>;

  // Amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). Only valid for volume_type of `io1`, `io2` or `gp3`.
  iops?: number;

  // Amazon Resource Name (ARN) of the KMS Key to use when encrypting the volume. Must be configured to perform drift detection.
  kmsKeyId?: string;

  // Map of tags to assign to the device.
  tags?: Map<string, string>;

  //
  volumeId?: string;

  // Whether the volume should be destroyed on instance termination. Defaults to `true`.
  deleteOnTermination?: boolean;

  // Whether to enable volume encryption. Defaults to `false`. Must be configured to perform drift detection.
  encrypted?: boolean;
}

export function ec2_SpotInstanceRequestRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "Amazon Resource Name (ARN) of the KMS Key to use when encrypting the volume. Must be configured to perform drift detection.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of volume. Valid values include `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1`, or `st1`. Defaults to the volume type that the AMI uses.\n\nModifying the `encrypted` or `kms_key_id` settings of the `root_block_device` requires resource replacement.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the device to mount.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tagsAll",
      "A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). Only valid for volume_type of `io1`, `io2` or `gp3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags to assign to the device.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "volumeId", "", [], false, false),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "Whether the volume should be destroyed on instance termination. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "Whether to enable volume encryption. Defaults to `false`. Must be configured to perform drift detection.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput to provision for a volume in mebibytes per second (MiB/s). This is only valid for `volume_type` of `gp3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of the volume in gibibytes (GiB).",
      [],
      false,
      false,
    ),
  ];
}
