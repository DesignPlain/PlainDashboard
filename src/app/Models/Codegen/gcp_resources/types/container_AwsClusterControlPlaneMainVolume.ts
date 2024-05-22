import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AwsClusterControlPlaneMainVolume {
  // Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.
  iops?: number;

  // Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.
  kmsKeyArn?: string;

  // Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  sizeGib?: number;

  // Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.
  throughput?: number;

  // Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3
  volumeType?: string;
}

export function container_AwsClusterControlPlaneMainVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeGib",
      "Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.",
      [],
      false,
      true,
    ),
  ];
}
