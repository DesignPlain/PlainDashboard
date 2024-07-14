import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sql_DatabaseInstanceClone,
  sql_DatabaseInstanceClone_GetTypes,
} from "../types/sql_DatabaseInstanceClone";
import {
  sql_DatabaseInstanceReplicaConfiguration,
  sql_DatabaseInstanceReplicaConfiguration_GetTypes,
} from "../types/sql_DatabaseInstanceReplicaConfiguration";
import {
  sql_DatabaseInstanceSettings,
  sql_DatabaseInstanceSettings_GetTypes,
} from "../types/sql_DatabaseInstanceSettings";
import {
  sql_DatabaseInstanceRestoreBackupContext,
  sql_DatabaseInstanceRestoreBackupContext_GetTypes,
} from "../types/sql_DatabaseInstanceRestoreBackupContext";
import {
  sql_DatabaseInstanceIpAddress,
  sql_DatabaseInstanceIpAddress_GetTypes,
} from "../types/sql_DatabaseInstanceIpAddress";
import {
  sql_DatabaseInstanceServerCaCert,
  sql_DatabaseInstanceServerCaCert_GetTypes,
} from "../types/sql_DatabaseInstanceServerCaCert";

export interface DatabaseInstanceArgs {
  /*
The context needed to create this instance as a clone of another instance. When this field is set during
resource creation, this provider will attempt to clone another instance as indicated in the context. The
configuration is detailed below.
*/
  clone?: sql_DatabaseInstanceClone;

  /*
The region the instance will sit in. If a region is not provided in the resource definition,
the provider region will be used instead.

- - -
*/
  region?: string;

  // Initial root password. Can be updated. Required for MS SQL Server.
  rootPassword?: string;

  /*
The MySQL, PostgreSQL or
SQL Server version to use. Supported values include `MYSQL_5_6`,
`MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`,`POSTGRES_10`, `POSTGRES_11`,
`POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`, `POSTGRES_15`, `SQLSERVER_2017_STANDARD`,
`SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`.
`SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`,
`SQLSERVER_2019_WEB`.
[Database Version Policies](https://cloud.google.com/sql/docs/db-versions)
includes an up-to-date reference of supported versions.
*/
  databaseVersion?: string;

  // The type of the instance. The supported values are `SQL_INSTANCE_TYPE_UNSPECIFIED`, `CLOUD_SQL_INSTANCE`, `ON_PREMISES_INSTANCE` and `READ_REPLICA_INSTANCE`.
  instanceType?: string;

