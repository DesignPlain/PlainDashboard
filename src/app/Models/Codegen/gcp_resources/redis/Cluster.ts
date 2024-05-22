import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redis_ClusterPscConfig,
  redis_ClusterPscConfig_GetTypes,
} from "../types/redis_ClusterPscConfig";
import {
  redis_ClusterStateInfo,
  redis_ClusterStateInfo_GetTypes,
} from "../types/redis_ClusterStateInfo";
import {
  redis_ClusterPscConnection,
  redis_ClusterPscConnection_GetTypes,
} from "../types/redis_ClusterPscConnection";
import {
  redis_ClusterDiscoveryEndpoint,
  redis_ClusterDiscoveryEndpoint_GetTypes,
} from "../types/redis_ClusterDiscoveryEndpoint";

export interface ClusterArgs {
  /*
Optional. The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster.
Default value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.
Possible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.
*/
  transitEncryptionMode?: string;

  /*
Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
Default value is `AUTH_MODE_DISABLED`.
Possible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.
*/
  authorizationMode?: string;

  /*
Unique name of the resource in this scope including project and location using the form:
projects/{projectId}/locations/{locationId}/clusters/{clusterId}
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Required. Each PscConfig configures the consumer network where two
network addresses will be designated to the cluster for client access.
Currently, only one PscConfig is supported.
Structure is documented below.
*/
  pscConfigs?: Array<redis_ClusterPscConfig>;

  // The name of the region of the Redis cluster.
  region?: string;

  // Optional. The number of replica nodes per shard.
  replicaCount?: number;

  // Required. Number of shards for the Redis cluster.
  shardCount?: number;
}
export class Cluster extends Resource {
  /*
Unique name of the resource in this scope including project and location using the form:
projects/{projectId}/locations/{locationId}/clusters/{clusterId}
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Required. Number of shards for the Redis cluster.
  public shardCount?: number;

  // Output only. Redis memory size in GB for the entire cluster.
  public sizeGb?: number;

  // The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED
  public state?: string;

  /*
Output only. Additional information about the current state of the cluster.
Structure is documented below.
*/
  public stateInfos?: Array<redis_ClusterStateInfo>;

  /*
Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
Default value is `AUTH_MODE_DISABLED`.
Possible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.
*/
  public authorizationMode?: string;

  /*
The timestamp associated with the cluster creation request. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
Required. Each PscConfig configures the consumer network where two
network addresses will be designated to the cluster for client access.
Currently, only one PscConfig is supported.
Structure is documented below.
*/
  public pscConfigs?: Array<redis_ClusterPscConfig>;

  /*
Output only. PSC connections for discovery of the cluster topology and accessing the cluster.
Structure is documented below.
*/
  public pscConnections?: Array<redis_ClusterPscConnection>;

  // The name of the region of the Redis cluster.
  public region?: string;

  // Optional. The number of replica nodes per shard.
  public replicaCount?: number;

  /*
Optional. The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster.
Default value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.
Possible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.
*/
  public transitEncryptionMode?: string;

  /*
Output only. Endpoints created on each given network,
for Redis clients to connect to the cluster.
Currently only one endpoint is supported.
Structure is documented below.
*/
  public discoveryEndpoints?: Array<redis_ClusterDiscoveryEndpoint>;

  // System assigned, unique identifier for the cluster.
  public uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "region",
        "The name of the region of the Redis cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "replicaCount",
        "Optional. The number of replica nodes per shard.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "shardCount",
        "Required. Number of shards for the Redis cluster.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitEncryptionMode",
        "Optional. The in-transit encryption for the Redis cluster.\nIf not provided, encryption is disabled for the cluster.\nDefault value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.\nPossible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizationMode",
        "Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.\nDefault value is `AUTH_MODE_DISABLED`.\nPossible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name of the resource in this scope including project and location using the form:\nprojects/{projectId}/locations/{locationId}/clusters/{clusterId}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "pscConfigs",
        "Required. Each PscConfig configures the consumer network where two\nnetwork addresses will be designated to the cluster for client access.\nCurrently, only one PscConfig is supported.\nStructure is documented below.",
        redis_ClusterPscConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
