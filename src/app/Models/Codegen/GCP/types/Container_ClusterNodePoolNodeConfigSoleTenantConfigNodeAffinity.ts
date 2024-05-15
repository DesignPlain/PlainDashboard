import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // List of node affinity label values as strings.
  Values?: Array<string>;

  // The default or custom node affinity label key name.
  Key?: string;

  // Specifies affinity or anti-affinity. Accepted values are `"IN"` or `"NOT_IN"`
  Operator?: string;
}

export function Container_ClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "List of node affinity label values as strings.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The default or custom node affinity label key name.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Operator",
      'Specifies affinity or anti-affinity. Accepted values are `"IN"` or `"NOT_IN"`',
      [],
      true,
      true,
    ),
  ];
}