  // The current software version on the instance. This attribute can not be set during creation. Refer to `available_maintenance_versions` attribute to see what `maintenance_version` are available for upgrade. When this attribute gets updated, it will cause an instance restart. Setting a `maintenance_version` value that is older than the current one on the instance will be ignored.
  maintenanceVersion?: string;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` command that deletes the instance will fail. Defaults to `true`.
*/
  deletionProtection?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The configuration for replication. The
configuration is detailed below. Valid only for MySQL instances.
*/
  replicaConfiguration?: sql_DatabaseInstanceReplicaConfiguration;

  /*
The settings to use for the database. The
configuration is detailed below. Required if `clone` is not set.
*/
  settings?: sql_DatabaseInstanceSettings;

  /*
The full path to the encryption key used for the CMEK disk encryption.  Setting
up disk encryption currently requires manual steps outside of this provider.
The provided key must be in the same region as the SQL instance.  In order
to use this feature, a special kind of service account must be created and
granted permission on this key.  This step can currently only be done
manually, please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#service-account).
That service account needs the `Cloud KMS > Cloud KMS CryptoKey Encrypter/Decrypter` role on your
key - please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#grantkey).
*/
  encryptionKeyName?: string;

  /*
The name of the existing instance that will
act as the master in the replication setup. Note, this requires the master to
have `binary_log_enabled` set, as well as existing backups.
*/
  masterInstanceName?: string;

  /*
The name of the instance. If the name is left
blank, the provider will randomly generate one when the instance is first
created. This is done because after a name is used, it cannot be reused for
up to [one week](https://cloud.google.com/sql/docs/delete-instance).
*/
  name?: string;

  /*
The context needed to restore the database to a backup run. This field will
cause the provider to trigger the database to restore from the backup run indicated. The configuration is detailed below.
--NOTE:-- Restoring from a backup is an imperative action and not recommended via this provider. Adding or modifying this
block during resource creation/update will trigger the restore action after the resource is created/updated.
*/
  restoreBackupContext?: sql_DatabaseInstanceRestoreBackupContext;
}
export class DatabaseInstance extends Resource {
  // The list of all maintenance versions applicable on the instance.
  public availableMaintenanceVersions?: Array<string>;

  /*
The context needed to create this instance as a clone of another instance. When this field is set during
resource creation, this provider will attempt to clone another instance as indicated in the context. The
configuration is detailed below.
*/
  public clone?: sql_DatabaseInstanceClone;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `destroy` or `update` command that deletes the instance will fail. Defaults to `true`.
*/
  public deletionProtection?: boolean;

  // The dns name of the instance.
  public dnsName?: string;

  /*
The full path to the encryption key used for the CMEK disk encryption.  Setting
up disk encryption currently requires manual steps outside of this provider.
The provided key must be in the same region as the SQL instance.  In order
to use this feature, a special kind of service account must be created and
granted permission on this key.  This step can currently only be done
manually, please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#service-account).
That service account needs the `Cloud KMS > Cloud KMS CryptoKey Encrypter/Decrypter` role on your
key - please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#grantkey).
*/
  public encryptionKeyName?: string;

  //
  public ipAddresses?: Array<sql_DatabaseInstanceIpAddress>;

  /*
The name of the instance. If the name is left
blank, the provider will randomly generate one when the instance is first
created. This is done because after a name is used, it cannot be reused for
up to [one week](https://cloud.google.com/sql/docs/delete-instance).
*/
  public name?: string;

  /*
The service account email address assigned to the
instance.
*/
  public serviceAccountEmailAddress?: string;

  /*
The settings to use for the database. The
configuration is detailed below. Required if `clone` is not set.
*/
  public settings?: sql_DatabaseInstanceSettings;

  // The type of the instance. The supported values are `SQL_INSTANCE_TYPE_UNSPECIFIED`, `CLOUD_SQL_INSTANCE`, `ON_PREMISES_INSTANCE` and `READ_REPLICA_INSTANCE`.
  public instanceType?: string;

  // The first private (`PRIVATE`) IPv4 address assigned.
  public privateIpAddress?: string;

  // The first public (`PRIMARY`) IPv4 address assigned.
  public publicIpAddress?: string;

  // Initial root password. Can be updated. Required for MS SQL Server.
  public rootPassword?: string;

  /*
The connection name of the instance to be used in
connection strings. For example, when connecting with [Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/connect-admin-proxy).
*/
  public connectionName?: string;

  /*
The MySQL, PostgreSQL or
SQL Server version to use. Supported values include `MYSQL_5_6`,
`MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`,`POSTGRES_10`, `POSTGRES_11`,
`POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`, `POSTGRES_15`, `SQLSERVER_2017_STANDARD`,
`SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`.
`SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`,
`SQLSERVER_2019_WEB`.
[Database Version Policies](https://cloud.google.com/sql/docs/db-versions)
includes an up-to-date reference of supported versions.
*/
  public databaseVersion?: string;

  // The first IPv4 address of any type assigned.
  public firstIpAddress?: string;

  // The current software version on the instance. This attribute can not be set during creation. Refer to `available_maintenance_versions` attribute to see what `maintenance_version` are available for upgrade. When this attribute gets updated, it will cause an instance restart. Setting a `maintenance_version` value that is older than the current one on the instance will be ignored.
  public maintenanceVersion?: string;

  /*
The region the instance will sit in. If a region is not provided in the resource definition,
the provider region will be used instead.

- - -
*/
  public region?: string;

  //
  public serverCaCerts?: Array<sql_DatabaseInstanceServerCaCert>;

  /*
The name of the existing instance that will
act as the master in the replication setup. Note, this requires the master to
have `binary_log_enabled` set, as well as existing backups.
*/
  public masterInstanceName?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // the URI that points to the service attachment of the instance.
  public pscServiceAttachmentLink?: string;

  /*
The configuration for replication. The
configuration is detailed below. Valid only for MySQL instances.
*/
  public replicaConfiguration?: sql_DatabaseInstanceReplicaConfiguration;

  /*
The context needed to restore the database to a backup run. This field will
cause the provider to trigger the database to restore from the backup run indicated. The configuration is detailed below.
--NOTE:-- Restoring from a backup is an imperative action and not recommended via this provider. Adding or modifying this
block during resource creation/update will trigger the restore action after the resource is created/updated.
*/
  public restoreBackupContext?: sql_DatabaseInstanceRestoreBackupContext;

  // The URI of the created resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "rootPassword",
        "Initial root password. Can be updated. Required for MS SQL Server.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The type of the instance. The supported values are `SQL_INSTANCE_TYPE_UNSPECIFIED`, `CLOUD_SQL_INSTANCE`, `ON_PREMISES_INSTANCE` and `READ_REPLICA_INSTANCE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreBackupContext",
        "The context needed to restore the database to a backup run. This field will\ncause the provider to trigger the database to restore from the backup run indicated. The configuration is detailed below.\n**NOTE:** Restoring from a backup is an imperative action and not recommended via this provider. Adding or modifying this\nblock during resource creation/update will trigger the restore action after the resource is created/updated.",
        sql_DatabaseInstanceRestoreBackupContext_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clone",
        "The context needed to create this instance as a clone of another instance. When this field is set during\nresource creation, this provider will attempt to clone another instance as indicated in the context. The\nconfiguration is detailed below.",
        sql_DatabaseInstanceClone_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maintenanceVersion",
        "The current software version on the instance. This attribute can not be set during creation. Refer to `available_maintenance_versions` attribute to see what `maintenance_version` are available for upgrade. When this attribute gets updated, it will cause an instance restart. Setting a `maintenance_version` value that is older than the current one on the instance will be ignored.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "replicaConfiguration",
        "The configuration for replication. The\nconfiguration is detailed below. Valid only for MySQL instances.",
        sql_DatabaseInstanceReplicaConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "settings",
        "The settings to use for the database. The\nconfiguration is detailed below. Required if `clone` is not set.",
        sql_DatabaseInstanceSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryptionKeyName",
        "The full path to the encryption key used for the CMEK disk encryption.  Setting\nup disk encryption currently requires manual steps outside of this provider.\nThe provided key must be in the same region as the SQL instance.  In order\nto use this feature, a special kind of service account must be created and\ngranted permission on this key.  This step can currently only be done\nmanually, please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#service-account).\nThat service account needs the `Cloud KMS > Cloud KMS CryptoKey Encrypter/Decrypter` role on your\nkey - please see [this step](https://cloud.google.com/sql/docs/mysql/configure-cmek#grantkey).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterInstanceName",
        "The name of the existing instance that will\nact as the master in the replication setup. Note, this requires the master to\nhave `binary_log_enabled` set, as well as existing backups.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the instance. If the name is left\nblank, the provider will randomly generate one when the instance is first\ncreated. This is done because after a name is used, it cannot be reused for\nup to [one week](https://cloud.google.com/sql/docs/delete-instance).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region the instance will sit in. If a region is not provided in the resource definition,\nthe provider region will be used instead.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseVersion",
        "The MySQL, PostgreSQL or\nSQL Server version to use. Supported values include `MYSQL_5_6`,\n`MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`,`POSTGRES_10`, `POSTGRES_11`,\n`POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`, `POSTGRES_15`, `SQLSERVER_2017_STANDARD`,\n`SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`.\n`SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`,\n`SQLSERVER_2019_WEB`.\n[Database Version Policies](https://cloud.google.com/sql/docs/db-versions)\nincludes an up-to-date reference of supported versions.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow the provider to destroy the instance. Unless this field is set to false\nin state, a `destroy` or `update` command that deletes the instance will fail. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
