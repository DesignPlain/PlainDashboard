import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_NodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // .
  values?: Array<string>;

  // .
  key?: string;

  // .
  operator?: string;
}

export function container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "operator", ".", [], true, true),
    new DynamicUIProps(
      InputType.Array,
      "values",
      ".",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "key", ".", [], true, true),
  ];
}
