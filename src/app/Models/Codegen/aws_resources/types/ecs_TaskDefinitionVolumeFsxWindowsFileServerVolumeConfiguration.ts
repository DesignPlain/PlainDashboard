import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig,
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig_GetTypes,
} from "./ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig";

export interface ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
  // The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.
  rootDirectory?: string;

  // Configuration block for authorization for the Amazon FSx for Windows File Server file system detailed below.
  authorizationConfig?: ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;

  // The Amazon FSx for Windows File Server file system ID to use.
  fileSystemId?: string;
}

export function ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemId",
      "The Amazon FSx for Windows File Server file system ID to use.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootDirectory",
      "The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authorizationConfig",
      "Configuration block for authorization for the Amazon FSx for Windows File Server file system detailed below.",
      ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
