import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  docdb_ElasticClusterTimeouts,
  docdb_ElasticClusterTimeouts_GetTypes,
} from "../types/docdb_ElasticClusterTimeouts";

export interface ElasticClusterArgs {
  // Name of the Elastic DocumentDB cluster
  name?: string;

  // Number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64
  shardCapacity?: number;

  /*
Number of shards assigned to the elastic cluster. Maximum is 32

The following arguments are optional:
*/
  shardCount?: number;

  //
  timeouts?: docdb_ElasticClusterTimeouts;

  // List of VPC security groups to associate with the Elastic DocumentDB Cluster
  vpcSecurityGroupIds?: Array<string>;

  // Password for the Elastic DocumentDB cluster administrator. Can contain any printable ASCII characters. Must be at least 8 characters
  adminUserPassword?: string;

  // ARN of a KMS key that is used to encrypt the Elastic DocumentDB cluster. If not specified, the default encryption key that KMS creates for your account is used.
  kmsKeyId?: string;

  // Weekly time range during which system maintenance can occur in UTC. Format: `ddd:hh24:mi-ddd:hh24:mi`. If not specified, AWS will choose a random 30-minute window on a random day of the week.
  preferredMaintenanceWindow?: string;

  // IDs of subnets in which the Elastic DocumentDB Cluster operates.
  subnetIds?: Array<string>;

  // A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the Elastic DocumentDB cluster administrator
  adminUserName?: string;

  // Authentication type for the Elastic DocumentDB cluster. Valid values are `PLAIN_TEXT` and `SECRET_ARN`
  authType?: string;
}
export class ElasticCluster extends DS_Resource {
  // ARN of a KMS key that is used to encrypt the Elastic DocumentDB cluster. If not specified, the default encryption key that KMS creates for your account is used.
  public kmsKeyId?: string;

  /*
Number of shards assigned to the elastic cluster. Maximum is 32

The following arguments are optional:
*/
  public shardCount?: number;

  //
  public tagsAll?: Map<string, string>;

  // Password for the Elastic DocumentDB cluster administrator. Can contain any printable ASCII characters. Must be at least 8 characters
  public adminUserPassword?: string;

  // The DNS address of the DocDB instance
  public endpoint?: string;

  // Number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64
  public shardCapacity?: number;

  // A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: docdb_ElasticClusterTimeouts;

  // Name of the Elastic DocumentDB cluster administrator
  public adminUserName?: string;

  // Weekly time range during which system maintenance can occur in UTC. Format: `ddd:hh24:mi-ddd:hh24:mi`. If not specified, AWS will choose a random 30-minute window on a random day of the week.
  public preferredMaintenanceWindow?: string;

  // Name of the Elastic DocumentDB cluster
  public name?: string;

  // IDs of subnets in which the Elastic DocumentDB Cluster operates.
  public subnetIds?: Array<string>;

  // List of VPC security groups to associate with the Elastic DocumentDB Cluster
  public vpcSecurityGroupIds?: Array<string>;

  // ARN of the DocumentDB Elastic Cluster
  public arn?: string;

  // Authentication type for the Elastic DocumentDB cluster. Valid values are `PLAIN_TEXT` and `SECRET_ARN`
  public authType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Elastic DocumentDB cluster",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => docdb_ElasticClusterTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "Weekly time range during which system maintenance can occur in UTC. Format: `ddd:hh24:mi-ddd:hh24:mi`. If not specified, AWS will choose a random 30-minute window on a random day of the week.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ARN of a KMS key that is used to encrypt the Elastic DocumentDB cluster. If not specified, the default encryption key that KMS creates for your account is used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "IDs of subnets in which the Elastic DocumentDB Cluster operates.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "adminUserName",
        "Name of the Elastic DocumentDB cluster administrator",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authType",
        "Authentication type for the Elastic DocumentDB cluster. Valid values are `PLAIN_TEXT` and `SECRET_ARN`",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "shardCapacity",
        "Number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "shardCount",
        "Number of shards assigned to the elastic cluster. Maximum is 32\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "List of VPC security groups to associate with the Elastic DocumentDB Cluster",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "adminUserPassword",
        "Password for the Elastic DocumentDB cluster administrator. Can contain any printable ASCII characters. Must be at least 8 characters",
        () => [],
        true,
        false,
      ),
    ];
  }
}
