import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AzureClusterControlPlane,
  container_AzureClusterControlPlane_GetTypes,
} from "../types/container_AzureClusterControlPlane";
import {
  container_AzureClusterLoggingConfig,
  container_AzureClusterLoggingConfig_GetTypes,
} from "../types/container_AzureClusterLoggingConfig";
import {
  container_AzureClusterNetworking,
  container_AzureClusterNetworking_GetTypes,
} from "../types/container_AzureClusterNetworking";
import {
  container_AzureClusterAuthorization,
  container_AzureClusterAuthorization_GetTypes,
} from "../types/container_AzureClusterAuthorization";
import {
  container_AzureClusterAzureServicesAuthentication,
  container_AzureClusterAzureServicesAuthentication_GetTypes,
} from "../types/container_AzureClusterAzureServicesAuthentication";
import {
  container_AzureClusterFleet,
  container_AzureClusterFleet_GetTypes,
} from "../types/container_AzureClusterFleet";
import {
  container_AzureClusterWorkloadIdentityConfig,
  container_AzureClusterWorkloadIdentityConfig_GetTypes,
} from "../types/container_AzureClusterWorkloadIdentityConfig";

export interface AzureClusterArgs {
  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  azureRegion?: string;

  // Configuration related to the cluster control plane.
  controlPlane?: container_AzureClusterControlPlane;

  // The location for the resource
  location?: string;

  // Logging configuration.
  loggingConfig?: container_AzureClusterLoggingConfig;

  // Cluster-wide networking configuration.
  networking?: container_AzureClusterNetworking;

  // Configuration related to the cluster RBAC settings.
  authorization?: container_AzureClusterAuthorization;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  description?: string;

  // The name of this resource.
  name?: string;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  resourceGroupId?: string;

  // Azure authentication configuration for management of Azure resources
  azureServicesAuthentication?: container_AzureClusterAzureServicesAuthentication;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  client?: string;

  // Fleet configuration.
  fleet?: container_AzureClusterFleet;

  // The number of the Fleet host project where this cluster will be registered.
  project?: string;
}
export class AzureCluster extends Resource {
  // Output only. A globally unique identifier for the cluster.
  public uid?: string;

  // Output only. Workload Identity settings.
  public workloadIdentityConfigs?: Array<container_AzureClusterWorkloadIdentityConfig>;

  // The number of the Fleet host project where this cluster will be registered.
  public project?: string;

  // The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/-/resourceGroups/-`
  public resourceGroupId?: string;

  // Output only. The current state of the cluster. Possible values: STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED
  public state?: string;

  // Configuration related to the cluster control plane.
  public controlPlane?: container_AzureClusterControlPlane;

  // Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  public description?: string;

  // Allows clients to perform consistent read-modify-writes through optimistic concurrency control. May be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // Cluster-wide networking configuration.
  public networking?: container_AzureClusterNetworking;

  // Output only. The endpoint of the cluster's API server.
  public endpoint?: string;

  // Fleet configuration.
  public fleet?: container_AzureClusterFleet;

  // Logging configuration.
  public loggingConfig?: container_AzureClusterLoggingConfig;

  // Output only. If set, there are currently changes in flight to the cluster.
  public reconciling?: boolean;

  /*
Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  public azureRegion?: string;

  // Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  public client?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // Output only. The time at which this cluster was last updated.
  public updateTime?: string;

  // The name of this resource.
  public name?: string;

  // Configuration related to the cluster RBAC settings.
  public authorization?: container_AzureClusterAuthorization;

  // Azure authentication configuration for management of Azure resources
  public azureServicesAuthentication?: container_AzureClusterAzureServicesAuthentication;

  // Output only. The time at which this cluster was created.
  public createTime?: string;

  // The location for the resource
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "azureRegion",
        "The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "controlPlane",
        "Configuration related to the cluster control plane.",
        container_AzureClusterControlPlane_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "Logging configuration.",
        container_AzureClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authorization",
        "Configuration related to the cluster RBAC settings.",
        container_AzureClusterAuthorization_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fleet",
        "Fleet configuration.",
        container_AzureClusterFleet_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networking",
        "Cluster-wide networking configuration.",
        container_AzureClusterNetworking_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceGroupId",
        "The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/*/resourceGroups/*`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "azureServicesAuthentication",
        "Azure authentication configuration for management of Azure resources",
        container_AzureClusterAzureServicesAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "client",
        "Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The number of the Fleet host project where this cluster will be registered.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
    ];
  }
}
