import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  redis_InstanceMaintenancePolicy,
  redis_InstanceMaintenancePolicy_GetTypes,
} from '../types/redis_InstanceMaintenancePolicy';
import {
  redis_InstancePersistenceConfig,
  redis_InstancePersistenceConfig_GetTypes,
} from '../types/redis_InstancePersistenceConfig';
import {
  redis_InstanceServerCaCert,
  redis_InstanceServerCaCert_GetTypes,
} from '../types/redis_InstanceServerCaCert';
import {
  redis_InstanceNode,
  redis_InstanceNode_GetTypes,
} from '../types/redis_InstanceNode';
import {
  redis_InstanceMaintenanceSchedule,
  redis_InstanceMaintenanceSchedule_GetTypes,
} from '../types/redis_InstanceMaintenanceSchedule';

export interface InstanceArgs {
  /*
Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId].
*/
  alternativeLocationId?: string;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  /*
The connection mode of the Redis instance.
Default value is `DIRECT_PEERING`.
Possible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.
*/
  connectMode?: string;

  /*
Redis memory size in GiB.


- - -
*/
  memorySizeGb?: number;

  // The name of the Redis region of the instance.
  region?: string;

  /*
The service tier of the instance. Must be one of these values:
- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances
Default value is `BASIC`.
Possible values are: `BASIC`, `STANDARD_HA`.
*/
  tier?: string;

  /*
Optional. Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas.
Possible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.
*/
  readReplicasMode?: string;

  /*
The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication
Default value is `DISABLED`.
Possible values are: `SERVER_AUTHENTICATION`, `DISABLED`.
*/
  transitEncryptionMode?: string;

  /*
Optional. Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.
*/
  authEnabled?: boolean;

  /*
The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used.
*/
  authorizedNetwork?: string;

  /*
Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.
*/
  customerManagedKey?: string;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  maintenancePolicy?: redis_InstanceMaintenancePolicy;

  /*
Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
*/
  redisConfigs?: Map<string, string>;

  /*
The version of Redis software. If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.
*/
  redisVersion?: string;

  /*
Optional. The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.
*/
  replicaCount?: number;

  /*
The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.
*/
  reservedIpRange?: string;

  // An arbitrary and optional user-provided name for the instance.
  displayName?: string;

  /*
The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].
*/
  locationId?: string;

  /*
Persistence configuration for an instance.
Structure is documented below.
*/
  persistenceConfig?: redis_InstancePersistenceConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Optional. Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".
*/
  secondaryIpRange?: string;
}
export class Instance extends DS_Resource {
  /*
Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId].
*/
  public alternativeLocationId?: string;

  /*
The current zone where the Redis endpoint is placed.
For Basic Tier instances, this will always be the same as the
[locationId] provided by the user at creation time. For Standard Tier
instances, this can be either [locationId] or [alternativeLocationId]
and can change after a failover event.
*/
  public currentLocationId?: string;

  /*
Resource labels to represent user provided metadata.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name of the Redis region of the instance.
  public region?: string;

  /*
List of server CA certificates for the instance.
Structure is documented below.
*/
  public serverCaCerts?: Array<redis_InstanceServerCaCert>;

  /*
Redis memory size in GiB.


- - -
*/
  public memorySizeGb?: number;

  /*
Output only. Info per node.
Structure is documented below.
*/
  public nodes?: Array<redis_InstanceNode>;

  /*
Output only. Cloud IAM identity used by import / export operations
to transfer data to/from Cloud Storage. Format is "serviceAccount:".
The value may change over time for a given instance so should be
checked before each import/export operation.
*/
  public persistenceIamIdentity?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Output only. The port number of the exposed readonly redis endpoint. Standard tier only.
Write requests should target 'port'.
*/
  public readEndpointPort?: number;

  /*
Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
*/
  public redisConfigs?: Map<string, string>;

  /*
The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used.
*/
  public authorizedNetwork?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  public createTime?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  /*
Persistence configuration for an instance.
Structure is documented below.
*/
  public persistenceConfig?: redis_InstancePersistenceConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  public maintenancePolicy?: redis_InstanceMaintenancePolicy;

  /*
Upcoming maintenance schedule.
Structure is documented below.
*/
  public maintenanceSchedules?: Array<redis_InstanceMaintenanceSchedule>;

  /*
The version of Redis software. If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.
*/
  public redisVersion?: string;

  /*
The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.
*/
  public reservedIpRange?: string;

  /*
Optional. Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".
*/
  public secondaryIpRange?: string;

  /*
Optional. Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.
*/
  public authEnabled?: boolean;

