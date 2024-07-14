import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterNodeConfigSoleTenantConfigNodeAffinity,
  container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./container_ClusterNodeConfigSoleTenantConfigNodeAffinity";

export interface container_ClusterNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_ClusterNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_ClusterNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      ".",
      container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
