import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration,
  ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration_GetTypes,
} from './ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration';

export interface ecs_ClusterConfigurationExecuteCommandConfiguration {
  // AWS Key Management Service key ID to encrypt the data between the local client and the container.
  kmsKeyId?: string;

  // Log configuration for the results of the execute command actions. Required when `logging` is `OVERRIDE`. See `log_configuration` Block for details.
  logConfiguration?: ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration;

  // Log setting to use for redirecting logs for your execute command results. Valid values: `NONE`, `DEFAULT`, `OVERRIDE`.
  logging?: string;
}

export function ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'AWS Key Management Service key ID to encrypt the data between the local client and the container.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'logConfiguration',
      'Log configuration for the results of the execute command actions. Required when `logging` is `OVERRIDE`. See `log_configuration` Block for details.',
      () =>
        ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logging',
      'Log setting to use for redirecting logs for your execute command results. Valid values: `NONE`, `DEFAULT`, `OVERRIDE`.',
      () => [],
      false,
      false,
    ),
  ];
}
