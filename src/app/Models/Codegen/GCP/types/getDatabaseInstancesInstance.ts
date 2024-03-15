import { getDatabaseInstancesInstanceIpAddress } from "./getDatabaseInstancesInstanceIpAddress";
import { getDatabaseInstancesInstanceServerCaCert } from "./getDatabaseInstancesInstanceServerCaCert";
import { getDatabaseInstancesInstanceReplicaConfiguration } from "./getDatabaseInstancesInstanceReplicaConfiguration";
import { getDatabaseInstancesInstanceSetting } from "./getDatabaseInstancesInstanceSetting";
import { getDatabaseInstancesInstanceRestoreBackupContext } from "./getDatabaseInstancesInstanceRestoreBackupContext";
import { getDatabaseInstancesInstanceClone } from "./getDatabaseInstancesInstanceClone";

export interface getDatabaseInstancesInstance {
  // The configuration for replication.
  ReplicaConfigurations?: Array<getDatabaseInstancesInstanceReplicaConfiguration>;

  // The service account email address assigned to the instance.
  ServiceAccountEmailAddress?: string;

  // The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
  ConnectionName?: string;

  //
  Name?: string;

  //
  PrivateIpAddress?: string;

  // The link to service attachment of PSC instance.
  PscServiceAttachmentLink?: string;

  // To filter out the Cloud SQL instances which are located in the specified region.
  Region?: string;

  // The settings to use for the database. The configuration is detailed below.
  Settings?: Array<getDatabaseInstancesInstanceSetting>;

  // The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
  InstanceType?: string;

  // The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  MasterInstanceName?: string;

  //
  PublicIpAddress?: string;

  // Initial root password. Required for MS SQL Server.
  RootPassword?: string;

  // The URI of the created resource.
  SelfLink?: string;

  // The ID of the project in which the resources belong. If it is not provided, the provider project is used.
  Project?: string;

  //
  RestoreBackupContexts?: Array<getDatabaseInstancesInstanceRestoreBackupContext>;

  // Available Maintenance versions.
  AvailableMaintenanceVersions?: Array<string>;

  // Configuration for creating a new instance as a clone of another instance.
  Clones?: Array<getDatabaseInstancesInstanceClone>;

  //
  DeletionProtection?: boolean;

  // The dns name of the instance.
  DnsName?: string;

  //
  IpAddresses?: Array<getDatabaseInstancesInstanceIpAddress>;

  // To filter out the Cloud SQL instances which are of the specified database version.
  DatabaseVersion?: string;

  //
  EncryptionKeyName?: string;

  //
  FirstIpAddress?: string;

  // Maintenance version.
  MaintenanceVersion?: string;

  //
  ServerCaCerts?: Array<getDatabaseInstancesInstanceServerCaCert>;
}
