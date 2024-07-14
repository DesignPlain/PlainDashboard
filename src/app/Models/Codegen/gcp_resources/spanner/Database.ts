import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  spanner_DatabaseEncryptionConfig,
  spanner_DatabaseEncryptionConfig_GetTypes,
} from "../types/spanner_DatabaseEncryptionConfig";

export interface DatabaseArgs {
  /*
The retention period for the database. The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to `ddl` that
update the database's version_retention_period.
*/
  versionRetentionPeriod?: string;

  /*
The dialect of the Cloud Spanner Database.
If it is not provided, "GOOGLE_STANDARD_SQL" will be used.
Possible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.
*/
  databaseDialect?: string;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` that would delete the instance will fail.
*/
  deletionProtection?: boolean;

  /*
Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the
"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from
deletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all
interfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the
database. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.
*/
  enableDropProtection?: boolean;

  /*
A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]-[a-z0-9].
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.
*/
  ddls?: Array<string>;

  /*
Encryption configuration for the database
Structure is documented below.
*/
  encryptionConfig?: spanner_DatabaseEncryptionConfig;

  /*
The instance to create the database on.


- - -
*/
  instance?: string;
}
export class Database extends Resource {
  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` that would delete the instance will fail.
*/
  public deletionProtection?: boolean;

  /*
Encryption configuration for the database
Structure is documented below.
*/
  public encryptionConfig?: spanner_DatabaseEncryptionConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // An explanation of the status of the database.
  public state?: string;

  /*
The retention period for the database. The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to `ddl` that
update the database's version_retention_period.
*/
  public versionRetentionPeriod?: string;

  /*
The dialect of the Cloud Spanner Database.
If it is not provided, "GOOGLE_STANDARD_SQL" will be used.
Possible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.
*/
  public databaseDialect?: string;

  /*
An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.
*/
  public ddls?: Array<string>;

  /*
Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the
"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from
deletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all
interfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the
database. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.
*/
  public enableDropProtection?: boolean;

  /*
The instance to create the database on.


- - -
*/
  public instance?: string;

  /*
A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]-[a-z0-9].
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "versionRetentionPeriod",
        "The retention period for the database. The retention period must be between 1 hour\nand 7 days, and can be specified in days, hours, minutes, or seconds. For example,\nthe values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.\nIf this property is used, you must avoid adding new DDL statements to `ddl` that\nupdate the database's version_retention_period.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "Encryption configuration for the database\nStructure is documented below.",
        spanner_DatabaseEncryptionConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The instance to create the database on.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseDialect",
        'The dialect of the Cloud Spanner Database.\nIf it is not provided, "GOOGLE_STANDARD_SQL" will be used.\nPossible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow the provider to destroy the instance. Unless this field is set to false\nin state, a `destroy` or `update` that would delete the instance will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDropProtection",
        'Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the\n"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from\ndeletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all\ninterfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the\ndatabase. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique identifier for the database, which cannot be changed after\nthe instance is created. Values are of the form [a-z][-a-z0-9]*[a-z0-9].",
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
        InputType.Array,
        "ddls",
        "An optional list of DDL statements to run inside the newly created\ndatabase. Statements can create tables, indexes, etc. These statements\nexecute atomically with the creation of the database: if there is an\nerror in any statement, the database is not created.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
