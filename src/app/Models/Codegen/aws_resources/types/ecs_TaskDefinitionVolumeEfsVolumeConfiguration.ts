import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig,
  ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig_GetTypes,
} from "./ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig";

export interface ecs_TaskDefinitionVolumeEfsVolumeConfiguration {
  // Directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying / will have the same effect as omitting this parameter. This argument is ignored when using `authorization_config`.
  rootDirectory?: string;

  // Whether or not to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. Valid values: `ENABLED`, `DISABLED`. If this parameter is omitted, the default value of `DISABLED` is used.
  transitEncryption?: string;

  // Port to use for transit encryption. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses.
  transitEncryptionPort?: number;

  // Configuration block for authorization for the Amazon EFS file system. Detailed below.
  authorizationConfig?: ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;

  // ID of the EFS File System.
  fileSystemId?: string;
}

export function ecs_TaskDefinitionVolumeEfsVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemId",
      "ID of the EFS File System.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootDirectory",
      "Directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying / will have the same effect as omitting this parameter. This argument is ignored when using `authorization_config`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitEncryption",
      "Whether or not to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. Valid values: `ENABLED`, `DISABLED`. If this parameter is omitted, the default value of `DISABLED` is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transitEncryptionPort",
      "Port to use for transit encryption. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authorizationConfig",
      "Configuration block for authorization for the Amazon EFS file system. Detailed below.",
      ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
