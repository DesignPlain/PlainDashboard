import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatabaseArgs {
  /*
The name of the Cloud SQL instance. This does not include the project
ID.


- - -
*/
  instance?: string;

  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of `UTF8` at creation time.
*/
  charset?: string;

  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of `en_US.UTF8` at creation time.
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
export class Database extends Resource {
  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of `UTF8` at creation time.
*/
  public charset?: string;

  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of `en_US.UTF8` at creation time.
*/
  public collation?: string;

  /*
The deletion policy for the database. Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
values are: "ABANDON", "DELETE". Defaults to "DELETE".
*/
  public deletionPolicy?: string;

  /*
The name of the Cloud SQL instance. This does not include the project
ID.


- - -
*/
  public instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the database in the Cloud SQL instance.\nThis does not include the project ID or instance name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "charset",
        "The charset value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)\nfor more details and supported values. Postgres databases only support\na value of `UTF8` at creation time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "collation",
        "The collation value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)\nfor more details and supported values. Postgres databases only support\na value of `en_US.UTF8` at creation time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        'The deletion policy for the database. Setting ABANDON allows the resource\nto be abandoned rather than deleted. This is useful for Postgres, where databases cannot be\ndeleted from the API if there are users other than cloudsqlsuperuser with access. Possible\nvalues are: "ABANDON", "DELETE". Defaults to "DELETE".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name of the Cloud SQL instance. This does not include the project\nID.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
