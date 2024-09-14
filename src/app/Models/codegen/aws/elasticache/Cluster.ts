import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  elasticache_ClusterLogDeliveryConfiguration,
  elasticache_ClusterLogDeliveryConfiguration_GetTypes,
} from "../types/elasticache_ClusterLogDeliveryConfiguration";
import {
  elasticache_ClusterCacheNode,
  elasticache_ClusterCacheNode_GetTypes,
} from "../types/elasticache_ClusterCacheNode";

export interface ClusterArgs {
  // Specify the outpost mode that will apply to the cache cluster creation. Valid values are `"single-outpost"` and `"cross-outpost"`, however AWS currently only supports `"single-outpost"` mode.
  outpostMode?: string;

  // Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes
  snapshotRetentionLimit?: number;

  // Name of your final cluster snapshot. If omitted, no final snapshot will be made.
  finalSnapshotIdentifier?: string;

  // The IP versions for cache cluster connections. IPv6 is supported with Redis engine `6.2` onword or Memcached version `1.6.6` for all [Nitro system](https://aws.amazon.com/ec2/nitro/) instances. Valid values are `ipv4`, `ipv6` or `dual_stack`.
  networkType?: string;

  // The initial number of cache nodes that the cache cluster will have. For Redis, this value must be 1. For Memcached, this value must be between 1 and 40. If this number is reduced on subsequent runs, the highest numbered nodes will be removed.
  numCacheNodes?: number;

  // Enable encryption in-transit. Supported only with Memcached versions `1.6.12` and later, running in a VPC. See the [ElastiCache in-transit encryption](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html) documentation for more details.
  transitEncryptionEnabled?: boolean;

  // Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html). See Log Delivery Configuration below for more details.
  logDeliveryConfigurations?: Array<elasticache_ClusterLogDeliveryConfiguration>;

  /*
The name of the parameter group to associate with this cache cluster.

The following arguments are optional:
*/
  parameterGroupName?: string;

  // ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.
  replicationGroupId?: string;

  // The instance class used. See AWS documentation for information on [supported node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). See AWS documentation for information on [supported node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/nodes-select-size.html). For Memcached, changing this value will re-create the resource.
  nodeType?: string;

  // List of the Availability Zones in which cache nodes are created. If you are creating your cluster in an Amazon VPC you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of `num_cache_nodes`. If you want all the nodes in the same Availability Zone, use `availability_zone` instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones. Detecting drift of existing node availability zone is not currently supported. Updating this argument by itself to migrate existing node availability zones is not currently supported and will show a perpetual difference.
  preferredAvailabilityZones?: Array<string>;

  // One or more VPC security groups associated with the cache cluster. Cannot be provided with `replication_group_id.`
  securityGroupIds?: Array<string>;

  // The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.
  ipDiscovery?: string;

  // ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`.
  notificationTopicArn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether any database modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon ElastiCache Documentation for more information.](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html).
  applyImmediately?: boolean;

  // Group identifier. ElastiCache converts this name to lowercase. Changing this value will re-create the resource.
  clusterId?: string;

  // Name of a snapshot from which to restore data into the new node group. Changing `snapshot_name` forces a new resource.
  snapshotName?: string;

  // Single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3. The object name cannot contain any commas. Changing `snapshot_arns` forces a new resource.
  snapshotArns?: string;

  // Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00
  snapshotWindow?: string;

  // Whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`.
  azMode?: string;

  /*
Version number of the cache engine to be used.
If not set, defaults to the latest version.
See [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.
When `engine` is `redis` and the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
When the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
Otherwise, specify the full version desired, e.g., `5.0.6`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. Cannot be provided with `replication_group_id.`
*/
  engineVersion?: string;

  // The port number on which each of the cache nodes will accept connections. For Memcached the default is 11211, and for Redis the default port is 6379. Cannot be provided with `replication_group_id`. Changing this value will re-create the resource.
  port?: number;

  // The outpost ARN in which the cache cluster will be created.
  preferredOutpostArn?: string;

  /*
Specifies the weekly time range for when maintenance
on the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC).
The minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`.
*/
  maintenanceWindow?: string;

  // Name of the subnet group to be used for the cache cluster. Changing this value will re-create the resource. Cannot be provided with `replication_group_id.`
  subnetGroupName?: string;

  /*
Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.
Only supported for engine type `"redis"` and if the engine version is 6 or higher.
Defaults to `true`.
*/
  autoMinorVersionUpgrade?: string;

  // Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource.
  availabilityZone?: string;

  // Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.
  engine?: string;
}
export class Cluster extends DS_Resource {
  // The IP versions for cache cluster connections. IPv6 is supported with Redis engine `6.2` onword or Memcached version `1.6.6` for all [Nitro system](https://aws.amazon.com/ec2/nitro/) instances. Valid values are `ipv4`, `ipv6` or `dual_stack`.
  public networkType?: string;

