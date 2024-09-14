import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice {
  //
  volumeType?: string;

  //
  deleteOnTermination?: boolean;

  //
  iops?: number;

  //
  snapshotId?: string;

  //
  throughput?: number;

  //
  volumeSize?: number;

  //
  deviceName?: string;

  //
  encrypted?: boolean;

  //
  kmsKeyId?: string;
}

export function ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, "iops", "", () => [], false, true),
    new DynamicUIProps(
      InputType.String,
      "snapshotId",
      "",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "kmsKeyId", "", () => [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Bool, "encrypted", "", () => [], false, true),
  ];
}
