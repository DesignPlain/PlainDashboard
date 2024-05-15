import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity,
  Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity";

export interface Container_ClusterNodePoolNodeConfigSoleTenantConfig {
  // .
  NodeAffinities?: Array<Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function Container_ClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      ".",
      Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
