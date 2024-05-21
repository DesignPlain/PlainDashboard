import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_NodePoolNodeConfigSoleTenantConfigNodeAffinity,
  container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./container_NodePoolNodeConfigSoleTenantConfigNodeAffinity";

export interface container_NodePoolNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_NodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_NodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      ".",
      container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