  // Single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3. The object name cannot contain any commas. Changing `snapshot_arns` forces a new resource.
  public snapshotArns?: string;

  /*
Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.
Only supported for engine type `"redis"` and if the engine version is 6 or higher.
Defaults to `true`.
*/
  public autoMinorVersionUpgrade?: string;

  // Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource.
  public availabilityZone?: string;

  // (Memcached only) Configuration endpoint to allow host discovery.
  public configurationEndpoint?: string;

  // ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.
  public replicationGroupId?: string;

  // Name of the subnet group to be used for the cache cluster. Changing this value will re-create the resource. Cannot be provided with `replication_group_id.`
  public subnetGroupName?: string;

  // Whether any database modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon ElastiCache Documentation for more information.](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html).
  public applyImmediately?: boolean;

  // Whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`.
  public azMode?: string;

  // Because ElastiCache pulls the latest minor or patch for a version, this attribute returns the running version of the cache engine.
  public engineVersionActual?: string;

  // The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.
  public ipDiscovery?: string;

  // The port number on which each of the cache nodes will accept connections. For Memcached the default is 11211, and for Redis the default port is 6379. Cannot be provided with `replication_group_id`. Changing this value will re-create the resource.
  public port?: number;

  // (Memcached only) DNS name of the cache cluster without the port appended.
  public clusterAddress?: string;

  // Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html). See Log Delivery Configuration below for more details.
  public logDeliveryConfigurations?: Array<elasticache_ClusterLogDeliveryConfiguration>;

  // The initial number of cache nodes that the cache cluster will have. For Redis, this value must be 1. For Memcached, this value must be between 1 and 40. If this number is reduced on subsequent runs, the highest numbered nodes will be removed.
  public numCacheNodes?: number;

  // Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00
  public snapshotWindow?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the created ElastiCache Cluster.
  public arn?: string;

  // List of node objects including `id`, `address`, `port` and `availability_zone`.
  public cacheNodes?: Array<elasticache_ClusterCacheNode>;

  // The instance class used. See AWS documentation for information on [supported node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). See AWS documentation for information on [supported node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/nodes-select-size.html). For Memcached, changing this value will re-create the resource.
  public nodeType?: string;

  // ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`.
  public notificationTopicArn?: string;

  // Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes
  public snapshotRetentionLimit?: number;

  /*
Version number of the cache engine to be used.
If not set, defaults to the latest version.
See [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.
When `engine` is `redis` and the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
When the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
Otherwise, specify the full version desired, e.g., `5.0.6`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. Cannot be provided with `replication_group_id.`
*/
  public engineVersion?: string;

  // Name of your final cluster snapshot. If omitted, no final snapshot will be made.
  public finalSnapshotIdentifier?: string;

  // Name of a snapshot from which to restore data into the new node group. Changing `snapshot_name` forces a new resource.
  public snapshotName?: string;

  // Enable encryption in-transit. Supported only with Memcached versions `1.6.12` and later, running in a VPC. See the [ElastiCache in-transit encryption](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html) documentation for more details.
  public transitEncryptionEnabled?: boolean;

  // Group identifier. ElastiCache converts this name to lowercase. Changing this value will re-create the resource.
  public clusterId?: string;

  /*
The name of the parameter group to associate with this cache cluster.

The following arguments are optional:
*/
  public parameterGroupName?: string;

  // One or more VPC security groups associated with the cache cluster. Cannot be provided with `replication_group_id.`
  public securityGroupIds?: Array<string>;

  // Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.
  public engine?: string;

  /*
Specifies the weekly time range for when maintenance
on the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC).
The minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`.
*/
  public maintenanceWindow?: string;

