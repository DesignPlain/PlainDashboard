import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  rds_ClusterMasterUserSecret,
  rds_ClusterMasterUserSecret_GetTypes,
} from "../types/rds_ClusterMasterUserSecret";
import {
  rds_ClusterS3Import,
  rds_ClusterS3Import_GetTypes,
} from "../types/rds_ClusterS3Import";
import {
  rds_ClusterScalingConfiguration,
  rds_ClusterScalingConfiguration_GetTypes,
} from "../types/rds_ClusterScalingConfiguration";
import {
  rds_ClusterServerlessv2ScalingConfiguration,
  rds_ClusterServerlessv2ScalingConfiguration_GetTypes,
} from "../types/rds_ClusterServerlessv2ScalingConfiguration";
import {
  rds_ClusterRestoreToPointInTime,
  rds_ClusterRestoreToPointInTime_GetTypes,
} from "../types/rds_ClusterRestoreToPointInTime";

export interface ClusterArgs {
  // The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
  allocatedStorage?: number;

  // Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints)
  databaseName?: string;

  // Whether cluster should forward writes to an associated global cluster. Applied to secondary clusters to enable them to forward writes to an `aws.rds.GlobalCluster`'s primary cluster. See the [Aurora Userguide documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html) for more information.
  enableGlobalWriteForwarding?: boolean;

  // (Forces new for Multi-AZ DB clusters) Specifies the storage type to be associated with the DB cluster. For Aurora DB clusters, `storage_type` modifications can be done in-place. For Multi-AZ DB Clusters, the `iops` argument must also be set. Valid values are: `""`, `aurora-iopt1` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters). Default: `""` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters).
  storageType?: string;

  // For use with RDS Custom.
  dbSystemId?: string;

  // The name of the IAM role to be used when making API calls to the Directory Service.
  domainIamRoleName?: string;

  // Global cluster identifier specified on `aws.rds.GlobalCluster`.
  globalClusterIdentifier?: string;

  // Daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
  preferredBackupWindow?: string;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
  applyImmediately?: boolean;

  // The cluster identifier. If omitted, this provider will assign a random, unique identifier.
  clusterIdentifier?: string;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  clusterIdentifierPrefix?: string;

  // Instance parameter group to associate with all instances of the DB cluster. The `db_instance_parameter_group_name` parameter is only valid in combination with the `allow_major_version_upgrade` parameter.
  dbInstanceParameterGroupName?: string;

  // The source region for an encrypted replica DB cluster.
  sourceRegion?: string;

  // Specifies whether to remove automated backups immediately after the DB cluster is deleted. Default is `true`.
  deleteAutomatedBackups?: boolean;

  // Set of log types to export to cloudwatch. If omitted, no logs will be exported. The following log types are supported: `audit`, `error`, `general`, `slowquery`, `postgresql` (PostgreSQL).
  enabledCloudwatchLogsExports?: Array<string>;

  // Database engine mode. Valid values: `global` (only valid for Aurora MySQL 1.21 and earlier), `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
  engineMode?: string;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Conflicts with `global_cluster_identifier`. Clusters cannot be restored from snapshot --and-- joined to an existing global cluster in a single operation. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-getting-started.html#aurora-global-database.use-snapshot) or the Global Cluster Restored From Snapshot example for instructions on building a global cluster starting with a snapshot.
  snapshotIdentifier?: string;

  /*
List of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created.
RDS automatically assigns 3 AZs if less than 3 AZs are configured, which will show as a difference requiring resource recreation next pulumi up.
We recommend specifying 3 AZs or using the `lifecycle` configuration block `ignore_changes` argument if necessary.
A maximum of 3 AZs can be configured.
*/
  availabilityZones?: Array<string>;

  // Days to retain backups for. Default `1`
  backupRetentionPeriod?: number;

  // List of RDS Instances that are a part of this cluster
  clusterMembers?: Array<string>;

  // Copy all Cluster `tags` to snapshots. Default is `false`.
  copyTagsToSnapshot?: boolean;

  // List of VPC security groups to associate with the Cluster
  vpcSecurityGroupIds?: Array<string>;

  // The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6g.xlarge`. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide.
  dbClusterInstanceClass?: string;

