import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  memcache_InstanceMemcacheNode,
  memcache_InstanceMemcacheNode_GetTypes,
} from "../types/memcache_InstanceMemcacheNode";
import {
  memcache_InstanceMaintenanceSchedule,
  memcache_InstanceMaintenanceSchedule_GetTypes,
} from "../types/memcache_InstanceMaintenanceSchedule";
import {
  memcache_InstanceMemcacheParameters,
  memcache_InstanceMemcacheParameters_GetTypes,
} from "../types/memcache_InstanceMemcacheParameters";
import {
  memcache_InstanceNodeConfig,
  memcache_InstanceNodeConfig_GetTypes,
} from "../types/memcache_InstanceNodeConfig";
import {
  memcache_InstanceMaintenancePolicy,
  memcache_InstanceMaintenancePolicy_GetTypes,
} from "../types/memcache_InstanceMaintenancePolicy";

export interface InstanceArgs {
  // Number of nodes in the memcache instance.
  nodeCount?: number;

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  authorizedNetwork?: string;

  // A user-visible name for the instance.
  displayName?: string;

  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  memcacheParameters?: memcache_InstanceMemcacheParameters;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  memcacheVersion?: string;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  nodeConfig?: memcache_InstanceNodeConfig;

  /*
Contains the name of allocated IP address ranges associated with
the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29.
*/
  reservedIpRangeIds?: Array<string>;

  /*
Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
*/
  zones?: Array<string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  maintenancePolicy?: memcache_InstanceMaintenancePolicy;

  // The resource name of the instance.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the Memcache instance. If it is not provided, the provider region is used.
  region?: string;
}
export class Instance extends Resource {
  // The full version of memcached server running on this instance.
  public memcacheFullVersion?: string;

  /*
Configuration for memcache nodes.
Structure is documented below.
*/
  public nodeConfig?: memcache_InstanceNodeConfig;

  // Number of nodes in the memcache instance.
  public nodeCount?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Maintenance policy for an instance.
Structure is documented below.
*/
  public maintenancePolicy?: memcache_InstanceMaintenancePolicy;

  /*
Additional information about the instance state, if available.
Structure is documented below.
*/
  public memcacheNodes?: Array<memcache_InstanceMemcacheNode>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // A user-visible name for the instance.
  public displayName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Output only. Published maintenance schedule.
Structure is documented below.
*/
  public maintenanceSchedules?: Array<memcache_InstanceMaintenanceSchedule>;

  // The resource name of the instance.
  public name?: string;

  // The region of the Memcache instance. If it is not provided, the provider region is used.
  public region?: string;

  /*
Contains the name of allocated IP address ranges associated with
the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29.
*/
  public reservedIpRangeIds?: Array<string>;

  // Endpoint for Discovery API
  public discoveryEndpoint?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits
*/
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
User-specified parameters for this memcache instance.
Structure is documented below.
*/
  public memcacheParameters?: memcache_InstanceMemcacheParameters;

  /*
The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version.
Default value is `MEMCACHE_1_5`.
Possible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.
*/
  public memcacheVersion?: string;

  /*
Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
*/
  public zones?: Array<string>;

  /*
The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
*/
  public authorizedNetwork?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "memcacheParameters",
        "User-specified parameters for this memcache instance.\nStructure is documented below.",
        memcache_InstanceMemcacheParameters_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "memcacheVersion",
        "The major version of Memcached software. If not provided, latest supported version will be used.\nCurrently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically\ndetermined by our system based on the latest supported minor version.\nDefault value is `MEMCACHE_1_5`.\nPossible values are: `MEMCACHE_1_5`, `MEMCACHE_1_6_15`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "zones",
        "Zones where memcache nodes should be provisioned.  If not\nprovided, all zones will be used.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenancePolicy",
        "Maintenance policy for an instance.\nStructure is documented below.",
        memcache_InstanceMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "nodeCount",
        "Number of nodes in the memcache instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizedNetwork",
        "The full name of the GCE network to connect the instance to.  If not provided,\n'default' will be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "reservedIpRangeIds",
        'Contains the name of allocated IP address ranges associated with\nthe private service access connection for example, "test-default"\nassociated with IP range 10.0.0.0/29.',
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the instance.",
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
        InputType.String,
        "region",
        "The region of the Memcache instance. If it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A user-visible name for the instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Configuration for memcache nodes.\nStructure is documented below.",
        memcache_InstanceNodeConfig_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
