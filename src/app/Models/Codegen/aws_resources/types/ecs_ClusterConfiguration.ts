import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ClusterConfigurationExecuteCommandConfiguration,
  ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes,
} from "./ecs_ClusterConfigurationExecuteCommandConfiguration";

export interface ecs_ClusterConfiguration {
  // The details of the execute command configuration. Detailed below.
  executeCommandConfiguration?: ecs_ClusterConfigurationExecuteCommandConfiguration;
}

export function ecs_ClusterConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "executeCommandConfiguration",
      "The details of the execute command configuration. Detailed below.",
      ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
