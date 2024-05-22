import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration,
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration";
import {
  ecs_TaskDefinitionVolumeDockerVolumeConfiguration,
  ecs_TaskDefinitionVolumeDockerVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeDockerVolumeConfiguration";
import {
  ecs_TaskDefinitionVolumeEfsVolumeConfiguration,
  ecs_TaskDefinitionVolumeEfsVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeEfsVolumeConfiguration";

export interface ecs_TaskDefinitionVolume {
  // Configuration block for an FSX Windows File Server volume. Detailed below.
  fsxWindowsFileServerVolumeConfiguration?: ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;

  // Path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.
  hostPath?: string;

  /*
Name of the volume. This name is referenced in the `sourceVolume`
parameter of container definition in the `mountPoints` section.
*/
  name?: string;

  // Configuration block to configure a docker volume. Detailed below.
  dockerVolumeConfiguration?: ecs_TaskDefinitionVolumeDockerVolumeConfiguration;

  // Configuration block for an EFS volume. Detailed below.
  efsVolumeConfiguration?: ecs_TaskDefinitionVolumeEfsVolumeConfiguration;
}

export function ecs_TaskDefinitionVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostPath",
      "Path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the volume. This name is referenced in the `sourceVolume`\nparameter of container definition in the `mountPoints` section.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dockerVolumeConfiguration",
      "Configuration block to configure a docker volume. Detailed below.",
      ecs_TaskDefinitionVolumeDockerVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "efsVolumeConfiguration",
      "Configuration block for an EFS volume. Detailed below.",
      ecs_TaskDefinitionVolumeEfsVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fsxWindowsFileServerVolumeConfiguration",
      "Configuration block for an FSX Windows File Server volume. Detailed below.",
      ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
  ];
}