  // Enable HTTP endpoint (data API). Only valid when `engine_mode` is set to `serverless`.
  enableHttpEndpoint?: boolean;

  // Password for the master DB user. Note that this may show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). Cannot be set if `manage_master_user_password` is set to `true`.
  masterPassword?: string;

  //
  s3Import?: rds_ClusterS3Import;

  // Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `master_password` is provided.
  manageMasterUserPassword?: boolean;

  // Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.
  masterUserSecretKmsKeyId?: string;

  // Username for the master DB user. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). This argument does not support in-place updates and cannot be changed during a restore from snapshot.
  masterUsername?: string;

  // Port on which the DB accepts connections
  port?: number;

  // A cluster parameter group to associate with the cluster.
  dbClusterParameterGroupName?: string;

  /*
DB subnet group to associate with this DB cluster.
--NOTE:-- This must match the `db_subnet_group_name` specified on every `aws.rds.ClusterInstance` in the cluster.
*/
  dbSubnetGroupName?: string;

  /*
If the DB cluster should have deletion protection enabled.
The database can't be deleted when this value is set to `true`.
The default is `false`.
*/
  deletionProtection?: boolean;

  // Name of your final DB snapshot when this DB cluster is deleted. If omitted, no final snapshot will be made.
  finalSnapshotIdentifier?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`. When restoring an unencrypted `snapshot_identifier`, the `kms_key_id` argument must be provided to encrypt the restored cluster. The provider will only perform drift detection if a configuration value is provided.
  storageEncrypted?: boolean;

  // Target backtrack window, in seconds. Only available for `aurora` and `aurora-mysql` engines currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
  backtrackWindow?: number;

  // The ID of the Directory Service Active Directory domain to create the cluster in.
  domain?: string;

  // ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
  kmsKeyId?: string;

  // Network type of the cluster. Valid values: `IPV4`, `DUAL`.
  networkType?: string;

  // Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
  scalingConfiguration?: rds_ClusterScalingConfiguration;

  // Nested attribute with scaling properties for ServerlessV2. Only valid when `engine_mode` is set to `provisioned`. More details below.
  serverlessv2ScalingConfiguration?: rds_ClusterServerlessv2ScalingConfiguration;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // List of ARNs for the IAM roles to associate to the RDS Cluster.
  iamRoles?: Array<string>;

  // Weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  preferredMaintenanceWindow?: string;

  // ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica. If DB Cluster is part of a Global Cluster, use the `lifecycle` configuration block `ignore_changes` argument to prevent this provider from showing differences for this argument instead of configuring this value.
  replicationSourceIdentifier?: string;

  // Nested attribute for [point in time restore](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html). More details below.
  restoreToPointInTime?: rds_ClusterRestoreToPointInTime;

  // Amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see [Amazon RDS Provisioned IOPS storage to improve performance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the Amazon RDS User Guide. (This setting is required to create a Multi-AZ DB cluster). Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
  iops?: number;

  // Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  skipFinalSnapshot?: boolean;

  // Enable to allow major engine version upgrades when changing engine versions. Defaults to `false`.
  allowMajorVersionUpgrade?: boolean;

  // Name of the database engine to be used for this DB cluster. Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`. (Note that `mysql` and `postgres` are Multi-AZ RDS clusters).
  engine?: string;

  // Database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value, or by running `aws rds describe-db-engine-versions`. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`. The value can contain a partial version where supported by the API. The actual engine version used is returned in the attribute `engine_version_actual`, , see Attribute Reference below.
  engineVersion?: string;

  // Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
  iamDatabaseAuthenticationEnabled?: boolean;
}
export class Cluster extends Resource {
  // Name of your final DB snapshot when this DB cluster is deleted. If omitted, no final snapshot will be made.
  public finalSnapshotIdentifier?: string;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
  public applyImmediately?: boolean;

  // The name of the IAM role to be used when making API calls to the Directory Service.
  public domainIamRoleName?: string;

  // Database engine mode. Valid values: `global` (only valid for Aurora MySQL 1.21 and earlier), `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
  public engineMode?: string;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of cluster
  public arn?: string;

  // Instance parameter group to associate with all instances of the DB cluster. The `db_instance_parameter_group_name` parameter is only valid in combination with the `allow_major_version_upgrade` parameter.
  public dbInstanceParameterGroupName?: string;

