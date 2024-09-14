import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_UserPosixProfile {
  // The POSIX group ID used for all EFS operations by this user.
  gid?: number;

  // The secondary POSIX group IDs used for all EFS operations by this user.
  secondaryGids?: Array<number>;

  // The POSIX user ID used for all EFS operations by this user.
  uid?: number;
}

export function transfer_UserPosixProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "gid",
      "The POSIX group ID used for all EFS operations by this user.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secondaryGids",
      "The secondary POSIX group IDs used for all EFS operations by this user.",
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "uid",
      "The POSIX user ID used for all EFS operations by this user.",
      () => [],
      true,
      false,
    ),
  ];
}
