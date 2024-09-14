import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterNodeConfigSoleTenantConfigNodeAffinity,
  container_getClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes,
} from "./container_getClusterNodeConfigSoleTenantConfigNodeAffinity";

export interface container_getClusterNodeConfigSoleTenantConfig {
  // .
  nodeAffinities?: Array<container_getClusterNodeConfigSoleTenantConfigNodeAffinity>;
}

export function container_getClusterNodeConfigSoleTenantConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      ".",
      () =>
        container_getClusterNodeConfigSoleTenantConfigNodeAffinity_GetTypes(),
      true,
      false,
    ),
  ];
}
