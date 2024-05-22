import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig,
  sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig";

export interface sagemaker_UserProfileUserSettingsCustomFileSystemConfig {
  // The default EBS storage settings for a private space. See EFS File System Config below.
  efsFileSystemConfigs?: Array<sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig>;
}

export function sagemaker_UserProfileUserSettingsCustomFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "efsFileSystemConfigs",
      "The default EBS storage settings for a private space. See EFS File System Config below.",
      sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
