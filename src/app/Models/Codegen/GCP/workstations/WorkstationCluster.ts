import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { WorkstationClusterDomainConfig } from "../types/WorkstationClusterDomainConfig";
import { WorkstationClusterPrivateClusterConfig } from "../types/WorkstationClusterPrivateClusterConfig";
import { WorkstationClusterCondition } from "../types/WorkstationClusterCondition";

export interface WorkstationClusterArgs {
  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  Network?: string;

  /*
ID to use for the workstation cluster.


- - -
*/
  WorkstationClusterId?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location where the workstation cluster should reside.
  Location?: string;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  DomainConfig?: WorkstationClusterDomainConfig;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  PrivateClusterConfig?: WorkstationClusterPrivateClusterConfig;

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
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Human-readable name for this resource.
  DisplayName?: string;
}
export class WorkstationCluster extends Resource {
  // Human-readable name for this resource.
  public DisplayName?: string;

  /*
Checksum computed by the server.
May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location where the workstation cluster should reside.
  public Location?: string;

  // The name of the cluster resource.
  public Name?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
Whether this resource is in degraded mode, in which case it may require user action to restore full functionality.
Details can be found in the conditions field.
*/
  public Degraded?: boolean;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // Time when this resource was created.
  public CreateTime?: string;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  public DomainConfig?: WorkstationClusterDomainConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
ID to use for the workstation cluster.


- - -
*/
  public WorkstationClusterId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  public PrivateClusterConfig?: WorkstationClusterPrivateClusterConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
Must be part of the subnetwork specified for this cluster.
*/
  public Subnetwork?: string;

  // The system-generated UID of the resource.
  public Uid?: string;

  /*
Status conditions describing the current resource state.
Structure is documented below.
*/
  public Conditions?: Array<WorkstationClusterCondition>;

  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  public Network?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The relative resource name of the VPC network on which the instance can be accessed.\nIt is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the workstation cluster should reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DomainConfig",
        "Configuration options for a custom domain.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateClusterConfig",
        "Configuration for private cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.\nMust be part of the subnetwork specified for this cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationClusterId",
        "ID to use for the workstation cluster.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable name for this resource.",
      ),
    ];
  }
}
