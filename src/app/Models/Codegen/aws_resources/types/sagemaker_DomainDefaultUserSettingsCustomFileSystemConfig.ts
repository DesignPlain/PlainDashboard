import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig,
  sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig";

export interface sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig {
  // The default EBS storage settings for a private space. See `efs_file_system_config` Block below.
  efsFileSystemConfig?: sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig;
}

export function sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileSystemConfig",
      "The default EBS storage settings for a private space. See `efs_file_system_config` Block below.",
      sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
