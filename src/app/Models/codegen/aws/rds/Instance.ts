import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rds_InstanceBlueGreenUpdate,
  rds_InstanceBlueGreenUpdate_GetTypes,
} from "../types/rds_InstanceBlueGreenUpdate";
import {
  rds_InstanceRestoreToPointInTime,
  rds_InstanceRestoreToPointInTime_GetTypes,
} from "../types/rds_InstanceRestoreToPointInTime";
import {
  rds_InstanceS3Import,
  rds_InstanceS3Import_GetTypes,
} from "../types/rds_InstanceS3Import";
import {
  rds_InstanceListenerEndpoint,
  rds_InstanceListenerEndpoint_GetTypes,
} from "../types/rds_InstanceListenerEndpoint";
import {
  rds_InstanceMasterUserSecret,
  rds_InstanceMasterUserSecret_GetTypes,
} from "../types/rds_InstanceMasterUserSecret";

export interface InstanceArgs {
  /*
Indicates that major version
upgrades are allowed. Changing this parameter does not result in an outage and
the change is asynchronously applied as soon as possible.
*/
  allowMajorVersionUpgrade?: boolean;

  /*
Enables low-downtime updates using [RDS Blue/Green deployments][blue-green].
See `blue_green_update` below.
*/
  blueGreenUpdate?: rds_InstanceBlueGreenUpdate;

