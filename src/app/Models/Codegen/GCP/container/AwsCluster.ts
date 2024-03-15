import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AwsClusterAuthorization } from "../types/AwsClusterAuthorization";
import { AwsClusterControlPlane } from "../types/AwsClusterControlPlane";
import { AwsClusterFleet } from "../types/AwsClusterFleet";
import { AwsClusterBinaryAuthorization } from "../types/AwsClusterBinaryAuthorization";
import { AwsClusterLoggingConfig } from "../types/AwsClusterLoggingConfig";
import { AwsClusterWorkloadIdentityConfig } from "../types/AwsClusterWorkloadIdentityConfig";
import { AwsClusterNetworking } from "../types/AwsClusterNetworking";

export interface AwsClusterArgs {
  // The location for the resource
  Location?: string;

  // Cluster-wide networking configuration.
  Networking?: AwsClusterNetworking;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Configuration related to the cluster RBAC settings.
  Authorization?: AwsClusterAuthorization;

  // Configuration related to the cluster control plane.
  ControlPlane?: AwsClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  Description?: string;

  // Fleet configuration.
  Fleet?: AwsClusterFleet;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  AwsRegion?: string;

  // Configuration options for the Binary Authorization feature.
  BinaryAuthorization?: AwsClusterBinaryAuthorization;

  // Logging configuration.
  LoggingConfig?: AwsClusterLoggingConfig;

  // The name of this resource.
  Name?: string;

  // The number of the Fleet host project where this cluster will be registered.
  Project?: string;
}
export class AwsCluster extends Resource {
  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Logging configuration.
  public LoggingConfig?: AwsClusterLoggingConfig;

  // The number of the Fleet host project where this cluster will be registered.
  public Project?: string;

  // Output only. If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  // Configuration options for the Binary Authorization feature.
  public BinaryAuthorization?: AwsClusterBinaryAuthorization;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // Output only. The endpoint of the cluster's API server.
  public Endpoint?: string;

  // Output only. A globally unique identifier for the cluster.
  public Uid?: string;

  // Fleet configuration.
  public Fleet?: AwsClusterFleet;

  // The name of this resource.
  public Name?: string;

  // Cluster-wide networking configuration.
  public Networking?: AwsClusterNetworking;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Output only. The time at which this cluster was last updated.
  public UpdateTime?: string;

  // Output only. Workload Identity settings.
  public WorkloadIdentityConfigs?: Array<AwsClusterWorkloadIdentityConfig>;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Configuration related to the cluster RBAC settings.
  public Authorization?: AwsClusterAuthorization;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  public AwsRegion?: string;

  // Configuration related to the cluster control plane.
  public ControlPlane?: AwsClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public Description?: string;

  // The location for the resource
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Networking",
        "Cluster-wide networking configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Authorization",
        "Configuration related to the cluster RBAC settings.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlane",
        "Configuration related to the cluster control plane.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.",
      ),
      new DynamicUIProps(InputType.String, "Fleet", "Fleet configuration."),
      new DynamicUIProps(
        InputType.String,
        "LoggingConfig",
        "Logging configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The number of the Fleet host project where this cluster will be registered.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BinaryAuthorization",
        "Configuration options for the Binary Authorization feature.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AwsRegion",
        "The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.",
      ),
    ];
  }
}
