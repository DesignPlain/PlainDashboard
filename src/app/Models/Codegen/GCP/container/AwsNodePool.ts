import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsNodePoolManagement,
  Container_AwsNodePoolManagement_GetTypes,
} from "../types/Container_AwsNodePoolManagement";
import {
  Container_AwsNodePoolMaxPodsConstraint,
  Container_AwsNodePoolMaxPodsConstraint_GetTypes,
} from "../types/Container_AwsNodePoolMaxPodsConstraint";
import {
  Container_AwsNodePoolUpdateSettings,
  Container_AwsNodePoolUpdateSettings_GetTypes,
} from "../types/Container_AwsNodePoolUpdateSettings";
import {
  Container_AwsNodePoolAutoscaling,
  Container_AwsNodePoolAutoscaling_GetTypes,
} from "../types/Container_AwsNodePoolAutoscaling";
import {
  Container_AwsNodePoolConfig,
  Container_AwsNodePoolConfig_GetTypes,
} from "../types/Container_AwsNodePoolConfig";

export interface AwsNodePoolArgs {
  // The name of this resource.
  Name?: string;

  // The awsCluster for the resource
  Cluster?: string;

  // The configuration of the node pool.
  Config?: Container_AwsNodePoolConfig;

  // The location for the resource
  Location?: string;

  // The Management configuration for this node pool.
  Management?: Container_AwsNodePoolManagement;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  MaxPodsConstraint?: Container_AwsNodePoolMaxPodsConstraint;

  // The project for the resource
  Project?: string;

  // The subnet where the node pool node run.
  SubnetId?: string;

  // Optional. Update settings control the speed and disruption of the node pool update.
  UpdateSettings?: Container_AwsNodePoolUpdateSettings;

  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Autoscaler configuration for this node pool.
  Autoscaling?: Container_AwsNodePoolAutoscaling;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  Version?: string;
}
export class AwsNodePool extends Resource {
  /*
Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, InputType.String>;

  // The Management configuration for this node pool.
  public Management?: Container_AwsNodePoolManagement;

  // Output only. The lifecycle state of the node pool. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Optional. Update settings control the speed and disruption of the node pool update.
  public UpdateSettings?: Container_AwsNodePoolUpdateSettings;

  // Output only. The time at which this node pool was last updated.
  public UpdateTime?: string;

  // Autoscaler configuration for this node pool.
  public Autoscaling?: Container_AwsNodePoolAutoscaling;

  // The configuration of the node pool.
  public Config?: Container_AwsNodePoolConfig;

  // Output only. The time at which this node pool was created.
  public CreateTime?: string;

  // The location for the resource
  public Location?: string;

  // Output only. If set, there are currently changes in flight to the node pool.
  public Reconciling?: boolean;

  // The awsCluster for the resource
  public Cluster?: string;

  // Output only. A globally unique identifier for the node pool.
  public Uid?: string;

  // The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  public Version?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
  public MaxPodsConstraint?: Container_AwsNodePoolMaxPodsConstraint;

  // The name of this resource.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // The subnet where the node pool node run.
  public SubnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The awsCluster for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SubnetId",
        "The subnet where the node pool node run.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Autoscaling",
        "Autoscaler configuration for this node pool.",
        Container_AwsNodePoolAutoscaling_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Config",
        "The configuration of the node pool.",
        Container_AwsNodePoolConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Management",
        "The Management configuration for this node pool.",
        Container_AwsNodePoolManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaxPodsConstraint",
        "The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.",
        Container_AwsNodePoolMaxPodsConstraint_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "UpdateSettings",
        "Optional. Update settings control the speed and disruption of the node pool update.",
        Container_AwsNodePoolUpdateSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
