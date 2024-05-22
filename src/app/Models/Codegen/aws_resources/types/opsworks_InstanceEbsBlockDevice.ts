import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opsworks_InstanceEbsBlockDevice {
  //
  volumeType?: string;

  //
  deleteOnTermination?: boolean;

  //
  deviceName?: string;

  //
  iops?: number;

  //
  snapshotId?: string;

  //
  volumeSize?: number;
}

export function opsworks_InstanceEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "volumeSize", "", [], false, true),
    new DynamicUIProps(InputType.String, "volumeType", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "deviceName", "", [], true, true),
    new DynamicUIProps(InputType.Number, "iops", "", [], false, true),
    new DynamicUIProps(InputType.String, "snapshotId", "", [], false, true),
  ];
}
