import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface transfer_AccessPosixProfile {
  // The secondary POSIX group IDs used for all EFS operations by this user.
  secondaryGids?: Array<number>;

  // The POSIX user ID used for all EFS operations by this user.
  uid?: number;

  // The POSIX group ID used for all EFS operations by this user.
  gid?: number;
}

export function transfer_AccessPosixProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secondaryGids",
      "The secondary POSIX group IDs used for all EFS operations by this user.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "uid",
      "The POSIX user ID used for all EFS operations by this user.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gid",
      "The POSIX group ID used for all EFS operations by this user.",
      [],
      true,
      false,
    ),
  ];
}
