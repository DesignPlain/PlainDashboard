import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { VMwareNodePoolStatus } from "../types/VMwareNodePoolStatus";
import { VMwareNodePoolNodePoolAutoscaling } from "../types/VMwareNodePoolNodePoolAutoscaling";
import { VMwareNodePoolConfig } from "../types/VMwareNodePoolConfig";

export interface VMwareNodePoolArgs {
  // The display name for the node pool.
  DisplayName?: string;

  // The location of the resource.
  Location?: string;

  // The vmware node pool name.
  Name?: string;

  /*
Node Pool autoscaling config for the node pool.
Structure is documented below.
*/
  NodePoolAutoscaling?: VMwareNodePoolNodePoolAutoscaling;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The cluster this node pool belongs to.
  VmwareCluster?: string;

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
  Annotations?: Map<string, string>;

  /*
The node configuration of the node pool.
Structure is documented below.
*/
  Config?: VMwareNodePoolConfig;
}
export class VMwareNodePool extends Resource {
  // The vmware node pool name.
  public Name?: string;

  // The unique identifier of the node pool.
  public Uid?: string;

  /*
The node configuration of the node pool.
Structure is documented below.
*/
  public Config?: VMwareNodePoolConfig;

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // If set, there are currently changes in flight to the node pool.
  public Reconciling?: boolean;

  /*
ResourceStatus representing detailed cluster state.
Structure is documented below.
*/
  public Statuses?: Array<VMwareNodePoolStatus>;

  // The display name for the node pool.
  public DisplayName?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  // The cluster this node pool belongs to.
  public VmwareCluster?: string;

  // Anthos version for the node pool. Defaults to the user cluster version.
  public OnPremVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

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
  public Annotations?: Map<string, string>;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public Etag?: string;

  // The location of the resource.
  public Location?: string;

  /*
Node Pool autoscaling config for the node pool.
Structure is documented below.
*/
  public NodePoolAutoscaling?: VMwareNodePoolNodePoolAutoscaling;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NodePoolAutoscaling",
        "Node Pool autoscaling config for the node pool.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VmwareCluster",
        "The cluster this node pool belongs to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations on the node Pool.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The node configuration of the node pool.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name for the node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The vmware node pool name.",
      ),
    ];
  }
}
