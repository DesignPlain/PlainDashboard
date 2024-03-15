import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AzureClusterControlPlane } from "../types/AzureClusterControlPlane";
import { AzureClusterNetworking } from "../types/AzureClusterNetworking";
import { AzureClusterAuthorization } from "../types/AzureClusterAuthorization";
import { AzureClusterWorkloadIdentityConfig } from "../types/AzureClusterWorkloadIdentityConfig";
import { AzureClusterFleet } from "../types/AzureClusterFleet";
import { AzureClusterLoggingConfig } from "../types/AzureClusterLoggingConfig";
import { AzureClusterAzureServicesAuthentication } from "../types/AzureClusterAzureServicesAuthentication";

export interface AzureClusterArgs {
  // The location for the resource
  Location?: string;

  // The name of this resource.
  Name?: string;

  // Fleet configuration.
  Fleet?: AzureClusterFleet;

  // Logging configuration.
  LoggingConfig?: AzureClusterLoggingConfig;

  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  AzureRegion?: string;

  // Azure authentication configuration for management of Azure resources
  AzureServicesAuthentication?: AzureClusterAzureServicesAuthentication;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  Client?: string;

  // Configuration related to the cluster control plane.
  ControlPlane?: AzureClusterControlPlane;

  // Cluster-wide networking configuration.
  Networking?: AzureClusterNetworking;

  // The number of the Fleet host project where this cluster will be registered.
  Project?: string;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  ResourceGroupId?: string;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Configuration related to the cluster RBAC settings.
  Authorization?: AzureClusterAuthorization;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  Description?: string;
}
export class AzureCluster extends Resource {
  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public Description?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The number of the Fleet host project where this cluster will be registered.
  public Project?: string;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Output only. A globally unique identifier for the cluster.
  public Uid?: string;

  // Output only. The endpoint of the cluster's API server.
  public Endpoint?: string;

  // Fleet configuration.
  public Fleet?: AzureClusterFleet;

  // The location for the resource
  public Location?: string;

  // Output only. If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  public ResourceGroupId?: string;

  // Output only. Workload Identity settings.
  public WorkloadIdentityConfigs?: Array<AzureClusterWorkloadIdentityConfig>;

  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  public AzureRegion?: string;

  // Azure authentication configuration for management of Azure resources
  public AzureServicesAuthentication?: AzureClusterAzureServicesAuthentication;

  // Configuration related to the cluster control plane.
  public ControlPlane?: AzureClusterControlPlane;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Output only. The time at which this cluster was last updated.
  public UpdateTime?: string;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Configuration related to the cluster RBAC settings.
  public Authorization?: AzureClusterAuthorization;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  public Client?: string;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  // Logging configuration.
  public LoggingConfig?: AzureClusterLoggingConfig;

  // The name of this resource.
  public Name?: string;

  // Cluster-wide networking configuration.
  public Networking?: AzureClusterNetworking;

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
        "Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Authorization",
        "Configuration related to the cluster RBAC settings.",
      ),
      new DynamicUIProps(InputType.String, "Fleet", "Fleet configuration."),
      new DynamicUIProps(
        InputType.String,
        "Client",
        "Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceGroupId",
        "The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/*/resourceGroups/*`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AzureRegion",
        "The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ControlPlane",
        "Configuration related to the cluster control plane.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AzureServicesAuthentication",
        "Azure authentication configuration for management of Azure resources",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The number of the Fleet host project where this cluster will be registered.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoggingConfig",
        "Logging configuration.",
      ),
    ];
  }
}
