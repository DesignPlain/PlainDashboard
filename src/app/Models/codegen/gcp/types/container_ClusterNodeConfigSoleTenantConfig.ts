import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterNodeConfigSoleTenantConfigNodeAffinity,
  container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from './container_ClusterNodeConfigSoleTenantConfigNodeAffinity';

export interface container_ClusterNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_ClusterNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_ClusterNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'nodeAffinities',
      '.',
      () => container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
