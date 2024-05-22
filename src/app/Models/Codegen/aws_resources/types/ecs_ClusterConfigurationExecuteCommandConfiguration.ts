import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration,
  ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration_GetTypes,
} from "./ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration";

export interface ecs_ClusterConfigurationExecuteCommandConfiguration {
  // The AWS Key Management Service key ID to encrypt the data between the local client and the container.
  kmsKeyId?: string;

  // The log configuration for the results of the execute command actions Required when `logging` is `OVERRIDE`. Detailed below.
  logConfiguration?: ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration;

  // The log setting to use for redirecting logs for your execute command results. Valid values are `NONE`, `DEFAULT`, and `OVERRIDE`.
  logging?: string;
}

export function ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The AWS Key Management Service key ID to encrypt the data between the local client and the container.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "logConfiguration",
      "The log configuration for the results of the execute command actions Required when `logging` is `OVERRIDE`. Detailed below.",
      ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logging",
      "The log setting to use for redirecting logs for your execute command results. Valid values are `NONE`, `DEFAULT`, and `OVERRIDE`.",
      [],
      false,
      false,
    ),
  ];
}
