import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // The default or custom node affinity label key name.
  key?: string;

  // Specifies affinity or anti-affinity. Accepted values are `"IN"` or `"NOT_IN"`
  operator?: string;

  // List of node affinity label values as strings.
  values?: Array<string>;
}

export function container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The default or custom node affinity label key name.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      'Specifies affinity or anti-affinity. Accepted values are `"IN"` or `"NOT_IN"`',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "List of node affinity label values as strings.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
