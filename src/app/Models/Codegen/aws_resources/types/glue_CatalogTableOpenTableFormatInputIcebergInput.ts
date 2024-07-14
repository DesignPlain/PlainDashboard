import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_CatalogTableOpenTableFormatInputIcebergInput {
  // The table version for the Iceberg table. Defaults to 2.
  version?: string;

  // A required metadata operation. Can only be set to CREATE.
  metadataOperation?: string;
}

export function glue_CatalogTableOpenTableFormatInputIcebergInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The table version for the Iceberg table. Defaults to 2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataOperation",
      "A required metadata operation. Can only be set to CREATE.",
      [],
      true,
      false,
    ),
  ];
}
