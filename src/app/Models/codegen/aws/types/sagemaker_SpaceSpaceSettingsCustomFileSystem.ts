import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem,
  sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem";

export interface sagemaker_SpaceSpaceSettingsCustomFileSystem {
  // A custom file system in Amazon EFS. See `efs_file_system` Block below.
  efsFileSystem?: sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem;
}

export function sagemaker_SpaceSpaceSettingsCustomFileSystem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileSystem",
      "A custom file system in Amazon EFS. See `efs_file_system` Block below.",
      () =>
        sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem_GetTypes(),
      true,
      false,
    ),
  ];
}
