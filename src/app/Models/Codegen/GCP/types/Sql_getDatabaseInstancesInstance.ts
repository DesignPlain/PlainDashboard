import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_getDatabaseInstancesInstanceReplicaConfiguration,
  Sql_getDatabaseInstancesInstanceReplicaConfiguration_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceReplicaConfiguration";
import {
  Sql_getDatabaseInstancesInstanceServerCaCert,
  Sql_getDatabaseInstancesInstanceServerCaCert_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceServerCaCert";
import {
  Sql_getDatabaseInstancesInstanceIpAddress,
  Sql_getDatabaseInstancesInstanceIpAddress_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceIpAddress";
import {
  Sql_getDatabaseInstancesInstanceRestoreBackupContext,
  Sql_getDatabaseInstancesInstanceRestoreBackupContext_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceRestoreBackupContext";
import {
  Sql_getDatabaseInstancesInstanceSetting,
  Sql_getDatabaseInstancesInstanceSetting_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSetting";
import {
  Sql_getDatabaseInstancesInstanceClone,
  Sql_getDatabaseInstancesInstanceClone_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceClone";

export interface Sql_getDatabaseInstancesInstance {
  // Available Maintenance versions.
  AvailableMaintenanceVersions?: Array<string>;

  // The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
  ConnectionName?: string;

  //
  Name?: string;

  //
  PrivateIpAddress?: string;

  // The configuration for replication.
  ReplicaConfigurations?: Array<Sql_getDatabaseInstancesInstanceReplicaConfiguration>;

  //
  ServerCaCerts?: Array<Sql_getDatabaseInstancesInstanceServerCaCert>;

  //
  IpAddresses?: Array<Sql_getDatabaseInstancesInstanceIpAddress>;

  // The link to service attachment of PSC instance.
  PscServiceAttachmentLink?: string;

  //
  RestoreBackupContexts?: Array<Sql_getDatabaseInstancesInstanceRestoreBackupContext>;

  // Initial root password. Required for MS SQL Server.
  RootPassword?: string;

  // The URI of the created resource.
  SelfLink?: string;

  // The service account email address assigned to the instance.
  ServiceAccountEmailAddress?: string;

  // The settings to use for the database. The configuration is detailed below.
  Settings?: Array<Sql_getDatabaseInstancesInstanceSetting>;

  // Configuration for creating a new instance as a clone of another instance.
  Clones?: Array<Sql_getDatabaseInstancesInstanceClone>;

  //
  DeletionProtection?: boolean;

  // The dns name of the instance.
  DnsName?: string;

  // The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  MasterInstanceName?: string;

  // The ID of the project in which the resources belong. If it is not provided, the provider project is used.
  Project?: string;

  //
  PublicIpAddress?: string;

  // To filter out the Cloud SQL instances which are located in the specified region.
  Region?: string;

  // To filter out the Cloud SQL instances which are of the specified database version.
  DatabaseVersion?: string;

  //
  EncryptionKeyName?: string;

  //
  FirstIpAddress?: string;

  // The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
  InstanceType?: string;

  // Maintenance version.
  MaintenanceVersion?: string;
}

export function Sql_getDatabaseInstancesInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SelfLink",
      "The URI of the created resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatabaseVersion",
      "To filter out the Cloud SQL instances which are of the specified database version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ReplicaConfigurations",
      "The configuration for replication.",
      Sql_getDatabaseInstancesInstanceReplicaConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RestoreBackupContexts",
      "",
      Sql_getDatabaseInstancesInstanceRestoreBackupContext_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmailAddress",
      "The service account email address assigned to the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project in which the resources belong. If it is not provided, the provider project is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "FirstIpAddress", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "DeletionProtection",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DnsName",
      "The dns name of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MasterInstanceName",
      "The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectionName",
      "The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Name", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "PrivateIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServerCaCerts",
      "",
      Sql_getDatabaseInstancesInstanceServerCaCert_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpAddresses",
      "",
      Sql_getDatabaseInstancesInstanceIpAddress_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKeyName",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceType",
      "The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaintenanceVersion",
      "Maintenance version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicIpAddress",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Region",
      "To filter out the Cloud SQL instances which are located in the specified region.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AvailableMaintenanceVersions",
      "Available Maintenance versions.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PscServiceAttachmentLink",
      "The link to service attachment of PSC instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RootPassword",
      "Initial root password. Required for MS SQL Server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Settings",
      "The settings to use for the database. The configuration is detailed below.",
      Sql_getDatabaseInstancesInstanceSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Clones",
      "Configuration for creating a new instance as a clone of another instance.",
      Sql_getDatabaseInstancesInstanceClone_GetTypes(),
      true,
      false,
    ),
  ];
}
