import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_OpenZfsFileSystemDiskIopsConfiguration {
  // The total number of SSD IOPS provisioned for the file system.
  iops?: number;

  // Specifies whether the number of IOPS for the file system is using the system. Valid values are `AUTOMATIC` and `USER_PROVISIONED`. Default value is `AUTOMATIC`.
  mode?: string;
}

export function fsx_OpenZfsFileSystemDiskIopsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "The total number of SSD IOPS provisioned for the file system.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Specifies whether the number of IOPS for the file system is using the system. Valid values are `AUTOMATIC` and `USER_PROVISIONED`. Default value is `AUTOMATIC`.",
      () => [],
      false,
      false,
    ),
  ];
}
