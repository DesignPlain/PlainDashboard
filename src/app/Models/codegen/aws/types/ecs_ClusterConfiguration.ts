import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_ClusterConfigurationExecuteCommandConfiguration,
  ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes,
} from './ecs_ClusterConfigurationExecuteCommandConfiguration';
import {
  ecs_ClusterConfigurationManagedStorageConfiguration,
  ecs_ClusterConfigurationManagedStorageConfiguration_GetTypes,
} from './ecs_ClusterConfigurationManagedStorageConfiguration';

export interface ecs_ClusterConfiguration {
  // Details of the execute command configuration. See `execute_command_configuration` Block for details.
  executeCommandConfiguration?: ecs_ClusterConfigurationExecuteCommandConfiguration;

  // Details of the managed storage configuration. See `managed_storage_configuration` Block for details.
  managedStorageConfiguration?: ecs_ClusterConfigurationManagedStorageConfiguration;
}

export function ecs_ClusterConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'executeCommandConfiguration',
      'Details of the execute command configuration. See `execute_command_configuration` Block for details.',
      () => ecs_ClusterConfigurationExecuteCommandConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'managedStorageConfiguration',
      'Details of the managed storage configuration. See `managed_storage_configuration` Block for details.',
      () => ecs_ClusterConfigurationManagedStorageConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
