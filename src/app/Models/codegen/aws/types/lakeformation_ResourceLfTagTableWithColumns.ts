import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lakeformation_ResourceLfTagTableWithColumnsColumnWildcard,
  lakeformation_ResourceLfTagTableWithColumnsColumnWildcard_GetTypes,
} from "./lakeformation_ResourceLfTagTableWithColumnsColumnWildcard";

export interface lakeformation_ResourceLfTagTableWithColumns {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  // Set of column names for the table.
  columnNames?: Array<string>;

  // Option to add column wildcard. See Column Wildcard for more details.
  columnWildcard?: lakeformation_ResourceLfTagTableWithColumnsColumnWildcard;

  // Name of the database for the table with columns resource. Unique to the Data Catalog.
  databaseName?: string;

  /*
Name of the table resource.

The following arguments are optional:
*/
  name?: string;
}

export function lakeformation_ResourceLfTagTableWithColumns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columnNames",
      "Set of column names for the table.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "columnWildcard",
      "Option to add column wildcard. See Column Wildcard for more details.",
      () =>
        lakeformation_ResourceLfTagTableWithColumnsColumnWildcard_GetTypes(),
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
      InputType.String,
      "name",
      "Name of the table resource.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      false,
      false,
    ),
  ];
}
