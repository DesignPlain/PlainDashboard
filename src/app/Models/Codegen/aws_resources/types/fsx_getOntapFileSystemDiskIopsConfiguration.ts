import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_getOntapFileSystemDiskIopsConfiguration {
  // The total number of SSD IOPS provisioned for the file system.
  iops?: number;

  // Specifies whether the file system is using the `AUTOMATIC` setting of SSD IOPS of 3 IOPS per GB of storage capacity, or if it using a `USER_PROVISIONED` value.
  mode?: string;
}

export function fsx_getOntapFileSystemDiskIopsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "The total number of SSD IOPS provisioned for the file system.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Specifies whether the file system is using the `AUTOMATIC` setting of SSD IOPS of 3 IOPS per GB of storage capacity, or if it using a `USER_PROVISIONED` value.",
      [],
      true,
      false,
    ),
  ];
}
