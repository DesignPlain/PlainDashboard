import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface efs_AccessPointRootDirectoryCreationInfo {
  // POSIX user ID to apply to the `root_directory`.
  ownerUid?: number;

  // POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
  permissions?: string;

  // POSIX group ID to apply to the `root_directory`.
  ownerGid?: number;
}

export function efs_AccessPointRootDirectoryCreationInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ownerUid",
      "POSIX user ID to apply to the `root_directory`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "permissions",
      "POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ownerGid",
      "POSIX group ID to apply to the `root_directory`.",
      () => [],
      true,
      true,
    ),
  ];
}
