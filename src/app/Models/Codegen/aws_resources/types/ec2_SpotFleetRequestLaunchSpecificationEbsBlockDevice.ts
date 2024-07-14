import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice {
  //
  deviceName?: string;

  //
  encrypted?: boolean;

  //
  kmsKeyId?: string;

  //
  throughput?: number;

  //
  deleteOnTermination?: boolean;

  //
  iops?: number;

  //
  snapshotId?: string;

  //
  volumeSize?: number;

  //
  volumeType?: string;
}

export function ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "kmsKeyId", "", [], false, true),
    new DynamicUIProps(InputType.Number, "throughput", "", [], false, true),
    new DynamicUIProps(InputType.Number, "iops", "", [], false, true),
    new DynamicUIProps(InputType.String, "snapshotId", "", [], false, true),
    new DynamicUIProps(InputType.String, "volumeType", "", [], false, true),
    new DynamicUIProps(InputType.String, "deviceName", "", [], true, true),
    new DynamicUIProps(InputType.Bool, "encrypted", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, "volumeSize", "", [], false, true),
  ];
}
