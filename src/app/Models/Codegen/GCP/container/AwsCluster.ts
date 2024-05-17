import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsClusterNetworking,
  Container_AwsClusterNetworking_GetTypes,
} from "../types/Container_AwsClusterNetworking";
import {
  Container_AwsClusterAuthorization,
  Container_AwsClusterAuthorization_GetTypes,
} from "../types/Container_AwsClusterAuthorization";
import {
  Container_AwsClusterControlPlane,
  Container_AwsClusterControlPlane_GetTypes,
} from "../types/Container_AwsClusterControlPlane";
import {
  Container_AwsClusterWorkloadIdentityConfig,
  Container_AwsClusterWorkloadIdentityConfig_GetTypes,
} from "../types/Container_AwsClusterWorkloadIdentityConfig";
import {
  Container_AwsClusterBinaryAuthorization,
  Container_AwsClusterBinaryAuthorization_GetTypes,
} from "../types/Container_AwsClusterBinaryAuthorization";
import {
  Container_AwsClusterFleet,
  Container_AwsClusterFleet_GetTypes,
} from "../types/Container_AwsClusterFleet";
import {
  Container_AwsClusterLoggingConfig,
  Container_AwsClusterLoggingConfig_GetTypes,
} from "../types/Container_AwsClusterLoggingConfig";

export interface AwsClusterArgs {
  // Configuration options for the Binary Authorization feature.
  BinaryAuthorization?: Container_AwsClusterBinaryAuthorization;

  // Fleet configuration.
  Fleet?: Container_AwsClusterFleet;

  // Logging configuration.
  LoggingConfig?: Container_AwsClusterLoggingConfig;

  // The name of this resource.
  Name?: string;

  // Cluster-wide networking configuration.
  Networking?: Container_AwsClusterNetworking;

  // The location for the resource
  Location?: string;

  // The number of the Fleet host project where this cluster will be registered.
  Project?: string;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Configuration related to the cluster RBAC settings.
  Authorization?: Container_AwsClusterAuthorization;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  AwsRegion?: string;

  // Configuration related to the cluster control plane.
  ControlPlane?: Container_AwsClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  Description?: string;
}
export class AwsCluster extends Resource {
  // The location for the resource
  public Location?: string;

  // Cluster-wide networking configuration.
  public Networking?: Container_AwsClusterNetworking;

  // Configuration related to the cluster RBAC settings.
  public Authorization?: Container_AwsClusterAuthorization;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, InputType.String>;

  // The name of this resource.
  public Name?: string;

  // The number of the Fleet host project where this cluster will be registered.
  public Project?: string;

  // Output only. If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Output only. A globally unique identifier for the cluster.
  public Uid?: string;

  // Output only. The time at which this cluster was last updated.
  public UpdateTime?: string;

  // Output only. Workload Identity settings.
  public WorkloadIdentityConfigs?: Array<Container_AwsClusterWorkloadIdentityConfig>;

  // Configuration options for the Binary Authorization feature.
  public BinaryAuthorization?: Container_AwsClusterBinaryAuthorization;

  // Output only. The endpoint of the cluster's API server.
  public Endpoint?: string;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  public AwsRegion?: string;

  // Configuration related to the cluster control plane.
  public ControlPlane?: Container_AwsClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public Description?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Fleet configuration.
  public Fleet?: Container_AwsClusterFleet;

  // Logging configuration.
  public LoggingConfig?: Container_AwsClusterLoggingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AwsRegion",
        "The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Fleet",
        "Fleet configuration.",
        Container_AwsClusterFleet_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoggingConfig",
        "Logging configuration.",
        Container_AwsClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Networking",
        "Cluster-wide networking configuration.",
        Container_AwsClusterNetworking_GetTypes(),
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
        InputType.String,
        "Project",
        "The number of the Fleet host project where this cluster will be registered.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Authorization",
        "Configuration related to the cluster RBAC settings.",
        Container_AwsClusterAuthorization_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlane",
        "Configuration related to the cluster control plane.",
        Container_AwsClusterControlPlane_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BinaryAuthorization",
        "Configuration options for the Binary Authorization feature.",
        Container_AwsClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
