import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_getPermissionsTableWithColumns {
  // Set of column names for the table. At least one of `column_names` or `excluded_column_names` is required.
  columnNames?: Array<string>;

  // Name of the database for the table with columns resource. Unique to the Data Catalog.
  databaseName?: string;

  // Set of column names for the table to exclude. At least one of `column_names` or `excluded_column_names` is required.
  excludedColumnNames?: Array<string>;

  /*
Name of the table resource.

The following arguments are optional:
*/
  name?: string;

  // Whether to use a wildcard representing every table under a database. At least one of `name` or `wildcard` is required. Defaults to `false`.
  wildcard?: boolean;

  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;
}

export function lakeformation_getPermissionsTableWithColumns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columnNames",
      "Set of column names for the table. At least one of `column_names` or `excluded_column_names` is required.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the database for the table with columns resource. Unique to the Data Catalog.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedColumnNames",
      "Set of column names for the table to exclude. At least one of `column_names` or `excluded_column_names` is required.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the table resource.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "wildcard",
      "Whether to use a wildcard representing every table under a database. At least one of `name` or `wildcard` is required. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
