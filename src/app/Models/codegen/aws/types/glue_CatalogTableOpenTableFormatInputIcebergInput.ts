import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_CatalogTableOpenTableFormatInputIcebergInput {
  // A required metadata operation. Can only be set to CREATE.
  metadataOperation?: string;

  // The table version for the Iceberg table. Defaults to 2.
  version?: string;
}

export function glue_CatalogTableOpenTableFormatInputIcebergInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The table version for the Iceberg table. Defaults to 2.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataOperation",
      "A required metadata operation. Can only be set to CREATE.",
      () => [],
      true,
      false,
    ),
  ];
}