  // Specify the outpost mode that will apply to the cache cluster creation. Valid values are `"single-outpost"` and `"cross-outpost"`, however AWS currently only supports `"single-outpost"` mode.
  public outpostMode?: string;

  // List of the Availability Zones in which cache nodes are created. If you are creating your cluster in an Amazon VPC you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of `num_cache_nodes`. If you want all the nodes in the same Availability Zone, use `availability_zone` instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones. Detecting drift of existing node availability zone is not currently supported. Updating this argument by itself to migrate existing node availability zones is not currently supported and will show a perpetual difference.
  public preferredAvailabilityZones?: Array<string>;

  // The outpost ARN in which the cache cluster will be created.
  public preferredOutpostArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parameterGroupName",
        "The name of the parameter group to associate with this cache cluster.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "Name of your final cluster snapshot. If omitted, no final snapshot will be made.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeType",
        "The instance class used. See AWS documentation for information on [supported node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). See AWS documentation for information on [supported node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/nodes-select-size.html). For Memcached, changing this value will re-create the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "preferredAvailabilityZones",
        "List of the Availability Zones in which cache nodes are created. If you are creating your cluster in an Amazon VPC you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of `num_cache_nodes`. If you want all the nodes in the same Availability Zone, use `availability_zone` instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones. Detecting drift of existing node availability zone is not currently supported. Updating this argument by itself to migrate existing node availability zones is not currently supported and will show a perpetual difference.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipDiscovery",
        "The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "outpostMode",
        'Specify the outpost mode that will apply to the cache cluster creation. Valid values are `"single-outpost"` and `"cross-outpost"`, however AWS currently only supports `"single-outpost"` mode.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "One or more VPC security groups associated with the cache cluster. Cannot be provided with `replication_group_id.`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetGroupName",
        "Name of the subnet group to be used for the cache cluster. Changing this value will re-create the resource. Cannot be provided with `replication_group_id.`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkType",
        "The IP versions for cache cluster connections. IPv6 is supported with Redis engine `6.2` onword or Memcached version `1.6.6` for all [Nitro system](https://aws.amazon.com/ec2/nitro/) instances. Valid values are `ipv4`, `ipv6` or `dual_stack`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port number on which each of the cache nodes will accept connections. For Memcached the default is 11211, and for Redis the default port is 6379. Cannot be provided with `replication_group_id`. Changing this value will re-create the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotName",
        "Name of a snapshot from which to restore data into the new node group. Changing `snapshot_name` forces a new resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logDeliveryConfigurations",
        "Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html). See Log Delivery Configuration below for more details.",
        () => elasticache_ClusterLogDeliveryConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "azMode",
        "Whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maintenanceWindow",
        "Specifies the weekly time range for when maintenance\non the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC).\nThe minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numCacheNodes",
        "The initial number of cache nodes that the cache cluster will have. For Redis, this value must be 1. For Memcached, this value must be between 1 and 40. If this number is reduced on subsequent runs, the highest numbered nodes will be removed.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterId",
        "Group identifier. ElastiCache converts this name to lowercase. Changing this value will re-create the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitEncryptionEnabled",
        "Enable encryption in-transit. Supported only with Memcached versions `1.6.12` and later, running in a VPC. See the [ElastiCache in-transit encryption](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html) documentation for more details.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationTopicArn",
        "ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotArns",
        "Single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3. The object name cannot contain any commas. Changing `snapshot_arns` forces a new resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotWindow",
        "Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Version number of the cache engine to be used.\nIf not set, defaults to the latest version.\nSee [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.\nWhen `engine` is `redis` and the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.\nWhen the version is 6, the major and minor version can be set, e.g., `6.2`,\nor the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.\nOtherwise, specify the full version desired, e.g., `5.0.6`.\nThe actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below. Cannot be provided with `replication_group_id.`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredOutpostArn",
        "The outpost ARN in which the cache cluster will be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "snapshotRetentionLimit",
        "Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Whether any database modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon ElastiCache Documentation for more information.](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoMinorVersionUpgrade",
        'Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.\nOnly supported for engine type `"redis"` and if the engine version is 6 or higher.\nDefaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationGroupId",
        "ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
