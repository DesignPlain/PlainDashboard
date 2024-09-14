import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emr_InstanceGroupEbsConfig {
  // The volume type. Valid options are 'gp2', 'io1' and 'standard'.
  type?: string;

  // The number of EBS Volumes to attach per instance.
  volumesPerInstance?: number;

  // The number of I/O operations per second (IOPS) that the volume supports.
  iops?: number;

  // The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
  size?: number;
}

export function emr_InstanceGroupEbsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The volume type. Valid options are 'gp2', 'io1' and 'standard'.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumesPerInstance",
      "The number of EBS Volumes to attach per instance.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "The number of I/O operations per second (IOPS) that the volume supports.",
      () => [],
      false,
      true,
    ),
  ];
}
