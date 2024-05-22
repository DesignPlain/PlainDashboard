import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_getCatalogTableStorageDescriptorColumn {
  // Name of the table.
  name?: string;

  // Map of initialization parameters for the SerDe, in key-value form.
  parameters?: Map<string, string>;

  // Datatype of data in the Column.
  type?: string;

  // Free-form text comment.
  comment?: string;
}

export function glue_getCatalogTableStorageDescriptorColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "Map of initialization parameters for the SerDe, in key-value form.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Datatype of data in the Column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comment",
      "Free-form text comment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the table.",
      [],
      true,
      false,
    ),
  ];
}
