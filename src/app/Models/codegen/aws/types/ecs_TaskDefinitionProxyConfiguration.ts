import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_TaskDefinitionProxyConfiguration {
  // Name of the container that will serve as the App Mesh proxy.
  containerName?: string;

  // Set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping.
  properties?: Map<string, string>;

  // Proxy type. The default value is `APPMESH`. The only supported value is `APPMESH`.
  type?: string;
}

export function ecs_TaskDefinitionProxyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'containerName',
      'Name of the container that will serve as the App Mesh proxy.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'Set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Proxy type. The default value is `APPMESH`. The only supported value is `APPMESH`.',
      () => [],
      false,
      true,
    ),
  ];
}
