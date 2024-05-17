import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_InstanceMachineConfig,
  Alloydb_InstanceMachineConfig_GetTypes,
} from "../types/Alloydb_InstanceMachineConfig";
import {
  Alloydb_InstanceClientConnectionConfig,
  Alloydb_InstanceClientConnectionConfig_GetTypes,
} from "../types/Alloydb_InstanceClientConnectionConfig";
import {
  Alloydb_InstanceQueryInsightsConfig,
  Alloydb_InstanceQueryInsightsConfig_GetTypes,
} from "../types/Alloydb_InstanceQueryInsightsConfig";
import {
  Alloydb_InstanceReadPoolConfig,
  Alloydb_InstanceReadPoolConfig_GetTypes,
} from "../types/Alloydb_InstanceReadPoolConfig";

export interface InstanceArgs {
  /*
'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).'
Possible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.
*/
  AvailabilityType?: string;

  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  Cluster?: string;

  // User-settable and human-readable display name for the Instance.
  DisplayName?: string;

  // The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  GceZone?: string;

  /*
The ID of the alloydb instance.


- - -
*/
  InstanceId?: string;

  /*
Configurations for the machines that host the underlying database engine.
Structure is documented below.
*/
  MachineConfig?: Alloydb_InstanceMachineConfig;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Client connection specific configurations.
Structure is documented below.
*/
  ClientConnectionConfig?: Alloydb_InstanceClientConnectionConfig;

  // Database flags. Set at instance level. - They are copied from primary instance on read instance creation. - Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  DatabaseFlags?: Map<string, string>;

  /*
The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the
'depends_on' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated
secondary cluster instead of mentioning SECONDARY. Example: {instance_type =
google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance
type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it
instead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete
the secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by
importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",
"SECONDARY"]
*/
  InstanceType?: string;

  /*
User-defined labels for the alloydb instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Configuration for query insights.
Structure is documented below.
*/
  QueryInsightsConfig?: Alloydb_InstanceQueryInsightsConfig;

  /*
Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
Structure is documented below.
*/
  ReadPoolConfig?: Alloydb_InstanceReadPoolConfig;
}
export class Instance extends Resource {
  /*
The ID of the alloydb instance.


- - -
*/
  public InstanceId?: string;

  // The name of the instance resource.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The current state of the alloydb instance.
  public State?: string;

  // Time the Instance was updated in UTC.
  public UpdateTime?: string;

  // Time the Instance was created in UTC.
  public CreateTime?: string;

  // The IP address for the Instance. This is the connection endpoint for an end-user application.
  public IpAddress?: string;

  /*
Configurations for the machines that host the underlying database engine.
Structure is documented below.
*/
  public MachineConfig?: Alloydb_InstanceMachineConfig;

  /*
Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
Structure is documented below.
*/
  public ReadPoolConfig?: Alloydb_InstanceReadPoolConfig;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  public GceZone?: string;

  /*
The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the
'depends_on' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated
secondary cluster instead of mentioning SECONDARY. Example: {instance_type =
google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance
type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it
instead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete
the secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by
importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",
"SECONDARY"]
*/
  public InstanceType?: string;

  // Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
  public Reconciling?: boolean;

  /*
'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).'
Possible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.
*/
  public AvailabilityType?: string;

  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  public Cluster?: string;

  // Database flags. Set at instance level. - They are copied from primary instance on read instance creation. - Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  public DatabaseFlags?: Map<string, string>;

  // User-settable and human-readable display name for the Instance.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
User-defined labels for the alloydb instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Configuration for query insights.
Structure is documented below.
*/
  public QueryInsightsConfig?: Alloydb_InstanceQueryInsightsConfig;

  /*
Client connection specific configurations.
Structure is documented below.
*/
  public ClientConnectionConfig?: Alloydb_InstanceClientConnectionConfig;

  // The system-generated UID of the resource.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClientConnectionConfig",
        "Client connection specific configurations.\nStructure is documented below.",
        Alloydb_InstanceClientConnectionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "DatabaseFlags",
        "Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceType",
        'The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the\n\'depends_on\' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated\nsecondary cluster instead of mentioning SECONDARY. Example: {instance_type =\ngoogle_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance\ntype is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it\ninstead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete\nthe secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by\nimporting the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",\n"SECONDARY"]',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The ID of the alloydb instance.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "Identifies the alloydb cluster. Must be in the format\n'projects/{project}/locations/{location}/clusters/{cluster_id}'",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-settable and human-readable display name for the Instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "GceZone",
        "The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MachineConfig",
        "Configurations for the machines that host the underlying database engine.\nStructure is documented below.",
        Alloydb_InstanceMachineConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels for the alloydb instance.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "QueryInsightsConfig",
        "Configuration for query insights.\nStructure is documented below.",
        Alloydb_InstanceQueryInsightsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ReadPoolConfig",
        "Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.\nStructure is documented below.",
        Alloydb_InstanceReadPoolConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AvailabilityType",
        "'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.\nNote that primary and read instances can have different availability types.\nOnly READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.\nZone is automatically chosen from the list of zones in the region specified.\nRead pool of size 1 can only have zonal availability. Read pools with node count of 2 or more\ncan have regional availability (nodes are present in 2 or more zones in a region).'\nPossible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.",
        [],
        false,
        false,
      ),
    ];
  }
}
