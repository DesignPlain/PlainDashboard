import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceMaintenanceSchedule } from "../types/InstanceMaintenanceSchedule";
import { InstanceNode } from "../types/InstanceNode";
import { InstanceServerCaCert } from "../types/InstanceServerCaCert";
import { InstanceMaintenancePolicy } from "../types/InstanceMaintenancePolicy";
import { InstancePersistenceConfig } from "../types/InstancePersistenceConfig";

export interface InstanceArgs {
  /*
The connection mode of the Redis instance.
Default value is `DIRECT_PEERING`.
Possible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.
*/
  ConnectMode?: string;

  /*
Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.
*/
  CustomerManagedKey?: string;

  /*
The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.
*/
  ReservedIpRange?: string;

  /*
The service tier of the instance. Must be one of these values:
- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances
Default value is `BASIC`.
Possible values are: `BASIC`, `STANDARD_HA`.
*/
  Tier?: string;

  /*
The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication
Default value is `DISABLED`.
Possible values are: `SERVER_AUTHENTICATION`, `DISABLED`.
*/
  TransitEncryptionMode?: string;

  // The name of the Redis region of the instance.
  Region?: string;

  /*
Optional. Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".
*/
  SecondaryIpRange?: string;

  /*
The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used.
*/
  AuthorizedNetwork?: string;

  // An arbitrary and optional user-provided name for the instance.
  DisplayName?: string;

  /*
Redis memory size in GiB.


- - -
*/
  MemorySizeGb?: number;

  /*
Optional. Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas.
Possible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.
*/
  ReadReplicasMode?: string;

  /*
Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
*/
  RedisConfigs?: Map<string, string>;

  /*
The version of Redis software. If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.
*/
  RedisVersion?: string;

  /*
Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId].
*/
  AlternativeLocationId?: string;

  /*
Optional. Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.
*/
  AuthEnabled?: boolean;

  /*
The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].
*/
  LocationId?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  Name?: string;

  /*
Optional. The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.
*/
  ReplicaCount?: number;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  MaintenancePolicy?: InstanceMaintenancePolicy;

  /*
Persistence configuration for an instance.
Structure is documented below.
*/
  PersistenceConfig?: InstancePersistenceConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Instance extends Resource {
  /*
The connection mode of the Redis instance.
Default value is `DIRECT_PEERING`.
Possible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.
*/
  public ConnectMode?: string;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  public MaintenancePolicy?: InstanceMaintenancePolicy;

  /*
Upcoming maintenance schedule.
Structure is documented below.
*/
  public MaintenanceSchedules?: Array<InstanceMaintenanceSchedule>;

  /*
Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only.
Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes
will exhibit some lag behind the primary. Write requests must target 'host'.
*/
  public ReadEndpoint?: string;

  /*
Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
*/
  public RedisConfigs?: Map<string, string>;

  /*
The version of Redis software. If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.
*/
  public RedisVersion?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  public CreateTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Optional. Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.
*/
  public AuthEnabled?: boolean;

  /*
Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.
*/
  public CustomerManagedKey?: string;

  // An arbitrary and optional user-provided name for the instance.
  public DisplayName?: string;

  // The name of the Redis region of the instance.
  public Region?: string;

  /*
The service tier of the instance. Must be one of these values:
- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances
Default value is `BASIC`.
Possible values are: `BASIC`, `STANDARD_HA`.
*/
  public Tier?: string;

  /*
Redis memory size in GiB.


- - -
*/
  public MemorySizeGb?: number;

  /*
Output only. Cloud IAM identity used by import / export operations
to transfer data to/from Cloud Storage. Format is "serviceAccount:".
The value may change over time for a given instance so should be
checked before each import/export operation.
*/
  public PersistenceIamIdentity?: string;

  /*
Optional. Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas.
Possible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.
*/
  public ReadReplicasMode?: string;

  /*
The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.
*/
  public ReservedIpRange?: string;

  /*
The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication
Default value is `DISABLED`.
Possible values are: `SERVER_AUTHENTICATION`, `DISABLED`.
*/
  public TransitEncryptionMode?: string;

  /*
The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used.
*/
  public AuthorizedNetwork?: string;

  /*
Hostname or IP address of the exposed Redis endpoint used by clients
to connect to the service.
*/
  public Host?: string;

  /*
Persistence configuration for an instance.
Structure is documented below.
*/
  public PersistenceConfig?: InstancePersistenceConfig;

  /*
Optional. Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".
*/
  public SecondaryIpRange?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public Name?: string;

  /*
Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId].
*/
  public AlternativeLocationId?: string;

  // AUTH String set on the instance. This field will only be populated if auth_enabled is true.
  public AuthString?: string;

  /*
The current zone where the Redis endpoint is placed.
For Basic Tier instances, this will always be the same as the
[locationId] provided by the user at creation time. For Standard Tier
instances, this can be either [locationId] or [alternativeLocationId]
and can change after a failover event.
*/
  public CurrentLocationId?: string;

  /*
Output only. Info per node.
Structure is documented below.
*/
  public Nodes?: Array<InstanceNode>;

  /*
Output only. The port number of the exposed readonly redis endpoint. Standard tier only.
Write requests should target 'port'.
*/
  public ReadEndpointPort?: number;

  /*
Optional. The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.
*/
  public ReplicaCount?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].
*/
  public LocationId?: string;

