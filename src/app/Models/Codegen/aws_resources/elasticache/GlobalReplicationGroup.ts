import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticache_GlobalReplicationGroupGlobalNodeGroup,
  elasticache_GlobalReplicationGroupGlobalNodeGroup_GetTypes,
} from "../types/elasticache_GlobalReplicationGroupGlobalNodeGroup";

export interface GlobalReplicationGroupArgs {
  // The number of node groups (shards) on the global replication group.
  numNodeGroups?: number;

  /*
An ElastiCache Parameter Group to use for the Global Replication Group.
Required when upgrading a major engine version, but will be ignored if left configured after the upgrade is complete.
Specifying without a major version upgrade will fail.
Note that ElastiCache creates a copy of this parameter group for each member replication group.
*/
  parameterGroupName?: string;

  // The ID of the primary cluster that accepts writes and will replicate updates to the secondary cluster. If `primary_replication_group_id` is changed, creates a new resource.
  primaryReplicationGroupId?: string;

  /*
Specifies whether read-only replicas will be automatically promoted to read/write primary if the existing primary fails.
When creating, by default the Global Replication Group inherits the automatic failover setting of the primary replication group.
*/
  automaticFailoverEnabled?: boolean;

  /*
The instance class used.
See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html)
and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html).
When creating, by default the Global Replication Group inherits the node type of the primary replication group.
*/
  cacheNodeType?: string;

  /*
Redis version to use for the Global Replication Group.
When creating, by default the Global Replication Group inherits the version of the primary replication group.
If a version is specified, the Global Replication Group and all member replication groups will be upgraded to this version.
Cannot be downgraded without replacing the Global Replication Group and all member replication groups.
When the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
When the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.
*/
  engineVersion?: string;

  // A user-created description for the global replication group.
  globalReplicationGroupDescription?: string;

  // The suffix name of a Global Datastore. If `global_replication_group_id_suffix` is changed, creates a new resource.
  globalReplicationGroupIdSuffix?: string;
}
export class GlobalReplicationGroup extends Resource {
  // The ID of the primary cluster that accepts writes and will replicate updates to the secondary cluster. If `primary_replication_group_id` is changed, creates a new resource.
  public primaryReplicationGroupId?: string;

  // A flag that indicates whether the encryption in transit is enabled.
  public transitEncryptionEnabled?: boolean;

  // A flag that indicate whether the encryption at rest is enabled.
  public atRestEncryptionEnabled?: boolean;

  // A flag that indicate whether AuthToken (password) is enabled.
  public authTokenEnabled?: boolean;

  /*
Specifies whether read-only replicas will be automatically promoted to read/write primary if the existing primary fails.
When creating, by default the Global Replication Group inherits the automatic failover setting of the primary replication group.
*/
  public automaticFailoverEnabled?: boolean;

  // The name of the cache engine to be used for the clusters in this global replication group.
  public engine?: string;

  // The full version number of the cache engine running on the members of this global replication group.
  public engineVersionActual?: string;

  // Indicates whether the Global Datastore is cluster enabled.
  public clusterEnabled?: boolean;

  /*
Set of node groups (shards) on the global replication group.
Has the values:
*/
  public globalNodeGroups?: Array<elasticache_GlobalReplicationGroupGlobalNodeGroup>;

  /*
The instance class used.
See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html)
and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html).
When creating, by default the Global Replication Group inherits the node type of the primary replication group.
*/
  public cacheNodeType?: string;

  /*
Redis version to use for the Global Replication Group.
When creating, by default the Global Replication Group inherits the version of the primary replication group.
If a version is specified, the Global Replication Group and all member replication groups will be upgraded to this version.
Cannot be downgraded without replacing the Global Replication Group and all member replication groups.
When the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
When the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.
*/
  public engineVersion?: string;

  // A user-created description for the global replication group.
  public globalReplicationGroupDescription?: string;

  // The full ID of the global replication group.
  public globalReplicationGroupId?: string;

  // The suffix name of a Global Datastore. If `global_replication_group_id_suffix` is changed, creates a new resource.
  public globalReplicationGroupIdSuffix?: string;

  // The ARN of the ElastiCache Global Replication Group.
  public arn?: string;

  // The number of node groups (shards) on the global replication group.
  public numNodeGroups?: number;

  /*
An ElastiCache Parameter Group to use for the Global Replication Group.
Required when upgrading a major engine version, but will be ignored if left configured after the upgrade is complete.
Specifying without a major version upgrade will fail.
Note that ElastiCache creates a copy of this parameter group for each member replication group.
*/
  public parameterGroupName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parameterGroupName",
        "An ElastiCache Parameter Group to use for the Global Replication Group.\nRequired when upgrading a major engine version, but will be ignored if left configured after the upgrade is complete.\nSpecifying without a major version upgrade will fail.\nNote that ElastiCache creates a copy of this parameter group for each member replication group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "primaryReplicationGroupId",
        "The ID of the primary cluster that accepts writes and will replicate updates to the secondary cluster. If `primary_replication_group_id` is changed, creates a new resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "automaticFailoverEnabled",
        "Specifies whether read-only replicas will be automatically promoted to read/write primary if the existing primary fails.\nWhen creating, by default the Global Replication Group inherits the automatic failover setting of the primary replication group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cacheNodeType",
        "The instance class used.\nSee AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html)\nand [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html).\nWhen creating, by default the Global Replication Group inherits the node type of the primary replication group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Redis version to use for the Global Replication Group.\nWhen creating, by default the Global Replication Group inherits the version of the primary replication group.\nIf a version is specified, the Global Replication Group and all member replication groups will be upgraded to this version.\nCannot be downgraded without replacing the Global Replication Group and all member replication groups.\nWhen the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.\nWhen the version is 6, the major and minor version can be set, e.g., `6.2`,\nor the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.\nThe actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalReplicationGroupDescription",
        "A user-created description for the global replication group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalReplicationGroupIdSuffix",
        "The suffix name of a Global Datastore. If `global_replication_group_id_suffix` is changed, creates a new resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numNodeGroups",
        "The number of node groups (shards) on the global replication group.",
        [],
        false,
        false,
      ),
    ];
  }
}
