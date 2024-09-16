import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  memorydb_ClusterClusterEndpoint,
  memorydb_ClusterClusterEndpoint_GetTypes,
} from '../types/memorydb_ClusterClusterEndpoint';
import {
  memorydb_ClusterShard,
  memorydb_ClusterShard_GetTypes,
} from '../types/memorydb_ClusterShard';

export interface ClusterArgs {
  // Version number of the Redis engine to be used for the cluster. Downgrades are not supported.
  engineVersion?: string;

  // Name of the final cluster snapshot to be created when this resource is deleted. If omitted, no final snapshot will be made.
  finalSnapshotName?: string;

  /*
The compute and memory capacity of the nodes in the cluster. See AWS documentation on [supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.supportedtypes.html) as well as [vertical scaling](https://docs.aws.amazon.com/memorydb/latest/devguide/cluster-vertical-scaling.html).

The following arguments are optional:
*/
  nodeType?: string;

  // The number of shards in the cluster. Defaults to `1`.
  numShards?: number;

  // The name of the parameter group associated with the cluster.
  parameterGroupName?: string;

  // The number of days for which MemoryDB retains automatic snapshots before deleting them. When set to `0`, automatic backups are disabled. Defaults to `0`.
  snapshotRetentionLimit?: number;

  // When set to `true`, the cluster will automatically receive minor engine version upgrades after launch. Defaults to `true`.
  autoMinorVersionUpgrade?: boolean;

  // The port number on which each of the nodes accepts connections. Defaults to `6379`.
  port?: number;

  // List of ARN-s that uniquely identify RDB snapshot files stored in S3. The snapshot files will be used to populate the new cluster. Object names in the ARN-s cannot contain any commas.
  snapshotArns?: Array<string>;

  // The name of a snapshot from which to restore data into the new cluster.
  snapshotName?: string;

  // The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: `05:00-09:00`.
  snapshotWindow?: string;

  // The number of replicas to apply to each shard, up to a maximum of 5. Defaults to `1` (i.e. 2 nodes per shard).
  numReplicasPerShard?: number;

  // Enables data tiering. This option is not supported by all instance types. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).
  dataTiering?: boolean;

  // ARN of the KMS key used to encrypt the cluster at rest.
  kmsKeyArn?: string;

  // Specifies the weekly time range during which maintenance on the cluster is performed. Specify as a range in the format `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:23:00-mon:01:30`.
  maintenanceWindow?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // ARN of the SNS topic to which cluster notifications are sent.
  snsTopicArn?: string;

  // The name of the subnet group to be used for the cluster. Defaults to a subnet group consisting of default VPC subnets.
  subnetGroupName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the Access Control List to associate with the cluster.
  aclName?: string;

  // Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Set of VPC Security Group ID-s to associate with this cluster.
  securityGroupIds?: Array<string>;

  // A flag to enable in-transit encryption on the cluster. When set to `false`, the `acl_name` must be `open-access`. Defaults to `true`.
  tlsEnabled?: boolean;

  // Description for the cluster.
  description?: string;
}
export class Cluster extends DS_Resource {
  // Description for the cluster.
  public description?: string;

  // Specifies the weekly time range during which maintenance on the cluster is performed. Specify as a range in the format `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:23:00-mon:01:30`.
  public maintenanceWindow?: string;

  // The number of replicas to apply to each shard, up to a maximum of 5. Defaults to `1` (i.e. 2 nodes per shard).
  public numReplicasPerShard?: number;

  // The name of a snapshot from which to restore data into the new cluster.
  public snapshotName?: string;

  // The number of days for which MemoryDB retains automatic snapshots before deleting them. When set to `0`, automatic backups are disabled. Defaults to `0`.
  public snapshotRetentionLimit?: number;

  // The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: `05:00-09:00`.
  public snapshotWindow?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the Access Control List to associate with the cluster.
  public aclName?: string;

  // Version number of the Redis engine to be used for the cluster. Downgrades are not supported.
  public engineVersion?: string;

  // The port number on which each of the nodes accepts connections. Defaults to `6379`.
  public port?: number;

  // List of ARN-s that uniquely identify RDB snapshot files stored in S3. The snapshot files will be used to populate the new cluster. Object names in the ARN-s cannot contain any commas.
  public snapshotArns?: Array<string>;

  // Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Set of VPC Security Group ID-s to associate with this cluster.
  public securityGroupIds?: Array<string>;

  // The name of the subnet group to be used for the cluster. Defaults to a subnet group consisting of default VPC subnets.
  public subnetGroupName?: string;

  // A flag to enable in-transit encryption on the cluster. When set to `false`, the `acl_name` must be `open-access`. Defaults to `true`.
  public tlsEnabled?: boolean;

  //
  public clusterEndpoints?: Array<memorydb_ClusterClusterEndpoint>;

  // ARN of the KMS key used to encrypt the cluster at rest.
  public kmsKeyArn?: string;

  // ARN of the SNS topic to which cluster notifications are sent.
  public snsTopicArn?: string;

  // Enables data tiering. This option is not supported by all instance types. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).
  public dataTiering?: boolean;

  // The number of shards in the cluster. Defaults to `1`.
  public numShards?: number;

  // The ARN of the cluster.
  public arn?: string;

  // Patch version number of the Redis engine used by the cluster.
  public enginePatchVersion?: string;

  /*
The compute and memory capacity of the nodes in the cluster. See AWS documentation on [supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.supportedtypes.html) as well as [vertical scaling](https://docs.aws.amazon.com/memorydb/latest/devguide/cluster-vertical-scaling.html).

The following arguments are optional:
*/
  public nodeType?: string;

  // The name of the parameter group associated with the cluster.
  public parameterGroupName?: string;

  // Set of shards in this cluster.
  public shards?: Array<memorydb_ClusterShard>;

  // When set to `true`, the cluster will automatically receive minor engine version upgrades after launch. Defaults to `true`.
  public autoMinorVersionUpgrade?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Name of the final cluster snapshot to be created when this resource is deleted. If omitted, no final snapshot will be made.
  public finalSnapshotName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'autoMinorVersionUpgrade',
        'When set to `true`, the cluster will automatically receive minor engine version upgrades after launch. Defaults to `true`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'numReplicasPerShard',
        'The number of replicas to apply to each shard, up to a maximum of 5. Defaults to `1` (i.e. 2 nodes per shard).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'dataTiering',
        'Enables data tiering. This option is not supported by all instance types. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyArn',
        'ARN of the KMS key used to encrypt the cluster at rest.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'Set of VPC Security Group ID-s to associate with this cluster.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'numShards',
        'The number of shards in the cluster. Defaults to `1`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parameterGroupName',
        'The name of the parameter group associated with the cluster.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'maintenanceWindow',
        'Specifies the weekly time range during which maintenance on the cluster is performed. Specify as a range in the format `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:23:00-mon:01:30`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetGroupName',
        'The name of the subnet group to be used for the cluster. Defaults to a subnet group consisting of default VPC subnets.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description for the cluster.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'Version number of the Redis engine to be used for the cluster. Downgrades are not supported.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeType',
        'The compute and memory capacity of the nodes in the cluster. See AWS documentation on [supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.supportedtypes.html) as well as [vertical scaling](https://docs.aws.amazon.com/memorydb/latest/devguide/cluster-vertical-scaling.html).\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'snapshotRetentionLimit',
        'The number of days for which MemoryDB retains automatic snapshots before deleting them. When set to `0`, automatic backups are disabled. Defaults to `0`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'snapshotWindow',
        'The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: `05:00-09:00`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'snapshotArns',
        'List of ARN-s that uniquely identify RDB snapshot files stored in S3. The snapshot files will be used to populate the new cluster. Object names in the ARN-s cannot contain any commas.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'snapshotName',
        'The name of a snapshot from which to restore data into the new cluster.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'snsTopicArn',
        'ARN of the SNS topic to which cluster notifications are sent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'aclName',
        'The name of the Access Control List to associate with the cluster.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'tlsEnabled',
        'A flag to enable in-transit encryption on the cluster. When set to `false`, the `acl_name` must be `open-access`. Defaults to `true`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'finalSnapshotName',
        'Name of the final cluster snapshot to be created when this resource is deleted. If omitted, no final snapshot will be made.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'port',
        'The port number on which each of the nodes accepts connections. Defaults to `6379`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
