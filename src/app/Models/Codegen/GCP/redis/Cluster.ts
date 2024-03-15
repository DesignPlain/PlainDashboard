import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ClusterPscConfig } from "../types/ClusterPscConfig";
import { ClusterPscConnection } from "../types/ClusterPscConnection";
import { ClusterDiscoveryEndpoint } from "../types/ClusterDiscoveryEndpoint";
import { ClusterStateInfo } from "../types/ClusterStateInfo";

export interface ClusterArgs {
  /*
Unique name of the resource in this scope including project and location using the form:
projects/{projectId}/locations/{locationId}/clusters/{clusterId}
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Required. Each PscConfig configures the consumer network where two
network addresses will be designated to the cluster for client access.
Currently, only one PscConfig is supported.
Structure is documented below.
*/
  PscConfigs?: Array<ClusterPscConfig>;

  // The name of the region of the Redis cluster.
  Region?: string;

  // Optional. The number of replica nodes per shard.
  ReplicaCount?: number;

  // Required. Number of shards for the Redis cluster.
  ShardCount?: number;

  /*
Optional. The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster.
Default value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.
Possible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.
*/
  TransitEncryptionMode?: string;

  /*
Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
Default value is `AUTH_MODE_DISABLED`.
Possible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.
*/
  AuthorizationMode?: string;
}
export class Cluster extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. PSC connections for discovery of the cluster topology and accessing the cluster.
Structure is documented below.
*/
  public PscConnections?: Array<ClusterPscConnection>;

  // The name of the region of the Redis cluster.
  public Region?: string;

  // Optional. The number of replica nodes per shard.
  public ReplicaCount?: number;

  // Required. Number of shards for the Redis cluster.
  public ShardCount?: number;

  /*
Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
Default value is `AUTH_MODE_DISABLED`.
Possible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.
*/
  public AuthorizationMode?: string;

  /*
Output only. Endpoints created on each given network,
for Redis clients to connect to the cluster.
Currently only one endpoint is supported.
Structure is documented below.
*/
  public DiscoveryEndpoints?: Array<ClusterDiscoveryEndpoint>;

  /*
Unique name of the resource in this scope including project and location using the form:
projects/{projectId}/locations/{locationId}/clusters/{clusterId}
*/
  public Name?: string;

  // Output only. Redis memory size in GB for the entire cluster.
  public SizeGb?: number;

  /*
Output only. Additional information about the current state of the cluster.
Structure is documented below.
*/
  public StateInfos?: Array<ClusterStateInfo>;

  // System assigned, unique identifier for the cluster.
  public Uid?: string;

  /*
The timestamp associated with the cluster creation request. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  /*
Required. Each PscConfig configures the consumer network where two
network addresses will be designated to the cluster for client access.
Currently, only one PscConfig is supported.
Structure is documented below.
*/
  public PscConfigs?: Array<ClusterPscConfig>;

  // The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED
  public State?: string;

  /*
Optional. The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster.
Default value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.
Possible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.
*/
  public TransitEncryptionMode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The name of the region of the Redis cluster.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ReplicaCount",
        "Optional. The number of replica nodes per shard.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ShardCount",
        "Required. Number of shards for the Redis cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TransitEncryptionMode",
        "Optional. The in-transit encryption for the Redis cluster.\nIf not provided, encryption is disabled for the cluster.\nDefault value is `TRANSIT_ENCRYPTION_MODE_DISABLED`.\nPossible values are: `TRANSIT_ENCRYPTION_MODE_UNSPECIFIED`, `TRANSIT_ENCRYPTION_MODE_DISABLED`, `TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizationMode",
        "Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.\nDefault value is `AUTH_MODE_DISABLED`.\nPossible values are: `AUTH_MODE_UNSPECIFIED`, `AUTH_MODE_IAM_AUTH`, `AUTH_MODE_DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Unique name of the resource in this scope including project and location using the form:\nprojects/{projectId}/locations/{locationId}/clusters/{clusterId}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PscConfigs",
        "Required. Each PscConfig configures the consumer network where two\nnetwork addresses will be designated to the cluster for client access.\nCurrently, only one PscConfig is supported.\nStructure is documented below.",
      ),
    ];
  }
}
