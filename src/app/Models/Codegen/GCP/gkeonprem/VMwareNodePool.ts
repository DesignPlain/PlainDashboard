import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareNodePoolConfig,
  gkeonprem_VMwareNodePoolConfig_GetTypes,
} from "../types/gkeonprem_VMwareNodePoolConfig";
import {
  gkeonprem_VMwareNodePoolNodePoolAutoscaling,
  gkeonprem_VMwareNodePoolNodePoolAutoscaling_GetTypes,
} from "../types/gkeonprem_VMwareNodePoolNodePoolAutoscaling";
import {
  gkeonprem_VMwareNodePoolStatus,
  gkeonprem_VMwareNodePoolStatus_GetTypes,
} from "../types/gkeonprem_VMwareNodePoolStatus";

export interface VMwareNodePoolArgs {
  // The cluster this node pool belongs to.
  vmwareCluster?: string;

  /*
Annotations on the node Pool.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
The node configuration of the node pool.
Structure is documented below.
*/
  config?: gkeonprem_VMwareNodePoolConfig;

  // The display name for the node pool.
  displayName?: string;

  // The location of the resource.
  location?: string;

  // The vmware node pool name.
  name?: string;

  /*
Node Pool autoscaling config for the node pool.
Structure is documented below.
*/
  nodePoolAutoscaling?: gkeonprem_VMwareNodePoolNodePoolAutoscaling;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class VMwareNodePool extends Resource {
  /*
The node configuration of the node pool.
Structure is documented below.
*/
  public config?: gkeonprem_VMwareNodePoolConfig;

  // The time the cluster was created, in RFC3339 text format.
  public createTime?: string;

  // The vmware node pool name.
  public name?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public updateTime?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public deleteTime?: string;

  // The display name for the node pool.
  public displayName?: string;

  /*
Node Pool autoscaling config for the node pool.
Structure is documented below.
*/
  public nodePoolAutoscaling?: gkeonprem_VMwareNodePoolNodePoolAutoscaling;

  /*
(Output)
The lifecycle state of the condition.
*/
  public state?: string;

  /*
ResourceStatus representing detailed cluster state.
Structure is documented below.
*/
  public statuses?: Array<gkeonprem_VMwareNodePoolStatus>;

  // The cluster this node pool belongs to.
  public vmwareCluster?: string;

  /*
Annotations on the node Pool.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public etag?: string;

  // If set, there are currently changes in flight to the node pool.
  public reconciling?: boolean;

  // The unique identifier of the node pool.
  public uid?: string;

  // The location of the resource.
  public location?: string;

  // Anthos version for the node pool. Defaults to the user cluster version.
  public onPremVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vmwareCluster",
        "The cluster this node pool belongs to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Annotations on the node Pool.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "config",
        "The node configuration of the node pool.\nStructure is documented below.",
        gkeonprem_VMwareNodePoolConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name for the node pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The vmware node pool name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodePoolAutoscaling",
        "Node Pool autoscaling config for the node pool.\nStructure is documented below.",
        gkeonprem_VMwareNodePoolNodePoolAutoscaling_GetTypes(),
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
    ];
  }
}
