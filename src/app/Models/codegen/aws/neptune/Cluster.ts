import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  neptune_ClusterServerlessV2ScalingConfiguration,
  neptune_ClusterServerlessV2ScalingConfiguration_GetTypes,
} from '../types/neptune_ClusterServerlessV2ScalingConfiguration';

export interface ClusterArgs {
  // A list of the log types this DB cluster is configured to export to Cloudwatch Logs. Currently only supports `audit` and `slowquery`.
  enableCloudwatchLogsExports?: Array<string>;

  // A List of ARNs for the IAM roles to associate to the Neptune Cluster.
  iamRoles?: Array<string>;

  // A Neptune subnet group to associate with this Neptune instance.
  neptuneSubnetGroupName?: string;

  // Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  skipFinalSnapshot?: boolean;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot. Automated snapshots --should not-- be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.
  snapshotIdentifier?: string;

  // A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // List of VPC security groups to associate with the Cluster
  vpcSecurityGroupIds?: Array<string>;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
  applyImmediately?: boolean;

  // A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
  availabilityZones?: Array<string>;

  // A cluster parameter group to associate with the cluster.
  neptuneClusterParameterGroupName?: string;

  // The days to retain backups for. Default `1`
  backupRetentionPeriod?: number;

  // If set to true, tags are copied to any snapshot of the DB cluster that is created.
  copyTagsToSnapshot?: boolean;

  // The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
  engine?: string;

  // The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
  finalSnapshotIdentifier?: string;

  // ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
  replicationSourceIdentifier?: string;

  // Storage type associated with the cluster `standard/iopt1`. Default: `standard`
  storageType?: string;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  clusterIdentifierPrefix?: string;

  // The global cluster identifier specified on `aws.neptune.GlobalCluster`.
  globalClusterIdentifier?: string;

  // Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
  iamDatabaseAuthenticationEnabled?: boolean;

  // The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  preferredMaintenanceWindow?: string;

  // The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
  preferredBackupWindow?: string;

  // Specifies whether upgrades between different major versions are allowed. You must set it to `true` when providing an `engine_version` parameter that uses a different major version than the DB cluster's current version. Default is `false`.
  allowMajorVersionUpgrade?: boolean;

  // The name of the DB parameter group to apply to all instances of the DB cluster.
  neptuneInstanceParameterGroupName?: string;

  // If set, create the Neptune cluster as a serverless one. See Serverless for example block attributes.
  serverlessV2ScalingConfiguration?: neptune_ClusterServerlessV2ScalingConfiguration;

  // Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
  storageEncrypted?: boolean;

  // The cluster identifier. If omitted, this provider will assign a random, unique identifier.
  clusterIdentifier?: string;

  // The database engine version.
  engineVersion?: string;

  // A value that indicates whether the DB cluster has deletion protection enabled.The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
  deletionProtection?: boolean;

  // The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
  kmsKeyArn?: string;

  // The port on which the Neptune accepts connections. Default is `8182`.
  port?: number;
}
export class Cluster extends DS_Resource {
  // The Neptune Cluster Resource ID
  public clusterResourceId?: string;

  // If set to true, tags are copied to any snapshot of the DB cluster that is created.
  public copyTagsToSnapshot?: boolean;

  // A value that indicates whether the DB cluster has deletion protection enabled.The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
  public deletionProtection?: boolean;

  // A list of the log types this DB cluster is configured to export to Cloudwatch Logs. Currently only supports `audit` and `slowquery`.
  public enableCloudwatchLogsExports?: Array<string>;

  // The DNS address of the Neptune instance
  public endpoint?: string;

  // The Route53 Hosted Zone ID of the endpoint
  public hostedZoneId?: string;

  // The name of the DB parameter group to apply to all instances of the DB cluster.
  public neptuneInstanceParameterGroupName?: string;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  public clusterIdentifierPrefix?: string;

  // The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  public preferredMaintenanceWindow?: string;

  // A Neptune subnet group to associate with this Neptune instance.
  public neptuneSubnetGroupName?: string;

  // List of Neptune Instances that are a part of this cluster
  public clusterMembers?: Array<string>;

  // The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
  public finalSnapshotIdentifier?: string;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
  public applyImmediately?: boolean;