  // The database engine to use. For supported values, see the Engine parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine must match the DB cluster's engine'. For information on the difference between the available Aurora MySQL engines see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html) in the Amazon RDS User Guide.
  engine?: string;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00". See [RDS
Maintenance Window
docs](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow)
for more information.
*/
  maintenanceWindow?: string;

  /*
The character set name to use for DB encoding in Oracle and Microsoft SQL instances (collation).
This can't be changed.
See [Oracle Character Sets Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html) or
[Server-Level Collation for Microsoft SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.Collation.html) for more information.
Cannot be set  with `replicate_source_db`, `restore_to_point_in_time`, `s3_import`, or `snapshot_identifier`.
*/
  characterSetName?: string;

  // Copy all Instance `tags` to snapshots. Default is `false`.
  copyTagsToSnapshot?: boolean;

  /*
Indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. See [CoIP for RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html#rds-on-outposts.coip) for more information.

> --NOTE:-- Removing the `replicate_source_db` attribute from an existing RDS
Replicate database managed by the provider will promote the database to a fully
standalone database.
*/
  customerOwnedIpEnabled?: boolean;

  /*
List of VPC security groups to
associate.
*/
  vpcSecurityGroupIds?: Array<string>;

  // The identifier of the CA certificate for the DB instance.
  caCertIdentifier?: string;

  // The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. Note that this does not apply for Oracle or SQL Server engines. See the [AWS documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/create-db-instance.html) for more details on what applies for those engines. If you are providing an Oracle db name, it needs to be in all upper case. Cannot be specified for a replica.
  dbName?: string;

  // Use a dedicated log volume (DLV) for the DB instance. Requires Provisioned IOPS. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.dlv) for more details.
  dedicatedLogVolume?: boolean;

  // The ARN for the Secrets Manager secret with the self managed Active Directory credentials for the user joining the domain. Conflicts with `domain` and `domain_iam_role_name`.
  domainAuthSecretArn?: string;

  // Specifies whether Performance Insights are enabled. Defaults to false.
  performanceInsightsEnabled?: boolean;

  /*
One of "standard" (magnetic), "gp2" (general
purpose SSD), "gp3" (general purpose SSD that needs `iops` independently)
or "io1" (provisioned IOPS SSD). The default is "io1" if `iops` is specified,
"gp2" if not.
*/
  storageType?: string;

  // The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  customIamInstanceProfile?: string;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  identifierPrefix?: string;

  /*
Determines whether a final DB snapshot is
created before the DB instance is deleted. If true is specified, no DBSnapshot
is created. If false is specified, a DB snapshot is created before the DB
instance is deleted, using the value from `final_snapshot_identifier`. Default
is `false`.
*/
  skipFinalSnapshot?: boolean;

  /*
Specifies whether or not to create this
database from a snapshot. This correlates to the snapshot ID you'd find in the
RDS console, e.g: rds:production-2015-06-26-06-05.
*/
  snapshotIdentifier?: string;

  // The AZ for the RDS instance.
  availabilityZone?: string;

  // The IPv4 DNS IP addresses of your primary and secondary self managed Active Directory domain controllers. Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Conflicts with `domain` and `domain_iam_role_name`.
  domainDnsIps?: Array<string>;

  // Set of log types to enable for exporting to CloudWatch logs. If omitted, no logs will be exported. For supported values, see the EnableCloudwatchLogsExports.member.N parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html).
  enabledCloudwatchLogsExports?: Array<string>;

  //
  name?: string;

  // The network type of the DB instance. Valid values: `IPV4`, `DUAL`.
  networkType?: string;

  /*
Indicates that minor engine upgrades
will be applied automatically to the DB instance during the maintenance window.
Defaults to true.
*/
  autoMinorVersionUpgrade?: boolean;

  /*
Name of DB subnet group. DB instance will
be created in the VPC associated with the DB subnet group. If unspecified, will
be created in the `default` VPC, or in EC2 Classic, if available. When working
with read replicas, it should be specified only if the source database
specifies an instance in another AWS Region. See [DBSubnetGroupName in API
action CreateDBInstanceReadReplica](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html)
for additional read replica constraints.
*/
  dbSubnetGroupName?: string;

  /*
The name of your final DB snapshot
when this DB instance is deleted. Must be provided if `skip_final_snapshot` is
set to `false`. The value must begin with a letter, only contain alphanumeric characters and hyphens, and not end with a hyphen or contain two consecutive hyphens. Must not be provided when deleting a read replica.
*/
  finalSnapshotIdentifier?: string;

  /*
Specifies whether mappings of AWS Identity and Access Management (IAM) accounts to database
accounts is enabled.
*/
  iamDatabaseAuthenticationEnabled?: boolean;

  // Name of the DB parameter group to associate.
  parameterGroupName?: string;

  /*
Time zone of the DB instance. `timezone` is currently
only supported by Microsoft SQL Server. The `timezone` can only be set on
creation. See [MSSQL User
Guide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone)
for more information.
*/
  timezone?: string;

  // Whether to upgrade the storage file system configuration on the read replica. Can only be set with `replicate_source_db`.
  upgradeStorageConfig?: boolean;

  /*
The days to retain backups for.
Must be between `0` and `35`.
Default is `0`.
Must be greater than `0` if the database is used as a source for a [Read Replica][instance-replication],
uses low-downtime updates,
or will use [RDS Blue/Green deployments][blue-green].
*/
  backupRetentionPeriod?: number;

  // The ID of the Directory Service Active Directory domain to create the instance in. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.
  domain?: string;

  // The port on which the DB accepts connections.
  port?: number;

  /*
Specifies whether the replica is in either `mounted` or `open-read-only` mode. This attribute
is only supported by Oracle instances. Oracle replicas operate in `open-read-only` mode unless otherwise specified. See [Working with Oracle Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) for more information.
*/
  replicaMode?: string;

  // The storage throughput value for the DB instance. Can only be set when `storage_type` is `"gp3"`. Cannot be specified if the `allocated_storage` value is below a per-`engine` threshold. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.
  storageThroughput?: number;

  // The name of the RDS instance, if omitted, this provider will assign a random, unique identifier. Required if `restore_to_point_in_time` is specified.
  identifier?: string;

  // Specifies if the RDS instance is multi-AZ
  multiAz?: boolean;

  /*
Bool to control if instance is publicly
accessible. Default is `false`.
*/
  publiclyAccessible?: boolean;

  /*
(Required unless a `snapshot_identifier` or `replicate_source_db`
is provided) Username for the master DB user. Cannot be specified for a replica.
*/
  username?: string;

  // Specifies where automated backups and manual snapshots are stored. Possible values are `region` (default) and `outposts`. See [Working with Amazon RDS on AWS Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) for more information.
  backupTarget?: string;

  /*
The daily time range (in UTC) during which automated backups are created if they are enabled.
Example: "09:46-10:16". Must not overlap with `maintenance_window`.
*/
  backupWindow?: string;

  // Specifies whether to remove automated backups immediately after the DB instance is deleted. Default is `true`.
  deleteAutomatedBackups?: boolean;

  // If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  deletionProtection?: boolean;

  // The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.
  masterUserSecretKmsKeyId?: string;

  // The self managed Active Directory organizational unit for your DB instance to join. Conflicts with `domain` and `domain_iam_role_name`.
  domainOu?: string;

  // The life cycle type for this DB instance. This setting applies only to RDS for MySQL and RDS for PostgreSQL. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html
  engineLifecycleSupport?: string;

  /*
Specifies whether the DB instance is
encrypted. Note that if you are creating a cross-region read replica this field
is ignored and you should instead declare `kms_key_id` with a valid ARN. The
default is `false` if not specified.
*/
  storageEncrypted?: boolean;

  // The fully qualified domain name (FQDN) of the self managed Active Directory domain. Conflicts with `domain` and `domain_iam_role_name`.
  domainFqdn?: string;

  /*
The amount of provisioned IOPS. Setting this implies a
storage_type of "io1". Can only be set when `storage_type` is `"io1"` or `"gp3"`.
Cannot be specified for gp3 storage if the `allocated_storage` value is below a per-`engine` threshold.
See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.
*/
  iops?: number;

  // Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `password` is provided.
  manageMasterUserPassword?: boolean;

  // When configured, the upper limit to which Amazon RDS can automatically scale the storage of the DB instance. Configuring this will automatically ignore differences to `allocated_storage`. Must be greater than or equal to `allocated_storage` or `0` to disable Storage Autoscaling.
  maxAllocatedStorage?: number;

  /*
The ARN for the IAM role that permits RDS
to send enhanced monitoring metrics to CloudWatch Logs. You can find more
information on the [AWS
Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
*/
  monitoringRoleArn?: string;

  /*
Specifies that this resource is a Replicate
database, and to use this value as the source database. This correlates to the
`identifier` of another Amazon RDS Database to replicate (if replicating within
a single region) or ARN of the Amazon RDS Database to replicate (if replicating
cross-region). Note that if you are
creating a cross-region replica of an encrypted database you will also need to
specify a `kms_key_id`. See [DB Instance Replication][instance-replication] and [Working with
PostgreSQL and MySQL Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)
for more information on using Replication.
*/
  replicateSourceDb?: string;

  // A configuration block for restoring a DB instance to an arbitrary point in time. Requires the `identifier` argument to be set with the name of the new DB instance to be created. See Restore To Point In Time below for details.
  restoreToPointInTime?: rds_InstanceRestoreToPointInTime;

  // The instance type of the RDS instance.
  instanceClass?: string;

  /*
License model information for this DB instance. Valid values for this field are as follows:
- RDS for MariaDB: `general-public-license`
- RDS for Microsoft SQL Server: `license-included`
- RDS for MySQL: `general-public-license`
- RDS for Oracle: `bring-your-own-license | license-included`
- RDS for PostgreSQL: `postgresql-license`
*/
  licenseModel?: string;

  /*
The interval, in seconds, between points
when Enhanced Monitoring metrics are collected for the DB instance. To disable
collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid
Values: 0, 1, 5, 10, 15, 30, 60.
*/
  monitoringInterval?: number;

  /*
The national character set is used in the NCHAR, NVARCHAR2, and NCLOB data types for Oracle instances. This can't be changed. See [Oracle Character Sets
Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html).
*/
  ncharCharacterSetName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
