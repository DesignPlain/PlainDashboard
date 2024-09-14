import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_ResourceLfTagsTableWithColumns {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  // Set of column names for the table.
  columnNames?: Array<string>;

  // Name of the database for the table with columns resource. Unique to the Data Catalog.
  databaseName?: string;

  // Set of column names for the table to exclude. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid the provider reporting a difference.
  excludedColumnNames?: Array<string>;

  // Name of the table resource.
  name?: string;

  /*
Whether to use a column wildcard. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid the provider reporting a difference.

The following arguments are optional:
*/
  wildcard?: boolean;
}

export function lakeformation_ResourceLfTagsTableWithColumns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the database for the table with columns resource. Unique to the Data Catalog.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedColumnNames",
      "Set of column names for the table to exclude. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid the provider reporting a difference.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the table resource.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "wildcard",
      "Whether to use a column wildcard. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid the provider reporting a difference.\n\nThe following arguments are optional:",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columnNames",
      "Set of column names for the table.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
