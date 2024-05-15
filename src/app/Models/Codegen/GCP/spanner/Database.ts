import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Spanner_DatabaseEncryptionConfig,
  Spanner_DatabaseEncryptionConfig_GetTypes,
} from "../types/Spanner_DatabaseEncryptionConfig";

export interface DatabaseArgs {
  /*
The retention period for the database. The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to `ddl` that
update the database's version_retention_period.
*/
  VersionRetentionPeriod?: string;

  /*
The dialect of the Cloud Spanner Database.
If it is not provided, "GOOGLE_STANDARD_SQL" will be used.
Possible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.
*/
  DatabaseDialect?: string;

  /*
Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the
"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from
deletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all
interfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the
database. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.
*/
  EnableDropProtection?: boolean;

  /*
Encryption configuration for the database
Structure is documented below.
*/
  EncryptionConfig?: Spanner_DatabaseEncryptionConfig;

  /*
The instance to create the database on.


- - -
*/
  Instance?: string;

  /*
A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]-[a-z0-9].
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.
*/
  Ddls?: Array<string>;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` that would delete the instance will fail.
*/
  DeletionProtection?: boolean;
}
export class Database extends Resource {
  /*
The instance to create the database on.


- - -
*/
  public Instance?: string;

  // An explanation of the status of the database.
  public State?: string;

  /*
The retention period for the database. The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to `ddl` that
update the database's version_retention_period.
*/
  public VersionRetentionPeriod?: string;

  /*
The dialect of the Cloud Spanner Database.
If it is not provided, "GOOGLE_STANDARD_SQL" will be used.
Possible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.
*/
  public DatabaseDialect?: string;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` that would delete the instance will fail.
*/
  public DeletionProtection?: boolean;

  /*
Encryption configuration for the database
Structure is documented below.
*/
  public EncryptionConfig?: Spanner_DatabaseEncryptionConfig;

  /*
A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]-[a-z0-9].
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.
*/
  public Ddls?: Array<string>;

  /*
Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the
"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from
deletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all
interfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the
database. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.
*/
  public EnableDropProtection?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "VersionRetentionPeriod",
        "The retention period for the database. The retention period must be between 1 hour\nand 7 days, and can be specified in days, hours, minutes, or seconds. For example,\nthe values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.\nIf this property is used, you must avoid adding new DDL statements to `ddl` that\nupdate the database's version_retention_period.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseDialect",
        'The dialect of the Cloud Spanner Database.\nIf it is not provided, "GOOGLE_STANDARD_SQL" will be used.\nPossible values are: `GOOGLE_STANDARD_SQL`, `POSTGRESQL`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionConfig",
        "Encryption configuration for the database\nStructure is documented below.",
        Spanner_DatabaseEncryptionConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Ddls",
        "An optional list of DDL statements to run inside the newly created\ndatabase. Statements can create tables, indexes, etc. These statements\nexecute atomically with the creation of the database: if there is an\nerror in any statement, the database is not created.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeletionProtection",
        "Whether or not to allow the provider to destroy the instance. Unless this field is set to false\nin state, a `destroy` or `update` that would delete the instance will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableDropProtection",
        'Whether drop protection is enabled for this database. Defaults to false. Drop protection is different from the\n"deletion_protection" attribute in the following ways: (1) "deletion_protection" only protects the database from\ndeletions in Terraform. whereas setting “enableDropProtection” to true protects the database from deletions in all\ninterfaces. (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the\ndatabase. "deletion_protection" attribute does not provide protection against the deletion of the parent instance.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The instance to create the database on.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique identifier for the database, which cannot be changed after\nthe instance is created. Values are of the form [a-z][-a-z0-9]*[a-z0-9].",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
