import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface keyspaces_TableSchemaDefinitionStaticColumn {
  // The name of the static column.
  name?: string;
}

export function keyspaces_TableSchemaDefinitionStaticColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the static column.",
      () => [],
      true,
      true,
    ),
  ];
}
