import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_InstanceRootBlockDevice {
  //
  volumeType?: string;

  //
  deleteOnTermination?: boolean;

  //
  iops?: number;

  //
  volumeSize?: number;
}

export function opsworks_InstanceRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "volumeType", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, "iops", "", [], false, true),
    new DynamicUIProps(InputType.Number, "volumeSize", "", [], false, true),
  ];
}