  // The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
  public allocatedStorage?: number;

  // Block that specifies the master user secret. Only available when `manage_master_user_password` is set to true. Documented below.
  public masterUserSecrets?: Array<rds_ClusterMasterUserSecret>;

  // ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica. If DB Cluster is part of a Global Cluster, use the `lifecycle` configuration block `ignore_changes` argument to prevent this provider from showing differences for this argument instead of configuring this value.
  public replicationSourceIdentifier?: string;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  public clusterIdentifierPrefix?: string;

  // Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.
  public masterUserSecretKmsKeyId?: string;

  // Nested attribute for [point in time restore](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html). More details below.
  public restoreToPointInTime?: rds_ClusterRestoreToPointInTime;

  // For use with RDS Custom.
  public dbSystemId?: string;

  // Name of the database engine to be used for this DB cluster. Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`. (Note that `mysql` and `postgres` are Multi-AZ RDS clusters).
  public engine?: string;

  //
  public s3Import?: rds_ClusterS3Import;

  // The cluster identifier. If omitted, this provider will assign a random, unique identifier.
  public clusterIdentifier?: string;

  /*
DB subnet group to associate with this DB cluster.
--NOTE:-- This must match the `db_subnet_group_name` specified on every `aws.rds.ClusterInstance` in the cluster.
*/
  public dbSubnetGroupName?: string;

  // DNS address of the RDS instance
  public endpoint?: string;

  // Database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value, or by running `aws rds describe-db-engine-versions`. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`. The value can contain a partial version where supported by the API. The actual engine version used is returned in the attribute `engine_version_actual`, , see Attribute Reference below.
  public engineVersion?: string;

  // Port on which the DB accepts connections
  public port?: number;

  // Daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
  public preferredBackupWindow?: string;

  /*
Read-only endpoint for the Aurora cluster, automatically
load-balanced across replicas
*/
  public readerEndpoint?: string;

  // Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  public skipFinalSnapshot?: boolean;

  /*
List of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created.
RDS automatically assigns 3 AZs if less than 3 AZs are configured, which will show as a difference requiring resource recreation next pulumi up.
We recommend specifying 3 AZs or using the `lifecycle` configuration block `ignore_changes` argument if necessary.
A maximum of 3 AZs can be configured.
*/
  public availabilityZones?: Array<string>;

  // Enable HTTP endpoint (data API). Only valid when `engine_mode` is set to `serverless`.
  public enableHttpEndpoint?: boolean;

  // Enable to allow major engine version upgrades when changing engine versions. Defaults to `false`.
  public allowMajorVersionUpgrade?: boolean;

  /*
If the DB cluster should have deletion protection enabled.
The database can't be deleted when this value is set to `true`.
The default is `false`.
*/
  public deletionProtection?: boolean;

  // Set of log types to export to cloudwatch. If omitted, no logs will be exported. The following log types are supported: `audit`, `error`, `general`, `slowquery`, `postgresql` (PostgreSQL).
  public enabledCloudwatchLogsExports?: Array<string>;

  // Username for the master DB user. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). This argument does not support in-place updates and cannot be changed during a restore from snapshot.
  public masterUsername?: string;

  // Network type of the cluster. Valid values: `IPV4`, `DUAL`.
  public networkType?: string;

  // Weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  public preferredMaintenanceWindow?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A cluster parameter group to associate with the cluster.
  public dbClusterParameterGroupName?: string;

  // Whether cluster should forward writes to an associated global cluster. Applied to secondary clusters to enable them to forward writes to an `aws.rds.GlobalCluster`'s primary cluster. See the [Aurora Userguide documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html) for more information.
  public enableGlobalWriteForwarding?: boolean;

  // Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
  public iamDatabaseAuthenticationEnabled?: boolean;

  // List of ARNs for the IAM roles to associate to the RDS Cluster.
  public iamRoles?: Array<string>;

  // Days to retain backups for. Default `1`
  public backupRetentionPeriod?: number;

  // Copy all Cluster `tags` to snapshots. Default is `false`.
  public copyTagsToSnapshot?: boolean;

