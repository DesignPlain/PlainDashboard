import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity,
  Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity";

export interface Container_getClusterNodePoolNodeConfigSoleTenantConfig {
  // .
  NodeAffinities?: Array<Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function Container_getClusterNodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      ".",
      Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      false,
    ),
  ];
}
