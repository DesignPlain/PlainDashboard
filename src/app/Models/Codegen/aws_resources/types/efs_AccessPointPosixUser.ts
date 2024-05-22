import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface efs_AccessPointPosixUser {
  // POSIX group ID used for all file system operations using this access point.
  gid?: number;

  // Secondary POSIX group IDs used for all file system operations using this access point.
  secondaryGids?: Array<number>;

  // POSIX user ID used for all file system operations using this access point.
  uid?: number;
}

export function efs_AccessPointPosixUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "gid",
      "POSIX group ID used for all file system operations using this access point.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secondaryGids",
      "Secondary POSIX group IDs used for all file system operations using this access point.",
      InputType_Number_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "uid",
      "POSIX user ID used for all file system operations using this access point.",
      [],
      true,
      true,
    ),
  ];
}
