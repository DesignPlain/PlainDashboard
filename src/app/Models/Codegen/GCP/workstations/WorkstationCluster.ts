import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workstations_WorkstationClusterPrivateClusterConfig,
  workstations_WorkstationClusterPrivateClusterConfig_GetTypes,
} from "../types/workstations_WorkstationClusterPrivateClusterConfig";
import {
  workstations_WorkstationClusterCondition,
  workstations_WorkstationClusterCondition_GetTypes,
} from "../types/workstations_WorkstationClusterCondition";
import {
  workstations_WorkstationClusterDomainConfig,
  workstations_WorkstationClusterDomainConfig_GetTypes,
} from "../types/workstations_WorkstationClusterDomainConfig";

export interface WorkstationClusterArgs {
  // Human-readable name for this resource.
  displayName?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  network?: string;

  /*
ID to use for the workstation cluster.


- - -
*/
  workstationClusterId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  domainConfig?: workstations_WorkstationClusterDomainConfig;

  // The location where the workstation cluster should reside.
  location?: string;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  privateClusterConfig?: workstations_WorkstationClusterPrivateClusterConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
Must be part of the subnetwork specified for this cluster.
*/
  subnetwork?: string;
}
export class WorkstationCluster extends Resource {
  /*
Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
Must be part of the subnetwork specified for this cluster.
*/
  public subnetwork?: string;

  /*
ID to use for the workstation cluster.


- - -
*/
  public workstationClusterId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
Status conditions describing the current resource state.
Structure is documented below.
*/
  public conditions?: Array<workstations_WorkstationClusterCondition>;

  /*
Whether this resource is in degraded mode, in which case it may require user action to restore full functionality.
Details can be found in the conditions field.
*/
  public degraded?: boolean;

  /*
The relative resource name of the VPC network on which the instance can be accessed.
It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  public network?: string;

  /*
Configuration for private cluster.
Structure is documented below.
*/
  public privateClusterConfig?: workstations_WorkstationClusterPrivateClusterConfig;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The name of the cluster resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Time when this resource was created.
  public createTime?: string;

  // Human-readable name for this resource.
  public displayName?: string;

  /*
Configuration options for a custom domain.
Structure is documented below.
*/
  public domainConfig?: workstations_WorkstationClusterDomainConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The system-generated UID of the resource.
  public uid?: string;

  /*
Checksum computed by the server.
May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
*/
  public etag?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location where the workstation cluster should reside.
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "network",
        'The relative resource name of the VPC network on which the instance can be accessed.\nIt is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "domainConfig",
        "Configuration options for a custom domain.\nStructure is documented below.",
        workstations_WorkstationClusterDomainConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the workstation cluster should reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateClusterConfig",
        "Configuration for private cluster.\nStructure is documented below.",
        workstations_WorkstationClusterPrivateClusterConfig_GetTypes(),
        false,
        false,
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
        "displayName",
        "Human-readable name for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.\nMust be part of the subnetwork specified for this cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workstationClusterId",
        "ID to use for the workstation cluster.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