  // Password for the master DB user. Note that this may show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). Cannot be set if `manage_master_user_password` is set to `true`.
  public masterPassword?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`. When restoring an unencrypted `snapshot_identifier`, the `kms_key_id` argument must be provided to encrypt the restored cluster. The provider will only perform drift detection if a configuration value is provided.
  public storageEncrypted?: boolean;

  // RDS Cluster Resource ID
  public clusterResourceId?: string;

  // Global cluster identifier specified on `aws.rds.GlobalCluster`.
  public globalClusterIdentifier?: string;

  // Route53 Hosted Zone ID of the endpoint
  public hostedZoneId?: string;

  // (Forces new for Multi-AZ DB clusters) Specifies the storage type to be associated with the DB cluster. For Aurora DB clusters, `storage_type` modifications can be done in-place. For Multi-AZ DB Clusters, the `iops` argument must also be set. Valid values are: `""`, `aurora-iopt1` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters). Default: `""` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters).
  public storageType?: string;

  // Target backtrack window, in seconds. Only available for `aurora` and `aurora-mysql` engines currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
  public backtrackWindow?: number;

  // Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `master_password` is provided.
  public manageMasterUserPassword?: boolean;

  // Nested attribute with scaling properties for ServerlessV2. Only valid when `engine_mode` is set to `provisioned`. More details below.
  public serverlessv2ScalingConfiguration?: rds_ClusterServerlessv2ScalingConfiguration;

  // Specifies whether to remove automated backups immediately after the DB cluster is deleted. Default is `true`.
  public deleteAutomatedBackups?: boolean;

  // Running version of the database.
  public engineVersionActual?: string;

  // Amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see [Amazon RDS Provisioned IOPS storage to improve performance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the Amazon RDS User Guide. (This setting is required to create a Multi-AZ DB cluster). Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
  public iops?: number;

  // List of VPC security groups to associate with the Cluster
  public vpcSecurityGroupIds?: Array<string>;

  // Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints)
  public databaseName?: string;

  // The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6g.xlarge`. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide.
  public dbClusterInstanceClass?: string;

  // ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
  public kmsKeyId?: string;

  // Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
  public scalingConfiguration?: rds_ClusterScalingConfiguration;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Conflicts with `global_cluster_identifier`. Clusters cannot be restored from snapshot --and-- joined to an existing global cluster in a single operation. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-getting-started.html#aurora-global-database.use-snapshot) or the Global Cluster Restored From Snapshot example for instructions on building a global cluster starting with a snapshot.
  public snapshotIdentifier?: string;

  // The source region for an encrypted replica DB cluster.
  public sourceRegion?: string;

  // List of RDS Instances that are a part of this cluster
  public clusterMembers?: Array<string>;

