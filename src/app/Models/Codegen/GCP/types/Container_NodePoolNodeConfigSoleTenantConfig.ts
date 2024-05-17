import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolNodeConfigSoleTenantConfigNodeAffinity,
  Container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./Container_NodePoolNodeConfigSoleTenantConfigNodeAffinity";

export interface Container_NodePoolNodeConfigSoleTenantConfig {
  // .
  NodeAffinities?: Array<Container_NodePoolNodeConfigSoleTenantConfigNodeAffinity>;
}

export function Container_NodePoolNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      ".",
      Container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      true,
    ),
  ];
}
