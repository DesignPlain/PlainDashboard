import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // .
  key?: string;

  // .
  operator?: string;

  // .
  values?: Array<string>;
}

export function container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      ".",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "key", ".", [], true, true),
    new DynamicUIProps(InputType.String, "operator", ".", [], true, true),
  ];
}
