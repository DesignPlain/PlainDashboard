import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_LaunchConfigurationEbsBlockDevice {
  //
  deviceName?: string;

  //
  encrypted?: boolean;

  //
  iops?: number;

  //
  volumeSize?: number;

  //
  deleteOnTermination?: boolean;

  //
  snapshotId?: string;

  //
  throughput?: number;

  //
  volumeType?: string;

  //
  noDevice?: boolean;
}

export function ec2_LaunchConfigurationEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "encrypted", "", [], false, true),
    new DynamicUIProps(InputType.String, "volumeType", "", [], false, true),
    new DynamicUIProps(InputType.String, "deviceName", "", [], true, true),
    new DynamicUIProps(InputType.Number, "volumeSize", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "snapshotId", "", [], false, true),
    new DynamicUIProps(InputType.Number, "throughput", "", [], false, true),
    new DynamicUIProps(InputType.Bool, "noDevice", "", [], false, true),
    new DynamicUIProps(InputType.Number, "iops", "", [], false, true),
  ];
}
