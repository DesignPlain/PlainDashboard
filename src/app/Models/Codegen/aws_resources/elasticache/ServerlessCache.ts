import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticache_ServerlessCacheTimeouts,
  elasticache_ServerlessCacheTimeouts_GetTypes,
} from "../types/elasticache_ServerlessCacheTimeouts";
import {
  elasticache_ServerlessCacheCacheUsageLimits,
  elasticache_ServerlessCacheCacheUsageLimits_GetTypes,
} from "../types/elasticache_ServerlessCacheCacheUsageLimits";
import {
  elasticache_ServerlessCacheEndpoint,
  elasticache_ServerlessCacheEndpoint_GetTypes,
} from "../types/elasticache_ServerlessCacheEndpoint";
import {
  elasticache_ServerlessCacheReaderEndpoint,
  elasticache_ServerlessCacheReaderEndpoint_GetTypes,
} from "../types/elasticache_ServerlessCacheReaderEndpoint";

export interface ServerlessCacheArgs {
  /*
The Cluster name which serves as a unique identifier to the serverless cache

The following arguments are optional:
*/
  name?: string;

  // The list of ARN(s) of the snapshot that the new serverless cache will be created from. Available for Redis only.
  snapshotArnsToRestores?: Array<string>;

  //
  timeouts?: elasticache_ServerlessCacheTimeouts;

  // The number of snapshots that will be retained for the serverless cache that is being created. As new snapshots beyond this limit are added, the oldest snapshots will be deleted on a rolling basis. Available for Redis only.
  snapshotRetentionLimit?: number;

  // The identifier of the UserGroup to be associated with the serverless cache. Available for Redis only. Default is NULL.
  userGroupId?: string;

  // Sets the cache usage limits for storage and ElastiCache Processing Units for the cache. See configuration below.
  cacheUsageLimits?: elasticache_ServerlessCacheCacheUsageLimits;

  // The daily time that snapshots will be created from the new serverless cache. Only supported for engine type `"redis"`. Defaults to `0`.
  dailySnapshotTime?: string;

  // User-provided description for the serverless cache. The default is NULL.
  description?: string;

  // Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.
  engine?: string;

  // A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.
  securityGroupIds?: Array<string>;

  // A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.
  subnetIds?: Array<string>;

  // ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.
  kmsKeyId?: string;

  /*
The version of the cache engine that will be used to create the serverless cache.
See [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.
*/
  majorEngineVersion?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ServerlessCache extends Resource {
  // The Amazon Resource Name (ARN) of the serverless cache.
  public arn?: string;

  // Timestamp of when the serverless cache was created.
  public createTime?: string;

  // The daily time that snapshots will be created from the new serverless cache. Only supported for engine type `"redis"`. Defaults to `0`.
  public dailySnapshotTime?: string;

  // Represents the information required for client programs to connect to a cache node. See config below for details.
  public endpoints?: Array<elasticache_ServerlessCacheEndpoint>;

  /*
The version of the cache engine that will be used to create the serverless cache.
See [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.
*/
  public majorEngineVersion?: string;

  // The current status of the serverless cache. The allowed values are CREATING, AVAILABLE, DELETING, CREATE-FAILED and MODIFYING.
  public status?: string;

  // The identifier of the UserGroup to be associated with the serverless cache. Available for Redis only. Default is NULL.
  public userGroupId?: string;

  // Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.
  public engine?: string;

  /*
The Cluster name which serves as a unique identifier to the serverless cache

The following arguments are optional:
*/
  public name?: string;

  // A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.
  public subnetIds?: Array<string>;

  // User-provided description for the serverless cache. The default is NULL.
  public description?: string;

  // The name and version number of the engine the serverless cache is compatible with.
  public fullEngineVersion?: string;

  // ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.
  public kmsKeyId?: string;

  // Represents the information required for client programs to connect to a cache node. See config below for details.
  public readerEndpoints?: Array<elasticache_ServerlessCacheReaderEndpoint>;

  // The list of ARN(s) of the snapshot that the new serverless cache will be created from. Available for Redis only.
  public snapshotArnsToRestores?: Array<string>;

  // The number of snapshots that will be retained for the serverless cache that is being created. As new snapshots beyond this limit are added, the oldest snapshots will be deleted on a rolling basis. Available for Redis only.
  public snapshotRetentionLimit?: number;

  //
  public timeouts?: elasticache_ServerlessCacheTimeouts;

  // Sets the cache usage limits for storage and ElastiCache Processing Units for the cache. See configuration below.
  public cacheUsageLimits?: elasticache_ServerlessCacheCacheUsageLimits;

  // A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.
  public securityGroupIds?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description for the serverless cache. The default is NULL.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "snapshotRetentionLimit",
        "The number of snapshots that will be retained for the serverless cache that is being created. As new snapshots beyond this limit are added, the oldest snapshots will be deleted on a rolling basis. Available for Redis only.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The Cluster name which serves as a unique identifier to the serverless cache\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        elasticache_ServerlessCacheTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cacheUsageLimits",
        "Sets the cache usage limits for storage and ElastiCache Processing Units for the cache. See configuration below.",
        elasticache_ServerlessCacheCacheUsageLimits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dailySnapshotTime",
        'The daily time that snapshots will be created from the new serverless cache. Only supported for engine type `"redis"`. Defaults to `0`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the cache engine to be used for this cache cluster. Valid values are `memcached` or `redis`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "majorEngineVersion",
        "The version of the cache engine that will be used to create the serverless cache.\nSee [Describe Cache Engine Versions](https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-cache-engine-versions.html) in the AWS Documentation for supported versions.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "snapshotArnsToRestores",
        "The list of ARN(s) of the snapshot that the new serverless cache will be created from. Available for Redis only.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userGroupId",
        "The identifier of the UserGroup to be associated with the serverless cache. Available for Redis only. Default is NULL.",
        [],
        false,
        false,
      ),
    ];
  }
}
