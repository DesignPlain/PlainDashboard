import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_getPermissionsDataCellsFilter {
  // The name of the database.
  databaseName?: string;

  // The name of the data cells filter.
  name?: string;

  // The ID of the Data Catalog.
  tableCatalogId?: string;

  // The name of the table.
  tableName?: string;
}

export function lakeformation_getPermissionsDataCellsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of the database.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the data cells filter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableCatalogId",
      "The ID of the Data Catalog.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the table.",
      () => [],
      true,
      false,
    ),
  ];
}
