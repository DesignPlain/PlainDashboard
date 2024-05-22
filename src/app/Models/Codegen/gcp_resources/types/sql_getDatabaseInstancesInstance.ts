import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_getDatabaseInstancesInstanceReplicaConfiguration,
  sql_getDatabaseInstancesInstanceReplicaConfiguration_GetTypes,
} from "./sql_getDatabaseInstancesInstanceReplicaConfiguration";
import {
  sql_getDatabaseInstancesInstanceServerCaCert,
  sql_getDatabaseInstancesInstanceServerCaCert_GetTypes,
} from "./sql_getDatabaseInstancesInstanceServerCaCert";
import {
  sql_getDatabaseInstancesInstanceIpAddress,
  sql_getDatabaseInstancesInstanceIpAddress_GetTypes,
} from "./sql_getDatabaseInstancesInstanceIpAddress";
import {
  sql_getDatabaseInstancesInstanceRestoreBackupContext,
  sql_getDatabaseInstancesInstanceRestoreBackupContext_GetTypes,
} from "./sql_getDatabaseInstancesInstanceRestoreBackupContext";
import {
  sql_getDatabaseInstancesInstanceSetting,
  sql_getDatabaseInstancesInstanceSetting_GetTypes,
} from "./sql_getDatabaseInstancesInstanceSetting";
import {
  sql_getDatabaseInstancesInstanceClone,
  sql_getDatabaseInstancesInstanceClone_GetTypes,
} from "./sql_getDatabaseInstancesInstanceClone";

export interface sql_getDatabaseInstancesInstance {
  //
  deletionProtection?: boolean;

  //
  encryptionKeyName?: string;

  //
  firstIpAddress?: string;

  // The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
  instanceType?: string;

  // Maintenance version.
  maintenanceVersion?: string;

  //
  privateIpAddress?: string;

  // The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  masterInstanceName?: string;

  // The ID of the project in which the resources belong. If it is not provided, the provider project is used.
  project?: string;

  // The link to service attachment of PSC instance.
  pscServiceAttachmentLink?: string;

  //
  publicIpAddress?: string;

  // To filter out the Cloud SQL instances which are located in the specified region.
  region?: string;

  // The settings to use for the database. The configuration is detailed below.
  settings?: Array<sql_getDatabaseInstancesInstanceSetting>;

  // Initial root password. Required for MS SQL Server.
  rootPassword?: string;

  // The URI of the created resource.
  selfLink?: string;

  // Available Maintenance versions.
  availableMaintenanceVersions?: Array<string>;

  // Configuration for creating a new instance as a clone of another instance.
  clones?: Array<sql_getDatabaseInstancesInstanceClone>;

  // The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
  connectionName?: string;

  // To filter out the Cloud SQL instances which are of the specified database version.
  databaseVersion?: string;

  //
  name?: string;

  // The configuration for replication.
  replicaConfigurations?: Array<sql_getDatabaseInstancesInstanceReplicaConfiguration>;

  //
  serverCaCerts?: Array<sql_getDatabaseInstancesInstanceServerCaCert>;

  // The service account email address assigned to the instance.
  serviceAccountEmailAddress?: string;

  // The dns name of the instance.
  dnsName?: string;

  //
  ipAddresses?: Array<sql_getDatabaseInstancesInstanceIpAddress>;

  //
  restoreBackupContexts?: Array<sql_getDatabaseInstancesInstanceRestoreBackupContext>;
}

export function sql_getDatabaseInstancesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "restoreBackupContexts",
      "",
      sql_getDatabaseInstancesInstanceRestoreBackupContext_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKeyName",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfLink",
      "The URI of the created resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availableMaintenanceVersions",
      "Available Maintenance versions.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "replicaConfigurations",
      "The configuration for replication.",
      sql_getDatabaseInstancesInstanceReplicaConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The dns name of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "firstIpAddress", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project in which the resources belong. If it is not provided, the provider project is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "settings",
      "The settings to use for the database. The configuration is detailed below.",
      sql_getDatabaseInstancesInstanceSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootPassword",
      "Initial root password. Required for MS SQL Server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmailAddress",
      "The service account email address assigned to the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deletionProtection",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pscServiceAttachmentLink",
      "The link to service attachment of PSC instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "clones",
      "Configuration for creating a new instance as a clone of another instance.",
      sql_getDatabaseInstancesInstanceClone_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      sql_getDatabaseInstancesInstanceIpAddress_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceVersion",
      "Maintenance version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterInstanceName",
      "The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "To filter out the Cloud SQL instances which are located in the specified region.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseVersion",
      "To filter out the Cloud SQL instances which are of the specified database version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serverCaCerts",
      "",
      sql_getDatabaseInstancesInstanceServerCaCert_GetTypes(),
      true,
      false,
    ),
  ];
}
