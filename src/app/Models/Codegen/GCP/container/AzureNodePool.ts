import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AzureNodePoolAutoscaling } from "../types/AzureNodePoolAutoscaling";
import { AzureNodePoolMaxPodsConstraint } from "../types/AzureNodePoolMaxPodsConstraint";
import { AzureNodePoolConfig } from "../types/AzureNodePoolConfig";
import { AzureNodePoolManagement } from "../types/AzureNodePoolManagement";

export interface AzureNodePoolArgs {
  // The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.
  Version?: string;

  // Autoscaler configuration for this node pool.
  Autoscaling?: AzureNodePoolAutoscaling;

  // The azureCluster for the resource
  Cluster?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  MaxPodsConstraint?: AzureNodePoolMaxPodsConstraint;

  // The project for the resource
  Project?: string;

  // The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.
  SubnetId?: string;

  // The name of this resource.
  Name?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.
  AzureAvailabilityZone?: string;

  // The node configuration of the node pool.
  Config?: AzureNodePoolConfig;

  // The location for the resource
  Location?: string;

  // The Management configuration for this node pool.
  Management?: AzureNodePoolManagement;
}
export class AzureNodePool extends Resource {
  // Autoscaler configuration for this node pool.
  public Autoscaling?: AzureNodePoolAutoscaling;

  // The node configuration of the node pool.
  public Config?: AzureNodePoolConfig;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The location for the resource
  public Location?: string;

  // The Management configuration for this node pool.
  public Management?: AzureNodePoolManagement;

  // The name of this resource.
  public Name?: string;

  // Output only. The current state of the node pool. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.
  public SubnetId?: string;

  // The azureCluster for the resource
  public Cluster?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  public MaxPodsConstraint?: AzureNodePoolMaxPodsConstraint;

  // Output only. The time at which this node pool was last updated.
  public UpdateTime?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Output only. If set, there are currently pending changes to the node pool.
  public Reconciling?: boolean;

  // The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.
  public Version?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.
  public AzureAvailabilityZone?: string;

  // Output only. The time at which this node pool was created.
  public CreateTime?: string;

  // The project for the resource
  public Project?: string;

  // Output only. A globally unique identifier for the node pool.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Autoscaling",
        "Autoscaler configuration for this node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The azureCluster for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AzureAvailabilityZone",
        "Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Management",
        "The Management configuration for this node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaxPodsConstraint",
        "The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SubnetId",
        "The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The node configuration of the node pool.",
      ),
    ];
  }
}
