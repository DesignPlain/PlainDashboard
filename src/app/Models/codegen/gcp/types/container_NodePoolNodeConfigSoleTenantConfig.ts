import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_NodePoolNodeConfigSoleTenantConfigNodeAffinity,
  container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from './container_NodePoolNodeConfigSoleTenantConfigNodeAffinity';

export interface container_NodePoolNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_NodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_NodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'nodeAffinities',
      '.',
      () => container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