  // The ID of the Directory Service Active Directory domain to create the cluster in.
  public domain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "deleteAutomatedBackups",
        "Specifies whether to remove automated backups immediately after the DB cluster is deleted. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableHttpEndpoint",
        "Enable HTTP endpoint (data API). Only valid when `engine_mode` is set to `serverless`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "iamDatabaseAuthenticationEnabled",
        "Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableGlobalWriteForwarding",
        "Whether cluster should forward writes to an associated global cluster. Applied to secondary clusters to enable them to forward writes to an `aws.rds.GlobalCluster`'s primary cluster. See the [Aurora Userguide documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredBackupWindow",
        "Daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        '(Forces new for Multi-AZ DB clusters) Specifies the storage type to be associated with the DB cluster. For Aurora DB clusters, `storage_type` modifications can be done in-place. For Multi-AZ DB Clusters, the `iops` argument must also be set. Valid values are: `""`, `aurora-iopt1` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters). Default: `""` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clusterMembers",
        "List of RDS Instances that are a part of this cluster",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterInstanceClass",
        "The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6g.xlarge`. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port on which the DB accepts connections",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "backtrackWindow",
        "Target backtrack window, in seconds. Only available for `aurora` and `aurora-mysql` engines currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocatedStorage",
        "The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "If the DB cluster should have deletion protection enabled.\nThe database can't be deleted when this value is set to `true`.\nThe default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreToPointInTime",
        "Nested attribute for [point in time restore](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html). More details below.",
        rds_ClusterRestoreToPointInTime_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value, or by running `aws rds describe-db-engine-versions`. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`. The value can contain a partial version where supported by the API. The actual engine version used is returned in the attribute `engine_version_actual`, , see Attribute Reference below.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSubnetGroupName",
        "DB subnet group to associate with this DB cluster.\n**NOTE:** This must match the `db_subnet_group_name` specified on every `aws.rds.ClusterInstance` in the cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineMode",
        "Database engine mode. Valid values: `global` (only valid for Aurora MySQL 1.21 and earlier), `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToSnapshot",
        "Copy all Cluster `tags` to snapshots. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkType",
        "Network type of the cluster. Valid values: `IPV4`, `DUAL`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSystemId",
        "For use with RDS Custom.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceRegion",
        "The source region for an encrypted replica DB cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scalingConfiguration",
        "Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.",
        rds_ClusterScalingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iamRoles",
        "List of ARNs for the IAM roles to associate to the RDS Cluster.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationSourceIdentifier",
        "ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica. If DB Cluster is part of a Global Cluster, use the `lifecycle` configuration block `ignore_changes` argument to prevent this provider from showing differences for this argument instead of configuring this value.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalSnapshot",
        "Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowMajorVersionUpgrade",
        "Enable to allow major engine version upgrades when changing engine versions. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotIdentifier",
        "Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Conflicts with `global_cluster_identifier`. Clusters cannot be restored from snapshot **and** joined to an existing global cluster in a single operation. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-getting-started.html#aurora-global-database.use-snapshot) or the Global Cluster Restored From Snapshot example for instructions on building a global cluster starting with a snapshot.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "List of VPC security groups to associate with the Cluster",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUserSecretKmsKeyId",
        "Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterParameterGroupName",
        "A cluster parameter group to associate with the cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "Name of your final DB snapshot when this DB cluster is deleted. If omitted, no final snapshot will be made.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The ID of the Directory Service Active Directory domain to create the cluster in.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for this DB cluster. Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`. (Note that `mysql` and `postgres` are Multi-AZ RDS clusters).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledCloudwatchLogsExports",
        "Set of log types to export to cloudwatch. If omitted, no logs will be exported. The following log types are supported: `audit`, `error`, `general`, `slowquery`, `postgresql` (PostgreSQL).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "availabilityZones",
        "List of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created.\nRDS automatically assigns 3 AZs if less than 3 AZs are configured, which will show as a difference requiring resource recreation next pulumi up.\nWe recommend specifying 3 AZs or using the `lifecycle` configuration block `ignore_changes` argument if necessary.\nA maximum of 3 AZs can be configured.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier. If omitted, this provider will assign a random, unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifierPrefix",
        "Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbInstanceParameterGroupName",
        "Instance parameter group to associate with all instances of the DB cluster. The `db_instance_parameter_group_name` parameter is only valid in combination with the `allow_major_version_upgrade` parameter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "backupRetentionPeriod",
        "Days to retain backups for. Default `1`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Import",
        "",
        rds_ClusterS3Import_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "manageMasterUserPassword",
        "Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `master_password` is provided.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainIamRoleName",
        "The name of the IAM role to be used when making API calls to the Directory Service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalClusterIdentifier",
        "Global cluster identifier specified on `aws.rds.GlobalCluster`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "Weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "iops",
        "Amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see [Amazon RDS Provisioned IOPS storage to improve performance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the Amazon RDS User Guide. (This setting is required to create a Multi-AZ DB cluster). Must be a multiple between .5 and 50 of the storage amount for the DB cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`. When restoring an unencrypted `snapshot_identifier`, the `kms_key_id` argument must be provided to encrypt the restored cluster. The provider will only perform drift detection if a configuration value is provided.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverlessv2ScalingConfiguration",
        "Nested attribute with scaling properties for ServerlessV2. Only valid when `engine_mode` is set to `provisioned`. More details below.",
        rds_ClusterServerlessv2ScalingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterPassword",
        "Password for the master DB user. Note that this may show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). Cannot be set if `manage_master_user_password` is set to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUsername",
        "Username for the master DB user. Please refer to the [RDS Naming Constraints](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints). This argument does not support in-place updates and cannot be changed during a restore from snapshot.",
        [],
        false,
        true,
      ),
    ];
  }
}
