import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_AttachedClusterAuthorization,
  container_AttachedClusterAuthorization_GetTypes,
} from "../types/container_AttachedClusterAuthorization";
import {
  container_AttachedClusterOidcConfig,
  container_AttachedClusterOidcConfig_GetTypes,
} from "../types/container_AttachedClusterOidcConfig";
import {
  container_AttachedClusterWorkloadIdentityConfig,
  container_AttachedClusterWorkloadIdentityConfig_GetTypes,
} from "../types/container_AttachedClusterWorkloadIdentityConfig";
import {
  container_AttachedClusterBinaryAuthorization,
  container_AttachedClusterBinaryAuthorization_GetTypes,
} from "../types/container_AttachedClusterBinaryAuthorization";
import {
  container_AttachedClusterLoggingConfig,
  container_AttachedClusterLoggingConfig_GetTypes,
} from "../types/container_AttachedClusterLoggingConfig";
import {
  container_AttachedClusterMonitoringConfig,
  container_AttachedClusterMonitoringConfig_GetTypes,
} from "../types/container_AttachedClusterMonitoringConfig";
import {
  container_AttachedClusterProxyConfig,
  container_AttachedClusterProxyConfig_GetTypes,
} from "../types/container_AttachedClusterProxyConfig";
import {
  container_AttachedClusterError,
  container_AttachedClusterError_GetTypes,
} from "../types/container_AttachedClusterError";
import {
  container_AttachedClusterFleet,
  container_AttachedClusterFleet_GetTypes,
} from "../types/container_AttachedClusterFleet";

export interface AttachedClusterArgs {
  /*
Optional. Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  binaryAuthorization?: container_AttachedClusterBinaryAuthorization;

  /*
Fleet configuration.
Structure is documented below.
*/
  fleet?: container_AttachedClusterFleet;

  // The name of this resource.
  name?: string;

  /*
Configuration related to the cluster RBAC settings.
Structure is documented below.
*/
  authorization?: container_AttachedClusterAuthorization;

  /*
Logging configuration.
Structure is documented below.
*/
  loggingConfig?: container_AttachedClusterLoggingConfig;

  /*
Monitoring configuration.
Structure is documented below.
*/
  monitoringConfig?: container_AttachedClusterMonitoringConfig;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  platformVersion?: string;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  distribution?: string;

  // The location for the resource
  location?: string;

  /*
OIDC discovery information of the target cluster.
Kubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster
API server. This fields indicates how GCP services
validate KSA tokens in order to allow system workloads (such as GKE Connect
and telemetry agents) to authenticate back to GCP.
Both clusters with public and private issuer URLs are supported.
Clusters with public issuers only need to specify the `issuer_url` field
while clusters with private issuers need to provide both
`issuer_url` and `jwks`.
Structure is documented below.
*/
  oidcConfig?: container_AttachedClusterOidcConfig;

  // Policy to determine what flags to send on delete.
  deletionPolicy?: string;

  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  proxyConfig?: container_AttachedClusterProxyConfig;
}
export class AttachedCluster extends DS_Resource {
  // Policy to determine what flags to send on delete.
  public deletionPolicy?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Logging configuration.
Structure is documented below.
*/
  public loggingConfig?: container_AttachedClusterLoggingConfig;

  /*
Configuration related to the cluster RBAC settings.
Structure is documented below.
*/
  public authorization?: container_AttachedClusterAuthorization;

  /*
Output only. The region where this cluster runs.
For EKS clusters, this is an AWS region. For AKS clusters,
this is an Azure region.
*/
  public clusterRegion?: string;

  // The name of this resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The current state of the cluster. Possible values:
STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR,
DEGRADED
*/
  public state?: string;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  public distribution?: string;

  /*
Fleet configuration.
Structure is documented below.
*/
  public fleet?: container_AttachedClusterFleet;

  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  public description?: string;

  // The Kubernetes version of the cluster.
  public kubernetesVersion?: string;

  /*
Monitoring configuration.
Structure is documented below.
*/
  public monitoringConfig?: container_AttachedClusterMonitoringConfig;

  /*
OIDC discovery information of the target cluster.
Kubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster
API server. This fields indicates how GCP services
validate KSA tokens in order to allow system workloads (such as GKE Connect
and telemetry agents) to authenticate back to GCP.
Both clusters with public and private issuer URLs are supported.
Clusters with public issuers only need to specify the `issuer_url` field
while clusters with private issuers need to provide both
`issuer_url` and `jwks`.
Structure is documented below.
*/
  public oidcConfig?: container_AttachedClusterOidcConfig;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  public platformVersion?: string;

  // If set, there are currently changes in flight to the cluster.
  public reconciling?: boolean;

  /*
Optional. Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  public binaryAuthorization?: container_AttachedClusterBinaryAuthorization;

  /*
Workload Identity settings.
Structure is documented below.
*/
  public workloadIdentityConfigs?: Array<container_AttachedClusterWorkloadIdentityConfig>;

  // The location for the resource
  public location?: string;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  public proxyConfig?: container_AttachedClusterProxyConfig;

  // A globally unique identifier for the cluster.
  public uid?: string;

  // The time at which this cluster was last updated.
  public updateTime?: string;

  // Output only. The time at which this cluster was created.
  public createTime?: string;

  /*
A set of errors found in the cluster.
Structure is documented below.
*/
  public errors?: Array<container_AttachedClusterError>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "authorization",
        "Configuration related to the cluster RBAC settings.\nStructure is documented below.",
        () => container_AttachedClusterAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "distribution",
        'The Kubernetes distribution of the underlying attached cluster. Supported values:\n"eks", "aks".',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Optional. Annotations on the cluster. This field has the same\nrestrictions as Kubernetes annotations. The total size of all keys and\nvalues combined is limited to 256k. Key can have 2 segments: prefix (optional)\nand name (required), separated by a slash (/). Prefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oidcConfig",
        "OIDC discovery information of the target cluster.\nKubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster\nAPI server. This fields indicates how GCP services\nvalidate KSA tokens in order to allow system workloads (such as GKE Connect\nand telemetry agents) to authenticate back to GCP.\nBoth clusters with public and private issuer URLs are supported.\nClusters with public issuers only need to specify the `issuer_url` field\nwhile clusters with private issuers need to provide both\n`issuer_url` and `jwks`.\nStructure is documented below.",
        () => container_AttachedClusterOidcConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "Logging configuration.\nStructure is documented below.",
        () => container_AttachedClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "Policy to determine what flags to send on delete.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human readable description of this attached cluster. Cannot be longer\nthan 255 UTF-8 encoded bytes.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "proxyConfig",
        "Support for proxy configuration.\nStructure is documented below.",
        () => container_AttachedClusterProxyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "binaryAuthorization",
        "Binary Authorization configuration.\nStructure is documented below.",
        () => container_AttachedClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fleet",
        "Fleet configuration.\nStructure is documented below.",
        () => container_AttachedClusterFleet_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoringConfig",
        "Monitoring configuration.\nStructure is documented below.",
        () => container_AttachedClusterMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformVersion",
        "The platform version for the cluster (e.g. `1.23.0-gke.1`).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
