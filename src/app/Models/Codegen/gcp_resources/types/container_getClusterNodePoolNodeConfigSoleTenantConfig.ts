import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity,
  container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity";

export interface container_getClusterNodePoolNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      ".",
      container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      false,
    ),
  ];
}
