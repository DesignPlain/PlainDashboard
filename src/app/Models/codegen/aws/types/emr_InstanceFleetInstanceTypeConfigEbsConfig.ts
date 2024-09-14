import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emr_InstanceFleetInstanceTypeConfigEbsConfig {
  // The number of I/O operations per second (IOPS) that the volume supports
  iops?: number;

  // The volume size, in gibibytes (GiB).
  size?: number;

  // The volume type. Valid options are `gp2`, `io1`, `standard` and `st1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
  type?: string;

  // The number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1)
  volumesPerInstance?: number;
}

export function emr_InstanceFleetInstanceTypeConfigEbsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The volume type. Valid options are `gp2`, `io1`, `standard` and `st1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumesPerInstance",
      "The number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1)",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "The number of I/O operations per second (IOPS) that the volume supports",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The volume size, in gibibytes (GiB).",
      () => [],
      true,
      true,
    ),
  ];
}
