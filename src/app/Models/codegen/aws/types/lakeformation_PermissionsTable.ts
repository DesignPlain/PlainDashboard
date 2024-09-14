import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_PermissionsTable {
  // Name of the database for the table. Unique to a Data Catalog.
  databaseName?: string;

  // Name of the table.
  name?: string;

  /*
Whether to use a wildcard representing every table under a database. Defaults to `false`.

The following arguments are optional:
*/
  wildcard?: boolean;

  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;
}

export function lakeformation_PermissionsTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the table.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "wildcard",
      "Whether to use a wildcard representing every table under a database. Defaults to `false`.\n\nThe following arguments are optional:",
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
      InputType.String,
      "databaseName",
      "Name of the database for the table. Unique to a Data Catalog.",
      () => [],
      true,
      true,
    ),
  ];
}
