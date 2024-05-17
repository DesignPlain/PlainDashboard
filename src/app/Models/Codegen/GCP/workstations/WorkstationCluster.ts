import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workstations_WorkstationClusterPrivateClusterConfig,
  Workstations_WorkstationClusterPrivateClusterConfig_GetTypes,
} from "../types/Workstations_WorkstationClusterPrivateClusterConfig";
import {
  Workstations_WorkstationClusterDomainConfig,
  Workstations_WorkstationClusterDomainConfig_GetTypes,
} from "../types/Workstations_WorkstationClusterDomainConfig";
import {
  Workstations_WorkstationClusterCondition,
  Workstations_WorkstationClusterCondition_GetTypes,
} from "../types/Workstations_WorkstationClusterCondition";

export interface WorkstationClusterArgs {
  // Human-readable name for this resource.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
Must be part of the subnetwork specified for this cluster.
*/
  Subnetwork?: string;

  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  Network?: string;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  PrivateClusterConfig?: Workstations_WorkstationClusterPrivateClusterConfig;

  /*
ID to use for the workstation cluster.


- - -
*/
  WorkstationClusterId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  DomainConfig?: Workstations_WorkstationClusterDomainConfig;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location where the workstation cluster should reside.
  Location?: string;
}
export class WorkstationCluster extends Resource {
  // Human-readable name for this resource.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // Time when this resource was created.
  public CreateTime?: string;

  /*
Whether this resource is in degraded mode, in which case it may require user action to restore full functionality.
Details can be found in the conditions field.
*/
  public Degraded?: boolean;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the cluster resource.
  public Name?: string;

  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  public Network?: string;

  // The system-generated UID of the resource.
  public Uid?: string;

  /*
Status conditions describing the current resource state.
Structure is documented below.
*/
  public Conditions?: Array<Workstations_WorkstationClusterCondition>;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  public DomainConfig?: Workstations_WorkstationClusterDomainConfig;

  /*
Checksum computed by the server.
May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
Must be part of the subnetwork specified for this cluster.
*/
  public Subnetwork?: string;

  /*
ID to use for the workstation cluster.


- - -
*/
  public WorkstationClusterId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // The location where the workstation cluster should reside.
  public Location?: string;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  public PrivateClusterConfig?: Workstations_WorkstationClusterPrivateClusterConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable name for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PrivateClusterConfig",
        "Configuration for private cluster.\nStructure is documented below.",
        Workstations_WorkstationClusterPrivateClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DomainConfig",
        "Configuration options for a custom domain.\nStructure is documented below.",
        Workstations_WorkstationClusterDomainConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the workstation cluster should reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.\nMust be part of the subnetwork specified for this cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The relative resource name of the VPC network on which the instance can be accessed.\nIt is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationClusterId",
        "ID to use for the workstation cluster.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
