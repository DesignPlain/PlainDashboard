import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CatalogTableTargetTable {
  // Name of the target table.
  name?: string;

  // Region of the target table.
  region?: string;

  // ID of the Data Catalog in which the table resides.
  catalogId?: string;

  // Name of the catalog database that contains the target table.
  databaseName?: string;
}

export function glue_CatalogTableTargetTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the target table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the target table.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "ID of the Data Catalog in which the table resides.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the catalog database that contains the target table.",
      [],
      true,
      false,
    ),
  ];
}
