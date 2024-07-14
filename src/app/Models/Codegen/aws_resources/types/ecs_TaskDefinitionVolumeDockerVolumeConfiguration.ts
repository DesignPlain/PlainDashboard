import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_TaskDefinitionVolumeDockerVolumeConfiguration {
  // If this value is `true`, the Docker volume is created if it does not already exist. -Note-: This field is only used if the scope is `shared`.
  autoprovision?: boolean;

  // Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement.
  driver?: string;

  // Map of Docker driver specific options.
  driverOpts?: Map<string, string>;

  // Map of custom metadata to add to your Docker volume.
  labels?: Map<string, string>;

  // Scope for the Docker volume, which determines its lifecycle, either `task` or `shared`.  Docker volumes that are scoped to a `task` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as `shared` persist after the task stops.
  scope?: string;
}

export function ecs_TaskDefinitionVolumeDockerVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Map of custom metadata to add to your Docker volume.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "scope",
      "Scope for the Docker volume, which determines its lifecycle, either `task` or `shared`.  Docker volumes that are scoped to a `task` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as `shared` persist after the task stops.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoprovision",
      "If this value is `true`, the Docker volume is created if it does not already exist. *Note*: This field is only used if the scope is `shared`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "driver",
      "Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "driverOpts",
      "Map of Docker driver specific options.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
