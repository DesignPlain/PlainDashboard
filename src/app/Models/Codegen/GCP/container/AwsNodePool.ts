import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AwsNodePoolMaxPodsConstraint } from "../types/AwsNodePoolMaxPodsConstraint";
import { AwsNodePoolUpdateSettings } from "../types/AwsNodePoolUpdateSettings";
import { AwsNodePoolAutoscaling } from "../types/AwsNodePoolAutoscaling";
import { AwsNodePoolConfig } from "../types/AwsNodePoolConfig";
import { AwsNodePoolManagement } from "../types/AwsNodePoolManagement";

export interface AwsNodePoolArgs {
  // The location for the resource
  Location?: string;

  // The project for the resource
  Project?: string;

  // The awsCluster for the resource
  Cluster?: string;

  // The configuration of the node pool.
  Config?: AwsNodePoolConfig;

  // The Management configuration for this node pool.
  Management?: AwsNodePoolManagement;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  MaxPodsConstraint?: AwsNodePoolMaxPodsConstraint;

  // The name of this resource.
  Name?: string;

  // The subnet where the node pool node run.
  SubnetId?: string;

  // Optional. Update settings control the speed and disruption of the node pool update.
  UpdateSettings?: AwsNodePoolUpdateSettings;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  Version?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Autoscaler configuration for this node pool.
  Autoscaling?: AwsNodePoolAutoscaling;
}
export class AwsNodePool extends Resource {
  // The location for the resource
  public Location?: string;

  // Output only. A globally unique identifier for the node pool.
  public Uid?: string;

  // Output only. The time at which this node pool was last updated.
  public UpdateTime?: string;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. The time at which this node pool was created.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Optional. Update settings control the speed and disruption of the node pool update.
  public UpdateSettings?: AwsNodePoolUpdateSettings;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  public Version?: string;

  // The configuration of the node pool.
  public Config?: AwsNodePoolConfig;

  // The Management configuration for this node pool.
  public Management?: AwsNodePoolManagement;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  public MaxPodsConstraint?: AwsNodePoolMaxPodsConstraint;

  // The project for the resource
  public Project?: string;

  // The subnet where the node pool node run.
  public SubnetId?: string;

  // The awsCluster for the resource
  public Cluster?: string;

  // The name of this resource.
  public Name?: string;

  // Output only. If set, there are currently changes in flight to the node pool.
  public Reconciling?: boolean;

  // Output only. The lifecycle state of the node pool. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Autoscaler configuration for this node pool.
  public Autoscaling?: AwsNodePoolAutoscaling;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The configuration of the node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Management",
        "The Management configuration for this node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Autoscaling",
        "Autoscaler configuration for this node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaxPodsConstraint",
        "The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SubnetId",
        "The subnet where the node pool node run.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpdateSettings",
        "Optional. Update settings control the speed and disruption of the node pool update.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The awsCluster for the resource",
      ),
    ];
  }
}
