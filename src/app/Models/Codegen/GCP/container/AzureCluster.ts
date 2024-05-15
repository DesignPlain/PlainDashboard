import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AzureClusterNetworking,
  Container_AzureClusterNetworking_GetTypes,
} from "../types/Container_AzureClusterNetworking";
import {
  Container_AzureClusterLoggingConfig,
  Container_AzureClusterLoggingConfig_GetTypes,
} from "../types/Container_AzureClusterLoggingConfig";
import {
  Container_AzureClusterWorkloadIdentityConfig,
  Container_AzureClusterWorkloadIdentityConfig_GetTypes,
} from "../types/Container_AzureClusterWorkloadIdentityConfig";
import {
  Container_AzureClusterFleet,
  Container_AzureClusterFleet_GetTypes,
} from "../types/Container_AzureClusterFleet";
import {
  Container_AzureClusterControlPlane,
  Container_AzureClusterControlPlane_GetTypes,
} from "../types/Container_AzureClusterControlPlane";
import {
  Container_AzureClusterAuthorization,
  Container_AzureClusterAuthorization_GetTypes,
} from "../types/Container_AzureClusterAuthorization";
import {
  Container_AzureClusterAzureServicesAuthentication,
  Container_AzureClusterAzureServicesAuthentication_GetTypes,
} from "../types/Container_AzureClusterAzureServicesAuthentication";

export interface AzureClusterArgs {
  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Fleet configuration.
  Fleet?: Container_AzureClusterFleet;

  // The name of this resource.
  Name?: string;

  // The number of the Fleet host project where this cluster will be registered.
  Project?: string;

  // Configuration related to the cluster control plane.
  ControlPlane?: Container_AzureClusterControlPlane;

  // The location for the resource
  Location?: string;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  Client?: string;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  Description?: string;

  // Configuration related to the cluster RBAC settings.
  Authorization?: Container_AzureClusterAuthorization;

  // Azure authentication configuration for management of Azure resources
  AzureServicesAuthentication?: Container_AzureClusterAzureServicesAuthentication;

  // Cluster-wide networking configuration.
  Networking?: Container_AzureClusterNetworking;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  ResourceGroupId?: string;

  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  AzureRegion?: string;

  // Logging configuration.
  LoggingConfig?: Container_AzureClusterLoggingConfig;
}
export class AzureCluster extends Resource {
  // Output only. A globally unique identifier for the cluster.
  public Uid?: string;

  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  public AzureRegion?: string;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Logging configuration.
  public LoggingConfig?: Container_AzureClusterLoggingConfig;

  // The number of the Fleet host project where this cluster will be registered.
  public Project?: string;

  // Azure authentication configuration for management of Azure resources
  public AzureServicesAuthentication?: Container_AzureClusterAzureServicesAuthentication;

  // Output only. The endpoint of the cluster's API server.
  public Endpoint?: string;

  // The name of this resource.
  public Name?: string;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public State?: string;

  // Output only. The time at which this cluster was last updated.
  public UpdateTime?: string;

  // Output only. Workload Identity settings.
  public WorkloadIdentityConfigs?: Array<Container_AzureClusterWorkloadIdentityConfig>;

  // Configuration related to the cluster RBAC settings.
  public Authorization?: Container_AzureClusterAuthorization;

  // Configuration related to the cluster control plane.
  public ControlPlane?: Container_AzureClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public Description?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, InputType.String>;

  // Fleet configuration.
  public Fleet?: Container_AzureClusterFleet;

  // The location for the resource
  public Location?: string;

  // Cluster-wide networking configuration.
  public Networking?: Container_AzureClusterNetworking;

  // Output only. If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  public Client?: string;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  public ResourceGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Authorization",
        "Configuration related to the cluster RBAC settings.",
        Container_AzureClusterAuthorization_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AzureRegion",
        "The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Fleet",
        "Fleet configuration.",
        Container_AzureClusterFleet_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ControlPlane",
        "Configuration related to the cluster control plane.",
        Container_AzureClusterControlPlane_GetTypes(),
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
        "Networking",
        "Cluster-wide networking configuration.",
        Container_AzureClusterNetworking_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceGroupId",
        "The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/*/resourceGroups/*`",
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
        InputType.String,
        "Description",
        "Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.",
        [],
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
        InputType.String,
        "Client",
        "Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AzureServicesAuthentication",
        "Azure authentication configuration for management of Azure resources",
        Container_AzureClusterAzureServicesAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoggingConfig",
        "Logging configuration.",
        Container_AzureClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
