import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Memcache_InstanceNodeConfig,
  Memcache_InstanceNodeConfig_GetTypes,
} from "../types/Memcache_InstanceNodeConfig";
import {
  Memcache_InstanceMemcacheNode,
  Memcache_InstanceMemcacheNode_GetTypes,
} from "../types/Memcache_InstanceMemcacheNode";
import {
  Memcache_InstanceMaintenanceSchedule,
  Memcache_InstanceMaintenanceSchedule_GetTypes,
} from "../types/Memcache_InstanceMaintenanceSchedule";
import {
  Memcache_InstanceMemcacheParameters,
  Memcache_InstanceMemcacheParameters_GetTypes,
} from "../types/Memcache_InstanceMemcacheParameters";
import {
  Memcache_InstanceMaintenancePolicy,
  Memcache_InstanceMaintenancePolicy_GetTypes,
} from "../types/Memcache_InstanceMaintenancePolicy";

export interface InstanceArgs {
  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  MemcacheParameters?: Memcache_InstanceMemcacheParameters;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Memcache instance. If it is not provided, the provider region is used.
  Region?: string;

  /*
Contains the name of allocated IP address ranges associated with
the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29.
*/
  ReservedIpRangeIds?: Array<string>;

  /*
Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
*/
  Zones?: Array<string>;

  // A user-visible name for the instance.
  DisplayName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  MaintenancePolicy?: Memcache_InstanceMaintenancePolicy;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  NodeConfig?: Memcache_InstanceNodeConfig;

  // Number of nodes in the memcache instance.
  NodeCount?: number;

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  AuthorizedNetwork?: string;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  MemcacheVersion?: string;

  // The resource name of the instance.
  Name?: string;
}
export class Instance extends Resource {
  // The full version of memcached server running on this instance.
  public MemcacheFullVersion?: string;

  /*
Additional information about the instance state, if available.
Structure is documented below.
*/
  public MemcacheNodes?: Array<Memcache_InstanceMemcacheNode>;

  // Number of nodes in the memcache instance.
  public NodeCount?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
*/
  public Zones?: Array<string>;

  // A user-visible name for the instance.
  public DisplayName?: string;

  /*
Output only. Published maintenance schedule.
Structure is documented below.
*/
  public MaintenanceSchedules?: Array<Memcache_InstanceMaintenanceSchedule>;

  // The resource name of the instance.
  public Name?: string;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  public NodeConfig?: Memcache_InstanceNodeConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  public AuthorizedNetwork?: string;

  // Endpoint for Discovery API
  public DiscoveryEndpoint?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The region of the Memcache instance. If it is not provided, the provider region is used.
  public Region?: string;

  /*
Contains the name of allocated IP address ranges associated with
the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29.
*/
  public ReservedIpRangeIds?: Array<string>;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits
*/
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  public MaintenancePolicy?: Memcache_InstanceMaintenancePolicy;

  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  public MemcacheParameters?: Memcache_InstanceMemcacheParameters;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  public MemcacheVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Zones",
        "Zones where memcache nodes should be provisioned.  If not\nprovided, all zones will be used.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaintenancePolicy",
        "Maintenance policy for an instance.\nStructure is documented below.",
        Memcache_InstanceMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Configuration for memcache nodes.\nStructure is documented below.",
        Memcache_InstanceNodeConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "NodeCount",
        "Number of nodes in the memcache instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MemcacheParameters",
        "User-specified parameters for this memcache instance.\nStructure is documented below.",
        Memcache_InstanceMemcacheParameters_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the Memcache instance. If it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ReservedIpRangeIds",
        'Contains the name of allocated IP address ranges associated with\nthe private service access connection for example, "test-default"\nassociated with IP range 10.0.0.0/29.',
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizedNetwork",
        "The full name of the GCE network to connect the instance to.  If not provided,\n'default' will be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MemcacheVersion",
        "The major version of Memcached software. If not provided, latest supported version will be used.\nCurrently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically\ndetermined by our system based on the latest supported minor version.\nDefault value is `MEMCACHE_1_5`.\nPossible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.",
        [],
        false,
        false,
      ),
    ];
  }
}