  // The port number of the exposed Redis endpoint.
  public Port?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
List of server CA certificates for the instance.
Structure is documented below.
*/
  public ServerCaCerts?: Array<InstanceServerCaCert>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The name of the Redis region of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReadReplicasMode",
        "Optional. Read replica mode. Can only be specified when trying to create the instance.\nIf not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.\n- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the\ninstance cannot scale up or down the number of replicas.\n- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance\ncan scale up and down the number of replicas.\nPossible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AuthEnabled",
        'Optional. Indicates whether OSS Redis AUTH is enabled for the\ninstance. If set to "true" AUTH is enabled on the instance.\nDefault value is "false" meaning AUTH is disabled.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PersistenceConfig",
        "Persistence configuration for an instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservedIpRange",
        "The CIDR range of internal addresses that are reserved for this\ninstance. If not provided, the service will choose an unused /29\nblock, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be\nunique and non-overlapping with existing subnets in an authorized\nnetwork.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An arbitrary and optional user-provided name for the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RedisVersion",
        "The version of Redis software. If not provided, latest supported\nversion will be used. Please check the API documentation linked\nat the top for the latest valid values.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the instance or a fully qualified identifier for the instance.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ReplicaCount",
        "Optional. The number of replica nodes. The valid range for the Standard Tier with\nread replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled\nfor a Standard Tier instance, the only valid value is 1 and the default is 1.\nThe valid value for basic tier is 0 and the default is also 0.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecondaryIpRange",
        'Optional. Additional IP range for node placement. Required when enabling read replicas on\nan existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or\n"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address\nrange associated with the private service access connection, or "auto".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The service tier of the instance. Must be one of these values:\n- BASIC: standalone instance\n- STANDARD_HA: highly available primary/replica instances\nDefault value is `BASIC`.\nPossible values are: `BASIC`, `STANDARD_HA`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TransitEncryptionMode",
        "The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.\n- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication\nDefault value is `DISABLED`.\nPossible values are: `SERVER_AUTHENTICATION`, `DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LocationId",
        "The zone where the instance will be provisioned. If not provided,\nthe service will choose a zone for the instance. For STANDARD_HA tier,\ninstances will be created across two zones for protection against\nzonal failures. If [alternativeLocationId] is also provided, it must\nbe different from [locationId].",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectMode",
        "The connection mode of the Redis instance.\nDefault value is `DIRECT_PEERING`.\nPossible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizedNetwork",
        "The full name of the Google Compute Engine network to which the\ninstance is connected. If left unspecified, the default network\nwill be used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MemorySizeGb",
        "Redis memory size in GiB.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "RedisConfigs",
        "Redis configuration parameters, according to http://redis.io/topics/config.\nPlease check Memorystore documentation for the list of supported parameters:\nhttps://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs",
      ),
      new DynamicUIProps(
        InputType.String,
        "AlternativeLocationId",
        "Only applicable to STANDARD_HA tier which protects the instance\nagainst zonal failures by provisioning it across two zones.\nIf provided, it must be a different zone from the one provided in\n[locationId].",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenancePolicy",
        "Maintenance policy for an instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomerManagedKey",
        "Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis\ninstance. If this is provided, CMEK is enabled.",
      ),
    ];
  }
}
