import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // .
  Operator?: string;

  // .
  Values?: Array<string>;

  // .
  Key?: string;
}

export function Container_getClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Operator", ".", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      ".",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Key", ".", [], true, false),
  ];
}
