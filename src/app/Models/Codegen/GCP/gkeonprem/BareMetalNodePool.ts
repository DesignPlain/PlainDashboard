import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BareMetalNodePoolNodePoolConfig } from "../types/BareMetalNodePoolNodePoolConfig";
import { BareMetalNodePoolStatus } from "../types/BareMetalNodePoolStatus";

export interface BareMetalNodePoolArgs {
  // The display name for the Bare Metal Node Pool.
  DisplayName?: string;

  // The location of the resource.
  Location?: string;

  // The bare metal node pool name.
  Name?: string;

  /*
Node pool configuration.
Structure is documented below.
*/
  NodePoolConfig?: BareMetalNodePoolNodePoolConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Annotations on the Bare Metal Node Pool.
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

  // The cluster this node pool belongs to.
  BareMetalCluster?: string;
}
export class BareMetalNodePool extends Resource {
  // The unique identifier of the Bare Metal Node Pool.
  public Uid?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  // The display name for the Bare Metal Node Pool.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // If set, there are currently changes in flight to the Bare Metal User Cluster.
  public Reconciling?: boolean;

  /*
Specifies detailed node pool status.
Structure is documented below.
*/
  public Statuses?: Array<BareMetalNodePoolStatus>;

  /*
Annotations on the Bare Metal Node Pool.
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

  // The time the cluster was created, in RFC3339 text format.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Node pool configuration.
Structure is documented below.
*/
  public NodePoolConfig?: BareMetalNodePoolNodePoolConfig;

  /*
(Output)
The lifecycle state of the condition.
*/
  public State?: string;

  // The cluster this node pool belongs to.
  public BareMetalCluster?: string;

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

  // The bare metal node pool name.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BareMetalCluster",
        "The cluster this node pool belongs to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name for the Bare Metal Node Pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The bare metal node pool name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodePoolConfig",
        "Node pool configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations on the Bare Metal Node Pool.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
    ];
  }
}
