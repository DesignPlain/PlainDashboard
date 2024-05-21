import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabasesDatabase {
  // The name of the Cloud SQL database instance in which the database belongs.
  instance?: string;

  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  name?: string;

  /*
The ID of the project in which the instance belongs.

> --Note-- This datasource performs client-side sorting to provide consistent ordering of the databases.
*/
  project?: string;

  //
  selfLink?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of 'UTF8' at creation time.
*/
  charset?: string;

  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of 'en_US.UTF8' at creation time.
*/
  collation?: string;

  /*
The deletion policy for the database. Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
values are: "ABANDON", "DELETE". Defaults to "DELETE".
*/
  deletionPolicy?: string;
}

export function sql_getDatabasesDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instance",
      "The name of the Cloud SQL database instance in which the database belongs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the database in the Cloud SQL instance.\nThis does not include the project ID or instance name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project in which the instance belongs.\n\n> **Note** This datasource performs client-side sorting to provide consistent ordering of the databases.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "selfLink", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "charset",
      "The charset value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)\nfor more details and supported values. Postgres databases only support\na value of 'UTF8' at creation time.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collation",
      "The collation value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)\nfor more details and supported values. Postgres databases only support\na value of 'en_US.UTF8' at creation time.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deletionPolicy",
      'The deletion policy for the database. Setting ABANDON allows the resource\nto be abandoned rather than deleted. This is useful for Postgres, where databases cannot be\ndeleted from the API if there are users other than cloudsqlsuperuser with access. Possible\nvalues are: "ABANDON", "DELETE". Defaults to "DELETE".',
      [],
      true,
      false,
    ),
  ];
}