  /*
The connection mode of the Redis instance.
Default value is `DIRECT_PEERING`.
Possible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.
*/
  public connectMode?: string;

  /*
Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.
*/
  public customerManagedKey?: string;

  /*
The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].
*/
  public locationId?: string;

  /*
Optional. The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.
*/
  public replicaCount?: number;

  // AUTH String set on the instance. This field will only be populated if auth_enabled is true.
  public authString?: string;

  // An arbitrary and optional user-provided name for the instance.
  public displayName?: string;

  /*
The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication
Default value is `DISABLED`.
Possible values are: `SERVER_AUTHENTICATION`, `DISABLED`.
*/
  public transitEncryptionMode?: string;

  /*
Hostname or IP address of the exposed Redis endpoint used by clients
to connect to the service.
*/
  public host?: string;

  // The port number of the exposed Redis endpoint.
  public port?: number;

  /*
Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only.
Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes
will exhibit some lag behind the primary. Write requests must target 'host'.
*/
  public readEndpoint?: string;

  /*
Optional. Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas.
Possible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.
*/
  public readReplicasMode?: string;

  /*
The service tier of the instance. Must be one of these values:
- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances
Default value is `BASIC`.
Possible values are: `BASIC`, `STANDARD_HA`.
*/
  public tier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'customerManagedKey',
        'Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis\ninstance. If this is provided, CMEK is enabled.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenancePolicy',
        'Maintenance policy for an instance.\nStructure is documented below.',
        () => redis_InstanceMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The name of the Redis region of the instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'tier',
        'The service tier of the instance. Must be one of these values:\n- BASIC: standalone instance\n- STANDARD_HA: highly available primary/replica instances\nDefault value is `BASIC`.\nPossible values are: `BASIC`, `STANDARD_HA`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'memorySizeGb',
        'Redis memory size in GiB.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'readReplicasMode',
        'Optional. Read replica mode. Can only be specified when trying to create the instance.\nIf not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.\n- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the\ninstance cannot scale up or down the number of replicas.\n- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance\ncan scale up and down the number of replicas.\nPossible values are: `READ_REPLICAS_DISABLED`, `READ_REPLICAS_ENABLED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitEncryptionMode',
        'The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.\n- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication\nDefault value is `DISABLED`.\nPossible values are: `SERVER_AUTHENTICATION`, `DISABLED`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'An arbitrary and optional user-provided name for the instance.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'persistenceConfig',
        'Persistence configuration for an instance.\nStructure is documented below.',
        () => redis_InstancePersistenceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'alternativeLocationId',
        'Only applicable to STANDARD_HA tier which protects the instance\nagainst zonal failures by provisioning it across two zones.\nIf provided, it must be a different zone from the one provided in\n[locationId].',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectMode',
        'The connection mode of the Redis instance.\nDefault value is `DIRECT_PEERING`.\nPossible values are: `DIRECT_PEERING`, `PRIVATE_SERVICE_ACCESS`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'authorizedNetwork',
        'The full name of the Google Compute Engine network to which the\ninstance is connected. If left unspecified, the default network\nwill be used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'reservedIpRange',
        'The CIDR range of internal addresses that are reserved for this\ninstance. If not provided, the service will choose an unused /29\nblock, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be\nunique and non-overlapping with existing subnets in an authorized\nnetwork.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secondaryIpRange',
        'Optional. Additional IP range for node placement. Required when enabling read replicas on\nan existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or\n"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address\nrange associated with the private service access connection, or "auto".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The ID of the instance or a fully qualified identifier for the instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'authEnabled',
        'Optional. Indicates whether OSS Redis AUTH is enabled for the\ninstance. If set to "true" AUTH is enabled on the instance.\nDefault value is "false" meaning AUTH is disabled.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'redisVersion',
        'The version of Redis software. If not provided, latest supported\nversion will be used. Please check the API documentation linked\nat the top for the latest valid values.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'replicaCount',
        'Optional. The number of replica nodes. The valid range for the Standard Tier with\nread replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled\nfor a Standard Tier instance, the only valid value is 1 and the default is 1.\nThe valid value for basic tier is 0 and the default is also 0.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'locationId',
        'The zone where the instance will be provisioned. If not provided,\nthe service will choose a zone for the instance. For STANDARD_HA tier,\ninstances will be created across two zones for protection against\nzonal failures. If [alternativeLocationId] is also provided, it must\nbe different from [locationId].',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Resource labels to represent user provided metadata.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'redisConfigs',
        'Redis configuration parameters, according to http://redis.io/topics/config.\nPlease check Memorystore documentation for the list of supported parameters:\nhttps://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
