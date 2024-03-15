import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceMemcacheNode } from "../types/InstanceMemcacheNode";
import { InstanceMaintenanceSchedule } from "../types/InstanceMaintenanceSchedule";
import { InstanceMemcacheParameters } from "../types/InstanceMemcacheParameters";
import { InstanceNodeConfig } from "../types/InstanceNodeConfig";
import { InstanceMaintenancePolicy } from "../types/InstanceMaintenancePolicy";

export interface InstanceArgs {
  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  MemcacheParameters?: InstanceMemcacheParameters;

  // The resource name of the instance.
  Name?: string;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  NodeConfig?: InstanceNodeConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

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
  MaintenancePolicy?: InstanceMaintenancePolicy;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  MemcacheVersion?: string;

  // Number of nodes in the memcache instance.
  NodeCount?: number;

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

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  AuthorizedNetwork?: string;
}
export class Instance extends Resource {
  // The full version of memcached server running on this instance.
  public MemcacheFullVersion?: string;

  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  public MemcacheParameters?: InstanceMemcacheParameters;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  public MemcacheVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  public MaintenancePolicy?: InstanceMaintenancePolicy;

  // The region of the Memcache instance. If it is not provided, the provider region is used.
  public Region?: string;

  /*
Contains the name of allocated IP address ranges associated with
the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29.
*/
  public ReservedIpRangeIds?: Array<string>;

  /*
Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
*/
  public Zones?: Array<string>;

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  public AuthorizedNetwork?: string;

  // A user-visible name for the instance.
  public DisplayName?: string;

  // The resource name of the instance.
  public Name?: string;

  /*
Additional information about the instance state, if available.
Structure is documented below.
*/
  public MemcacheNodes?: Array<InstanceMemcacheNode>;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  public NodeConfig?: InstanceNodeConfig;

  // Number of nodes in the memcache instance.
  public NodeCount?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits
*/
  public CreateTime?: string;

  // Endpoint for Discovery API
  public DiscoveryEndpoint?: string;

  /*
Output only. Published maintenance schedule.
Structure is documented below.
*/
  public MaintenanceSchedules?: Array<InstanceMaintenanceSchedule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MemcacheParameters",
        "User-specified parameters for this memcache instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Configuration for memcache nodes.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MemcacheVersion",
        "The major version of Memcached software. If not provided, latest supported version will be used.\nCurrently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically\ndetermined by our system based on the latest supported minor version.\nDefault value is `MEMCACHE_1_5`.\nPossible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the Memcache instance. If it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizedNetwork",
        "The full name of the GCE network to connect the instance to.  If not provided,\n'default' will be used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenancePolicy",
        "Maintenance policy for an instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "NodeCount",
        "Number of nodes in the memcache instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ReservedIpRangeIds",
        'Contains the name of allocated IP address ranges associated with\nthe private service access connection for example, "test-default"\nassociated with IP range 10.0.0.0/29.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Zones",
        "Zones where memcache nodes should be provisioned.  If not\nprovided, all zones will be used.",
      ),
    ];
  }
}