(Required unless `manage_master_user_password` is set to true or unless a `snapshot_identifier` or `replicate_source_db`
is provided or `manage_master_user_password` is set.) Password for the master DB user. Note that this may show up in
logs, and it will be stored in the state file. Cannot be set if `manage_master_user_password` is set to `true`.
*/
  password?: string;

  // The allocated storage in gibibytes. If `max_allocated_storage` is configured, this argument represents the initial storage allocation and differences from the configuration will be ignored automatically when Storage Autoscaling occurs. If `replicate_source_db` is set, the value is ignored during the creation of the instance.
  allocatedStorage?: number;

  // The name of the IAM role to be used when making API calls to the Directory Service. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.
  domainIamRoleName?: string;

  // The engine version to use. If `auto_minor_version_upgrade` is enabled, you can provide a prefix of the version such as `8.0` (for `8.0.36`). The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. For supported values, see the EngineVersion parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine version must match the DB cluster's engine version'.
  engineVersion?: string;

  /*
The ARN for the KMS encryption key. If creating an
encrypted replica, set this to the destination KMS ARN.
*/
  kmsKeyId?: string;

  // Name of the DB option group to associate.
  optionGroupName?: string;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  performanceInsightsRetentionPeriod?: number;

  /*
Specifies whether any database modifications
are applied immediately, or during the next maintenance window. Default is
`false`. See [Amazon RDS Documentation for more
information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
*/
  applyImmediately?: boolean;

  // The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true. Once KMS key is set, it can never be changed.
  performanceInsightsKmsKeyId?: string;

  // Restore from a Percona Xtrabackup in S3.  See [Importing Data into an Amazon RDS MySQL DB Instance](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html)
  s3Import?: rds_InstanceS3Import;
}
export class Instance extends DS_Resource {
  /*
The days to retain backups for.
Must be between `0` and `35`.
Default is `0`.
Must be greater than `0` if the database is used as a source for a [Read Replica][instance-replication],
uses low-downtime updates,
or will use [RDS Blue/Green deployments][blue-green].
*/
  public backupRetentionPeriod?: number;

  // Set of log types to enable for exporting to CloudWatch logs. If omitted, no logs will be exported. For supported values, see the EnableCloudwatchLogsExports.member.N parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html).
  public enabledCloudwatchLogsExports?: Array<string>;

  // The running version of the database.
  public engineVersionActual?: string;

  /*
The name of your final DB snapshot
when this DB instance is deleted. Must be provided if `skip_final_snapshot` is
set to `false`. The value must begin with a letter, only contain alphanumeric characters and hyphens, and not end with a hyphen or contain two consecutive hyphens. Must not be provided when deleting a read replica.
*/
  public finalSnapshotIdentifier?: string;

  // Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `password` is provided.
  public manageMasterUserPassword?: boolean;

  /*
Determines whether a final DB snapshot is
created before the DB instance is deleted. If true is specified, no DBSnapshot
is created. If false is specified, a DB snapshot is created before the DB
instance is deleted, using the value from `final_snapshot_identifier`. Default
is `false`.
*/
  public skipFinalSnapshot?: boolean;

  /*
List of VPC security groups to
associate.
*/
  public vpcSecurityGroupIds?: Array<string>;

  // The identifier of the CA certificate for the DB instance.
  public caCertIdentifier?: string;

  // The ID of the Directory Service Active Directory domain to create the instance in. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.
  public domain?: string;

  // The IPv4 DNS IP addresses of your primary and secondary self managed Active Directory domain controllers. Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Conflicts with `domain` and `domain_iam_role_name`.
  public domainDnsIps?: Array<string>;

  // The database engine to use. For supported values, see the Engine parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine must match the DB cluster's engine'. For information on the difference between the available Aurora MySQL engines see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html) in the Amazon RDS User Guide.
  public engine?: string;

  /*
The ARN for the KMS encryption key. If creating an
encrypted replica, set this to the destination KMS ARN.
*/
  public kmsKeyId?: string;

  /*
The ARN for the IAM role that permits RDS
to send enhanced monitoring metrics to CloudWatch Logs. You can find more
information on the [AWS
Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
*/
  public monitoringRoleArn?: string;

  // A configuration block for restoring a DB instance to an arbitrary point in time. Requires the `identifier` argument to be set with the name of the new DB instance to be created. See Restore To Point In Time below for details.
  public restoreToPointInTime?: rds_InstanceRestoreToPointInTime;

  /*
Indicates that major version
upgrades are allowed. Changing this parameter does not result in an outage and
the change is asynchronously applied as soon as possible.
*/
  public allowMajorVersionUpgrade?: boolean;

  /*
Specifies whether any database modifications
are applied immediately, or during the next maintenance window. Default is
`false`. See [Amazon RDS Documentation for more
information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
*/
  public applyImmediately?: boolean;

  // The AZ for the RDS instance.
  public availabilityZone?: string;

  // Copy all Instance `tags` to snapshots. Default is `false`.
  public copyTagsToSnapshot?: boolean;

