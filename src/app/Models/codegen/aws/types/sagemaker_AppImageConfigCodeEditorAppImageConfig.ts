import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig,
  sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig_GetTypes,
} from "./sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig";
import {
  sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig,
  sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig_GetTypes,
} from "./sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig";

export interface sagemaker_AppImageConfigCodeEditorAppImageConfig {
  // The configuration used to run the application image container. See Container Config details below.
  containerConfig?: sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig;

  // The URL where the Git repository is located. See File System Config details below.
  fileSystemConfig?: sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig;
}

export function sagemaker_AppImageConfigCodeEditorAppImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerConfig",
      "The configuration used to run the application image container. See Container Config details below.",
      () =>
        sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileSystemConfig",
      "The URL where the Git repository is located. See File System Config details below.",
      () =>
        sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