  // A cluster parameter group to associate with the cluster.
  public neptuneClusterParameterGroupName?: string;

  // ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
  public replicationSourceIdentifier?: string;

  // If set, create the Neptune cluster as a serverless one. See Serverless for example block attributes.
  public serverlessV2ScalingConfiguration?: neptune_ClusterServerlessV2ScalingConfiguration;

  // Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  public skipFinalSnapshot?: boolean;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot. Automated snapshots --should not-- be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.
  public snapshotIdentifier?: string;

  // The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
  public engine?: string;

  // The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
  public kmsKeyArn?: string;

  // Storage type associated with the cluster `standard/iopt1`. Default: `standard`
  public storageType?: string;

  // The database engine version.
  public engineVersion?: string;

  // Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
  public storageEncrypted?: boolean;

  // A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // List of VPC security groups to associate with the Cluster
  public vpcSecurityGroupIds?: Array<string>;

  // A read-only endpoint for the Neptune cluster, automatically load-balanced across replicas
  public readerEndpoint?: string;

  // The days to retain backups for. Default `1`
  public backupRetentionPeriod?: number;

  // The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
  public preferredBackupWindow?: string;

  // The Neptune Cluster Amazon Resource Name (ARN)
  public arn?: string;

  // The global cluster identifier specified on `aws.neptune.GlobalCluster`.
  public globalClusterIdentifier?: string;

  // Specifies whether upgrades between different major versions are allowed. You must set it to `true` when providing an `engine_version` parameter that uses a different major version than the DB cluster's current version. Default is `false`.
  public allowMajorVersionUpgrade?: boolean;

  // The cluster identifier. If omitted, this provider will assign a random, unique identifier.
  public clusterIdentifier?: string;

  // Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
  public iamDatabaseAuthenticationEnabled?: boolean;

  // A List of ARNs for the IAM roles to associate to the Neptune Cluster.
  public iamRoles?: Array<string>;

  // The port on which the Neptune accepts connections. Default is `8182`.
  public port?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
  public availabilityZones?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'neptuneSubnetGroupName',
        'A Neptune subnet group to associate with this Neptune instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'snapshotIdentifier',
        'Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot. Automated snapshots **should not** be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'availabilityZones',
        'A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'neptuneClusterParameterGroupName',
        'A cluster parameter group to associate with the cluster.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'backupRetentionPeriod',
        'The days to retain backups for. Default `1`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifierPrefix',
        'Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'storageEncrypted',
        'Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'enableCloudwatchLogsExports',
        'A list of the log types this DB cluster is configured to export to Cloudwatch Logs. Currently only supports `audit` and `slowquery`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'vpcSecurityGroupIds',
        'List of VPC security groups to associate with the Cluster',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'storageType',
        'Storage type associated with the cluster `standard/iopt1`. Default: `standard`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the Neptune cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'finalSnapshotIdentifier',
        'The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverlessV2ScalingConfiguration',
        'If set, create the Neptune cluster as a serverless one. See Serverless for example block attributes.',
        () => neptune_ClusterServerlessV2ScalingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'The database engine version.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'replicationSourceIdentifier',
        'ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredMaintenanceWindow',
        'The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'copyTagsToSnapshot',
        'If set to true, tags are copied to any snapshot of the DB cluster that is created.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engine',
        'The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'globalClusterIdentifier',
        'The global cluster identifier specified on `aws.neptune.GlobalCluster`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'allowMajorVersionUpgrade',
        "Specifies whether upgrades between different major versions are allowed. You must set it to `true` when providing an `engine_version` parameter that uses a different major version than the DB cluster's current version. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'iamRoles',
        'A List of ARNs for the IAM roles to associate to the Neptune Cluster.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipFinalSnapshot',
        'Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'iamDatabaseAuthenticationEnabled',
        'Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredBackupWindow',
        'The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifier',
        'The cluster identifier. If omitted, this provider will assign a random, unique identifier.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyArn',
        'The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'applyImmediately',
        'Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'neptuneInstanceParameterGroupName',
        'The name of the DB parameter group to apply to all instances of the DB cluster.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'deletionProtection',
        "A value that indicates whether the DB cluster has deletion protection enabled.The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'port',
        'The port on which the Neptune accepts connections. Default is `8182`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
