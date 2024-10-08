import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AzureClusterLoggingConfigComponentConfig,
  container_AzureClusterLoggingConfigComponentConfig_GetTypes,
} from './container_AzureClusterLoggingConfigComponentConfig';

export interface container_AzureClusterLoggingConfig {
  // Configuration of the logging components.
  componentConfig?: container_AzureClusterLoggingConfigComponentConfig;
}

export function container_AzureClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'componentConfig',
      'Configuration of the logging components.',
      () => container_AzureClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
