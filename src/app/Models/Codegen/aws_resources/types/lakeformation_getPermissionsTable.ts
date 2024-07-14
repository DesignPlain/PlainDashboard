import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lakeformation_getPermissionsTable {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  /*
Name of the database for the table. Unique to a Data Catalog.

The following arguments are optional:
*/
  databaseName?: string;

  // Name of the table. At least one of `name` or `wildcard` is required.
  name?: string;

  // Whether to use a wildcard representing every table under a database. At least one of `name` or `wildcard` is required. Defaults to `false`.
  wildcard?: boolean;
}

export function lakeformation_getPermissionsTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the database for the table. Unique to a Data Catalog.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the table. At least one of `name` or `wildcard` is required.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "wildcard",
      "Whether to use a wildcard representing every table under a database. At least one of `name` or `wildcard` is required. Defaults to `false`.",
      [],
      false,
      false,
    ),
  ];
}
