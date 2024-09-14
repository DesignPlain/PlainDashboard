import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface m2_EnvironmentStorageConfigurationEfs {
  // Id of the EFS filesystem to mount.
  fileSystemId?: string;

  // Path to mount the filesystem on, must start with `/m2/mount/`.
  mountPoint?: string;
}

export function m2_EnvironmentStorageConfigurationEfs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemId",
      "Id of the EFS filesystem to mount.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountPoint",
      "Path to mount the filesystem on, must start with `/m2/mount/`.",
      () => [],
      true,
      false,
    ),
  ];
}
