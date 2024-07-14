import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalNodePoolNodePoolConfig,
  gkeonprem_BareMetalNodePoolNodePoolConfig_GetTypes,
} from "../types/gkeonprem_BareMetalNodePoolNodePoolConfig";
import {
  gkeonprem_BareMetalNodePoolStatus,
  gkeonprem_BareMetalNodePoolStatus_GetTypes,
} from "../types/gkeonprem_BareMetalNodePoolStatus";

export interface BareMetalNodePoolArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

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
  annotations?: Map<string, string>;

  // The cluster this node pool belongs to.
  bareMetalCluster?: string;

  // The display name for the Bare Metal Node Pool.
  displayName?: string;

  // The location of the resource.
  location?: string;

  // The bare metal node pool name.
  name?: string;

  /*
Node pool configuration.
Structure is documented below.
*/
  nodePoolConfig?: gkeonprem_BareMetalNodePoolNodePoolConfig;
}
export class BareMetalNodePool extends Resource {
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

  // If set, there are currently changes in flight to the Bare Metal User Cluster.
  public reconciling?: boolean;

  // The time the cluster was created, in RFC3339 text format.
  public createTime?: string;

  // The time the cluster was deleted, in RFC3339 text format.
  public deleteTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

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
  public annotations?: Map<string, string>;

  // The location of the resource.
  public location?: string;

  // The unique identifier of the Bare Metal Node Pool.
  public uid?: string;

  // The time the cluster was last updated, in RFC3339 text format.
  public updateTime?: string;

  // The display name for the Bare Metal Node Pool.
  public displayName?: string;

  /*
Specifies detailed node pool status.
Structure is documented below.
*/
  public statuses?: Array<gkeonprem_BareMetalNodePoolStatus>;

  /*
Node pool configuration.
Structure is documented below.
*/
  public nodePoolConfig?: gkeonprem_BareMetalNodePoolNodePoolConfig;

  /*
(Output)
The lifecycle state of the condition.
*/
  public state?: string;

  // The cluster this node pool belongs to.
  public bareMetalCluster?: string;

  // The bare metal node pool name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bareMetalCluster",
        "The cluster this node pool belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name for the Bare Metal Node Pool.",
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
        "The bare metal node pool name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodePoolConfig",
        "Node pool configuration.\nStructure is documented below.",
        gkeonprem_BareMetalNodePoolNodePoolConfig_GetTypes(),
        true,
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
        InputType.Map,
        "annotations",
        "Annotations on the Bare Metal Node Pool.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
