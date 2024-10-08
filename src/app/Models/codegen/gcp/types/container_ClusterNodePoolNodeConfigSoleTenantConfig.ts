import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity,
  container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from './container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity';

export interface container_ClusterNodePoolNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_ClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'nodeAffinities',
      '.',
      () =>
        container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
