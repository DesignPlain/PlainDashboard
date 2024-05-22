import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem,
  sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem";

export interface sagemaker_SpaceSpaceSettingsCustomFileSystem {
  // A custom file system in Amazon EFS. see EFS File System below.
  efsFileSystem?: sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem;
}

export function sagemaker_SpaceSpaceSettingsCustomFileSystem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileSystem",
      "A custom file system in Amazon EFS. see EFS File System below.",
      sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem_GetTypes(),
      true,
      false,
    ),
  ];
}