  // Specifies the listener connection endpoint for SQL Server Always On. See endpoint below.
  public listenerEndpoints?: Array<rds_InstanceListenerEndpoint>;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00". See [RDS
Maintenance Window
docs](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow)
for more information.
*/
  public maintenanceWindow?: string;

  // Specifies whether Performance Insights are enabled. Defaults to false.
  public performanceInsightsEnabled?: boolean;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  public performanceInsightsRetentionPeriod?: number;

  // The engine version to use. If `auto_minor_version_upgrade` is enabled, you can provide a prefix of the version such as `8.0` (for `8.0.36`). The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. For supported values, see the EngineVersion parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine version must match the DB cluster's engine version'.
  public engineVersion?: string;

  // Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
  public hostedZoneId?: string;

  /*
The amount of provisioned IOPS. Setting this implies a
storage_type of "io1". Can only be set when `storage_type` is `"io1"` or `"gp3"`.
Cannot be specified for gp3 storage if the `allocated_storage` value is below a per-`engine` threshold.
See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.
*/
  public iops?: number;

  // Specifies if the RDS instance is multi-AZ
  public multiAz?: boolean;

  // Restore from a Percona Xtrabackup in S3.  See [Importing Data into an Amazon RDS MySQL DB Instance](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html)
  public s3Import?: rds_InstanceS3Import;

  /*
Specifies whether or not to create this
database from a snapshot. This correlates to the snapshot ID you'd find in the
RDS console, e.g: rds:production-2015-06-26-06-05.
*/
  public snapshotIdentifier?: string;

  /*
The character set name to use for DB encoding in Oracle and Microsoft SQL instances (collation).
This can't be changed.
See [Oracle Character Sets Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html) or
[Server-Level Collation for Microsoft SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.Collation.html) for more information.
Cannot be set  with `replicate_source_db`, `restore_to_point_in_time`, `s3_import`, or `snapshot_identifier`.
*/
  public characterSetName?: string;

  /*
Indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. See [CoIP for RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html#rds-on-outposts.coip) for more information.

> --NOTE:-- Removing the `replicate_source_db` attribute from an existing RDS
Replicate database managed by the provider will promote the database to a fully
standalone database.
*/
  public customerOwnedIpEnabled?: boolean;

  // Use a dedicated log volume (DLV) for the DB instance. Requires Provisioned IOPS. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.dlv) for more details.
  public dedicatedLogVolume?: boolean;

  // The life cycle type for this DB instance. This setting applies only to RDS for MySQL and RDS for PostgreSQL. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html
  public engineLifecycleSupport?: string;

  /*
(Required unless `manage_master_user_password` is set to true or unless a `snapshot_identifier` or `replicate_source_db`
is provided or `manage_master_user_password` is set.) Password for the master DB user. Note that this may show up in
logs, and it will be stored in the state file. Cannot be set if `manage_master_user_password` is set to `true`.
*/
  public password?: string;

  /*
Bool to control if instance is publicly
accessible. Default is `false`.
*/
  public publiclyAccessible?: boolean;

  // The storage throughput value for the DB instance. Can only be set when `storage_type` is `"gp3"`. Cannot be specified if the `allocated_storage` value is below a per-`engine` threshold. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.
  public storageThroughput?: number;

  /*
Enables low-downtime updates using [RDS Blue/Green deployments][blue-green].
See `blue_green_update` below.
*/
  public blueGreenUpdate?: rds_InstanceBlueGreenUpdate;

  // The name of the IAM role to be used when making API calls to the Directory Service. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.
  public domainIamRoleName?: string;

  // The name of the RDS instance, if omitted, this provider will assign a random, unique identifier. Required if `restore_to_point_in_time` is specified.
  public identifier?: string;

  // The latest time, in UTC [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), to which a database can be restored with point-in-time restore.
  public latestRestorableTime?: string;

  // A block that specifies the master user secret. Only available when `manage_master_user_password` is set to true. Documented below.
  public masterUserSecrets?: Array<rds_InstanceMasterUserSecret>;

  // Name of the DB parameter group to associate.
  public parameterGroupName?: string;

  // The RDS instance status.
  public status?: string;

  /*
Time zone of the DB instance. `timezone` is currently
only supported by Microsoft SQL Server. The `timezone` can only be set on
creation. See [MSSQL User
Guide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone)
for more information.
*/
  public timezone?: string;

  /*
(Required unless a `snapshot_identifier` or `replicate_source_db`
is provided) Username for the master DB user. Cannot be specified for a replica.
*/
  public username?: string;

  // Specifies where automated backups and manual snapshots are stored. Possible values are `region` (default) and `outposts`. See [Working with Amazon RDS on AWS Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) for more information.
  public backupTarget?: string;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  public identifierPrefix?: string;

  /*
License model information for this DB instance. Valid values for this field are as follows:
- RDS for MariaDB: `general-public-license`
- RDS for Microsoft SQL Server: `license-included`
- RDS for MySQL: `general-public-license`
- RDS for Oracle: `bring-your-own-license | license-included`
- RDS for PostgreSQL: `postgresql-license`
*/
  public licenseModel?: string;

  /*
The interval, in seconds, between points
when Enhanced Monitoring metrics are collected for the DB instance. To disable
collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid
Values: 0, 1, 5, 10, 15, 30, 60.
*/
  public monitoringInterval?: number;

  /*
One of "standard" (magnetic), "gp2" (general
purpose SSD), "gp3" (general purpose SSD that needs `iops` independently)
or "io1" (provisioned IOPS SSD). The default is "io1" if `iops` is specified,
"gp2" if not.
*/
  public storageType?: string;

  // Specifies the DNS address of the DB instance.
  public address?: string;

  /*
The daily time range (in UTC) during which automated backups are created if they are enabled.
Example: "09:46-10:16". Must not overlap with `maintenance_window`.
*/
  public backupWindow?: string;

  // The instance type of the RDS instance.
  public instanceClass?: string;

  // When configured, the upper limit to which Amazon RDS can automatically scale the storage of the DB instance. Configuring this will automatically ignore differences to `allocated_storage`. Must be greater than or equal to `allocated_storage` or `0` to disable Storage Autoscaling.
  public maxAllocatedStorage?: number;

  // Whether to upgrade the storage file system configuration on the read replica. Can only be set with `replicate_source_db`.
  public upgradeStorageConfig?: boolean;

  /*
Specifies whether mappings of AWS Identity and Access Management (IAM) accounts to database
accounts is enabled.
*/
  public iamDatabaseAuthenticationEnabled?: boolean;

  // The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.
  public masterUserSecretKmsKeyId?: string;

  // The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true. Once KMS key is set, it can never be changed.
  public performanceInsightsKmsKeyId?: string;

  // The allocated storage in gibibytes. If `max_allocated_storage` is configured, this argument represents the initial storage allocation and differences from the configuration will be ignored automatically when Storage Autoscaling occurs. If `replicate_source_db` is set, the value is ignored during the creation of the instance.
  public allocatedStorage?: number;

  // The connection endpoint in `address:port` format.
  public endpoint?: string;

  /*
Specifies whether the replica is in either `mounted` or `open-read-only` mode. This attribute
is only supported by Oracle instances. Oracle replicas operate in `open-read-only` mode unless otherwise specified. See [Working with Oracle Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) for more information.
*/
  public replicaMode?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the RDS instance.
  public arn?: string;

  /*
Indicates that minor engine upgrades
will be applied automatically to the DB instance during the maintenance window.
Defaults to true.
*/
  public autoMinorVersionUpgrade?: boolean;

  // If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  public deletionProtection?: boolean;

  // The self managed Active Directory organizational unit for your DB instance to join. Conflicts with `domain` and `domain_iam_role_name`.
  public domainOu?: string;

  /*
The national character set is used in the NCHAR, NVARCHAR2, and NCLOB data types for Oracle instances. This can't be changed. See [Oracle Character Sets
Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html).
*/
  public ncharCharacterSetName?: string;

  /*
Specifies that this resource is a Replicate
database, and to use this value as the source database. This correlates to the
`identifier` of another Amazon RDS Database to replicate (if replicating within
a single region) or ARN of the Amazon RDS Database to replicate (if replicating
cross-region). Note that if you are
creating a cross-region replica of an encrypted database you will also need to
specify a `kms_key_id`. See [DB Instance Replication][instance-replication] and [Working with
PostgreSQL and MySQL Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)
for more information on using Replication.
*/
  public replicateSourceDb?: string;

  // The RDS Resource ID of this instance.
  public resourceId?: string;

  // Specifies whether to remove automated backups immediately after the DB instance is deleted. Default is `true`.
  public deleteAutomatedBackups?: boolean;

  // The ARN for the Secrets Manager secret with the self managed Active Directory credentials for the user joining the domain. Conflicts with `domain` and `domain_iam_role_name`.
  public domainAuthSecretArn?: string;

  //
  public name?: string;

  /*
Specifies whether the DB instance is
encrypted. Note that if you are creating a cross-region read replica this field
is ignored and you should instead declare `kms_key_id` with a valid ARN. The
default is `false` if not specified.
*/
  public storageEncrypted?: boolean;

  // The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  public customIamInstanceProfile?: string;

  // The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. Note that this does not apply for Oracle or SQL Server engines. See the [AWS documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/create-db-instance.html) for more details on what applies for those engines. If you are providing an Oracle db name, it needs to be in all upper case. Cannot be specified for a replica.
  public dbName?: string;

  // The network type of the DB instance. Valid values: `IPV4`, `DUAL`.
  public networkType?: string;

  // Name of the DB option group to associate.
  public optionGroupName?: string;

  /*
Name of DB subnet group. DB instance will
be created in the VPC associated with the DB subnet group. If unspecified, will
be created in the `default` VPC, or in EC2 Classic, if available. When working
with read replicas, it should be specified only if the source database
specifies an instance in another AWS Region. See [DBSubnetGroupName in API
action CreateDBInstanceReadReplica](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html)
for additional read replica constraints.
*/
  public dbSubnetGroupName?: string;

  // The fully qualified domain name (FQDN) of the self managed Active Directory domain. Conflicts with `domain` and `domain_iam_role_name`.
  public domainFqdn?: string;

  // The port on which the DB accepts connections.
  public port?: number;

  //
  public replicas?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbName",
        "The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. Note that this does not apply for Oracle or SQL Server engines. See the [AWS documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/create-db-instance.html) for more details on what applies for those engines. If you are providing an Oracle db name, it needs to be in all upper case. Cannot be specified for a replica.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "performanceInsightsEnabled",
        "Specifies whether Performance Insights are enabled. Defaults to false.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port on which the DB accepts connections.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "licenseModel",
        "License model information for this DB instance. Valid values for this field are as follows:\n* RDS for MariaDB: `general-public-license`\n* RDS for Microsoft SQL Server: `license-included`\n* RDS for MySQL: `general-public-license`\n* RDS for Oracle: `bring-your-own-license | license-included`\n* RDS for PostgreSQL: `postgresql-license`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
      new DynamicUIProps(
        InputType.Bool,
        "iamDatabaseAuthenticationEnabled",
        "Specifies whether mappings of AWS Identity and Access Management (IAM) accounts to database\naccounts is enabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB instance is\nencrypted. Note that if you are creating a cross-region read replica this field\nis ignored and you should instead declare `kms_key_id` with a valid ARN. The\ndefault is `false` if not specified.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertIdentifier",
        "The identifier of the CA certificate for the DB instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "upgradeStorageConfig",
        "Whether to upgrade the storage file system configuration on the read replica. Can only be set with `replicate_source_db`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "(Required unless a `snapshot_identifier` or `replicate_source_db`\nis provided) Username for the master DB user. Cannot be specified for a replica.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        'One of "standard" (magnetic), "gp2" (general\npurpose SSD), "gp3" (general purpose SSD that needs `iops` independently)\nor "io1" (provisioned IOPS SSD). The default is "io1" if `iops` is specified,\n"gp2" if not.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifierPrefix",
        "Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitoringRoleArn",
        "The ARN for the IAM role that permits RDS\nto send enhanced monitoring metrics to CloudWatch Logs. You can find more\ninformation on the [AWS\nDocumentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)\nwhat IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "(Required unless `manage_master_user_password` is set to true or unless a `snapshot_identifier` or `replicate_source_db`\nis provided or `manage_master_user_password` is set.) Password for the master DB user. Note that this may show up in\nlogs, and it will be stored in the state file. Cannot be set if `manage_master_user_password` is set to `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupTarget",
        "Specifies where automated backups and manual snapshots are stored. Possible values are `region` (default) and `outposts`. See [Working with Amazon RDS on AWS Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) for more information.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupWindow",
        'The daily time range (in UTC) during which automated backups are created if they are enabled.\nExample: "09:46-10:16". Must not overlap with `maintenance_window`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainOu",
        "The self managed Active Directory organizational unit for your DB instance to join. Conflicts with `domain` and `domain_iam_role_name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maintenanceWindow",
        'The window to perform maintenance in.\nSyntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00". See [RDS\nMaintenance Window\ndocs](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow)\nfor more information.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalSnapshot",
        "Determines whether a final DB snapshot is\ncreated before the DB instance is deleted. If true is specified, no DBSnapshot\nis created. If false is specified, a DB snapshot is created before the DB\ninstance is deleted, using the value from `final_snapshot_identifier`. Default\nis `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The ID of the Directory Service Active Directory domain to create the instance in. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "storageThroughput",
        'The storage throughput value for the DB instance. Can only be set when `storage_type` is `"gp3"`. Cannot be specified if the `allocated_storage` value is below a per-`engine` threshold. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicateSourceDb",
        "Specifies that this resource is a Replicate\ndatabase, and to use this value as the source database. This correlates to the\n`identifier` of another Amazon RDS Database to replicate (if replicating within\na single region) or ARN of the Amazon RDS Database to replicate (if replicating\ncross-region). Note that if you are\ncreating a cross-region replica of an encrypted database you will also need to\nspecify a `kms_key_id`. See [DB Instance Replication][instance-replication] and [Working with\nPostgreSQL and MySQL Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)\nfor more information on using Replication.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "dedicatedLogVolume",
        "Use a dedicated log volume (DLV) for the DB instance. Requires Provisioned IOPS. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.dlv) for more details.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ncharCharacterSetName",
        "The national character set is used in the NCHAR, NVARCHAR2, and NCLOB data types for Oracle instances. This can't be changed. See [Oracle Character Sets\nSupported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "optionGroupName",
        "Name of the DB option group to associate.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any database modifications\nare applied immediately, or during the next maintenance window. Default is\n`false`. See [Amazon RDS Documentation for more\ninformation.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The database engine to use. For supported values, see the Engine parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine must match the DB cluster's engine'. For information on the difference between the available Aurora MySQL engines see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html) in the Amazon RDS User Guide.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "iops",
        'The amount of provisioned IOPS. Setting this implies a\nstorage_type of "io1". Can only be set when `storage_type` is `"io1"` or `"gp3"`.\nCannot be specified for gp3 storage if the `allocated_storage` value is below a per-`engine` threshold.\nSee the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxAllocatedStorage",
        "When configured, the upper limit to which Amazon RDS can automatically scale the storage of the DB instance. Configuring this will automatically ignore differences to `allocated_storage`. Must be greater than or equal to `allocated_storage` or `0` to disable Storage Autoscaling.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "performanceInsightsRetentionPeriod",
        "Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainIamRoleName",
        "The name of the IAM role to be used when making API calls to the Directory Service. Conflicts with `domain_fqdn`, `domain_ou`, `domain_auth_secret_arn` and a `domain_dns_ips`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "Indicates that minor engine upgrades\nwill be applied automatically to the DB instance during the maintenance window.\nDefaults to true.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSubnetGroupName",
        "Name of DB subnet group. DB instance will\nbe created in the VPC associated with the DB subnet group. If unspecified, will\nbe created in the `default` VPC, or in EC2 Classic, if available. When working\nwith read replicas, it should be specified only if the source database\nspecifies an instance in another AWS Region. See [DBSubnetGroupName in API\naction CreateDBInstanceReadReplica](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html)\nfor additional read replica constraints.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Bool to control if instance is publicly\naccessible. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUserSecretKmsKeyId",
        "The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "blueGreenUpdate",
        "Enables low-downtime updates using [RDS Blue/Green deployments][blue-green].\nSee `blue_green_update` below.",
        () => rds_InstanceBlueGreenUpdate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "customerOwnedIpEnabled",
        "Indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. See [CoIP for RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html#rds-on-outposts.coip) for more information.\n\n> **NOTE:** Removing the `replicate_source_db` attribute from an existing RDS\nReplicate database managed by the provider will promote the database to a fully\nstandalone database.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledCloudwatchLogsExports",
        "Set of log types to enable for exporting to CloudWatch logs. If omitted, no logs will be exported. For supported values, see the EnableCloudwatchLogsExports.member.N parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timezone",
        "Time zone of the DB instance. `timezone` is currently\nonly supported by Microsoft SQL Server. The `timezone` can only be set on\ncreation. See [MSSQL User\nGuide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone)\nfor more information.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customIamInstanceProfile",
        "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "monitoringInterval",
        "The interval, in seconds, between points\nwhen Enhanced Monitoring metrics are collected for the DB instance. To disable\ncollecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid\nValues: 0, 1, 5, 10, 15, 30, 60.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineLifecycleSupport",
        "The life cycle type for this DB instance. This setting applies only to RDS for MySQL and RDS for PostgreSQL. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "performanceInsightsKmsKeyId",
        "The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true. Once KMS key is set, it can never be changed.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkType",
        "The network type of the DB instance. Valid values: `IPV4`, `DUAL`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiAz",
        "Specifies if the RDS instance is multi-AZ",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocatedStorage",
        "The allocated storage in gibibytes. If `max_allocated_storage` is configured, this argument represents the initial storage allocation and differences from the configuration will be ignored automatically when Storage Autoscaling occurs. If `replicate_source_db` is set, the value is ignored during the creation of the instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Import",
        "Restore from a Percona Xtrabackup in S3.  See [Importing Data into an Amazon RDS MySQL DB Instance](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html)",
        () => rds_InstanceS3Import_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowMajorVersionUpgrade",
        "Indicates that major version\nupgrades are allowed. Changing this parameter does not result in an outage and\nthe change is asynchronously applied as soon as possible.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parameterGroupName",
        "Name of the DB parameter group to associate.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreToPointInTime",
        "A configuration block for restoring a DB instance to an arbitrary point in time. Requires the `identifier` argument to be set with the name of the new DB instance to be created. See Restore To Point In Time below for details.",
        () => rds_InstanceRestoreToPointInTime_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicaMode",
        "Specifies whether the replica is in either `mounted` or `open-read-only` mode. This attribute\nis only supported by Oracle instances. Oracle replicas operate in `open-read-only` mode unless otherwise specified. See [Working with Oracle Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) for more information.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteAutomatedBackups",
        "Specifies whether to remove automated backups immediately after the DB instance is deleted. Default is `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainFqdn",
        "The fully qualified domain name (FQDN) of the self managed Active Directory domain. Conflicts with `domain` and `domain_iam_role_name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "The engine version to use. If `auto_minor_version_upgrade` is enabled, you can provide a prefix of the version such as `8.0` (for `8.0.36`). The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. For supported values, see the EngineVersion parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine version must match the DB cluster's engine version'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainAuthSecretArn",
        "The ARN for the Secrets Manager secret with the self managed Active Directory credentials for the user joining the domain. Conflicts with `domain` and `domain_iam_role_name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotIdentifier",
        "Specifies whether or not to create this\ndatabase from a snapshot. This correlates to the snapshot ID you'd find in the\nRDS console, e.g: rds:production-2015-06-26-06-05.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The AZ for the RDS instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "backupRetentionPeriod",
        "The days to retain backups for.\nMust be between `0` and `35`.\nDefault is `0`.\nMust be greater than `0` if the database is used as a source for a [Read Replica][instance-replication],\nuses low-downtime updates,\nor will use [RDS Blue/Green deployments][blue-green].",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN for the KMS encryption key. If creating an\nencrypted replica, set this to the destination KMS ARN.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "List of VPC security groups to\nassociate.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "The name of the RDS instance, if omitted, this provider will assign a random, unique identifier. Required if `restore_to_point_in_time` is specified.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "manageMasterUserPassword",
        "Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `password` is provided.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "The instance type of the RDS instance.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "characterSetName",
        "The character set name to use for DB encoding in Oracle and Microsoft SQL instances (collation).\nThis can't be changed.\nSee [Oracle Character Sets Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html) or\n[Server-Level Collation for Microsoft SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.Collation.html) for more information.\nCannot be set  with `replicate_source_db`, `restore_to_point_in_time`, `s3_import`, or `snapshot_identifier`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToSnapshot",
        "Copy all Instance `tags` to snapshots. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "domainDnsIps",
        "The IPv4 DNS IP addresses of your primary and secondary self managed Active Directory domain controllers. Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Conflicts with `domain` and `domain_iam_role_name`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "The name of your final DB snapshot\nwhen this DB instance is deleted. Must be provided if `skip_final_snapshot` is\nset to `false`. The value must begin with a letter, only contain alphanumeric characters and hyphens, and not end with a hyphen or contain two consecutive hyphens. Must not be provided when deleting a read replica.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
