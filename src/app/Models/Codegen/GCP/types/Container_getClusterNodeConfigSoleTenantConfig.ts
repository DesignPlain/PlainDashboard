import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodeConfigSoleTenantConfigNodeAffinity,
  Container_getClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./Container_getClusterNodeConfigSoleTenantConfigNodeAffinity";

export interface Container_getClusterNodeConfigSoleTenantConfig {
  // .
  NodeAffinities?: Array<Container_getClusterNodeConfigSoleTenantConfigNodeAffinity>;
}

export function Container_getClusterNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      ".",
      Container_getClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      false,
    ),
  ];
}
