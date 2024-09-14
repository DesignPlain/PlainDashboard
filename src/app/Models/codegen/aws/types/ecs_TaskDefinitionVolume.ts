import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_TaskDefinitionVolumeDockerVolumeConfiguration,
  ecs_TaskDefinitionVolumeDockerVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeDockerVolumeConfiguration";
import {
  ecs_TaskDefinitionVolumeEfsVolumeConfiguration,
  ecs_TaskDefinitionVolumeEfsVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeEfsVolumeConfiguration";
import {
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration,
  ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration_GetTypes,
} from "./ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration";

export interface ecs_TaskDefinitionVolume {
  // Whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.
  configureAtLaunch?: boolean;

  // Configuration block to configure a docker volume. Detailed below.
  dockerVolumeConfiguration?: ecs_TaskDefinitionVolumeDockerVolumeConfiguration;

  // Configuration block for an EFS volume. Detailed below.
  efsVolumeConfiguration?: ecs_TaskDefinitionVolumeEfsVolumeConfiguration;

  // Configuration block for an FSX Windows File Server volume. Detailed below.
  fsxWindowsFileServerVolumeConfiguration?: ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;

  // Path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.
  hostPath?: string;

  /*
Name of the volume. This name is referenced in the `sourceVolume`
parameter of container definition in the `mountPoints` section.
*/
  name?: string;
}

export function ecs_TaskDefinitionVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostPath",
      "Path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the volume. This name is referenced in the `sourceVolume`\nparameter of container definition in the `mountPoints` section.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "configureAtLaunch",
      "Whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dockerVolumeConfiguration",
      "Configuration block to configure a docker volume. Detailed below.",
      () => ecs_TaskDefinitionVolumeDockerVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "efsVolumeConfiguration",
      "Configuration block for an EFS volume. Detailed below.",
      () => ecs_TaskDefinitionVolumeEfsVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fsxWindowsFileServerVolumeConfiguration",
      "Configuration block for an FSX Windows File Server volume. Detailed below.",
      () =>
        ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration_GetTypes(),
      false,
      true,
    ),
  ];
}
