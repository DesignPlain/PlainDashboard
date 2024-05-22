import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CatalogDatabaseTargetDatabase {
  // Region of the target database.
  region?: string;

  // ID of the Data Catalog in which the database resides.
  catalogId?: string;

  // Name of the catalog database.
  databaseName?: string;
}

export function glue_CatalogDatabaseTargetDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the target database.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "ID of the Data Catalog in which the database resides.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the catalog database.",
      [],
      true,
      false,
    ),
  ];
}
