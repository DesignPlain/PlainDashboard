import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodeConfigSoleTenantConfigNodeAffinity,
  Container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./Container_ClusterNodeConfigSoleTenantConfigNodeAffinity";

export interface Container_ClusterNodeConfigSoleTenantConfig {
  // .
  NodeAffinities?: Array<Container_ClusterNodeConfigSoleTenantConfigNodeAffinity>;
}

export function Container_ClusterNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      ".",
      Container_ClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
