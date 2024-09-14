import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_NodePoolNodeConfigSoleTenantConfigNodeAffinity {
  // .
  operator?: string;

  // .
  values?: Array<string>;

  // .
  key?: string;
}

export function container_NodePoolNodeConfigSoleTenantConfigNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "operator", ".", () => [], true, true),
    new DynamicUIProps(
      InputType.Array,
      "values",
      ".",
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "key", ".", () => [], true, true),
  ];
}
