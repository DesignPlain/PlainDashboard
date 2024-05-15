import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AttachedClusterOidcConfig,
  Container_AttachedClusterOidcConfig_GetTypes,
} from "../types/Container_AttachedClusterOidcConfig";
import {
  Container_AttachedClusterProxyConfig,
  Container_AttachedClusterProxyConfig_GetTypes,
} from "../types/Container_AttachedClusterProxyConfig";
import {
  Container_AttachedClusterFleet,
  Container_AttachedClusterFleet_GetTypes,
} from "../types/Container_AttachedClusterFleet";
import {
  Container_AttachedClusterAuthorization,
  Container_AttachedClusterAuthorization_GetTypes,
} from "../types/Container_AttachedClusterAuthorization";
import {
  Container_AttachedClusterBinaryAuthorization,
  Container_AttachedClusterBinaryAuthorization_GetTypes,
} from "../types/Container_AttachedClusterBinaryAuthorization";
import {
  Container_AttachedClusterMonitoringConfig,
  Container_AttachedClusterMonitoringConfig_GetTypes,
} from "../types/Container_AttachedClusterMonitoringConfig";
import {
  Container_AttachedClusterLoggingConfig,
  Container_AttachedClusterLoggingConfig_GetTypes,
} from "../types/Container_AttachedClusterLoggingConfig";
import {
  Container_AttachedClusterError,
  Container_AttachedClusterError_GetTypes,
} from "../types/Container_AttachedClusterError";
import {
  Container_AttachedClusterWorkloadIdentityConfig,
  Container_AttachedClusterWorkloadIdentityConfig_GetTypes,
} from "../types/Container_AttachedClusterWorkloadIdentityConfig";

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
  Annotations?: Map<string, string>;

  /*
Configuration related to the cluster RBAC settings.
Structure is documented below.
*/
  Authorization?: Container_AttachedClusterAuthorization;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  Distribution?: string;

  // The location for the resource
  Location?: string;

  /*
Logging configuration.
Structure is documented below.
*/
  LoggingConfig?: Container_AttachedClusterLoggingConfig;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  BinaryAuthorization?: Container_AttachedClusterBinaryAuthorization;

  // Policy to determine what flags to send on delete.
  DeletionPolicy?: string;

  /*
Monitoring configuration.
Structure is documented below.
*/
  MonitoringConfig?: Container_AttachedClusterMonitoringConfig;

  // The name of this resource.
  Name?: string;

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
  OidcConfig?: Container_AttachedClusterOidcConfig;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  ProxyConfig?: Container_AttachedClusterProxyConfig;

  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  Description?: string;

  /*
Fleet configuration.
Structure is documented below.
*/
  Fleet?: Container_AttachedClusterFleet;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  PlatformVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class AttachedCluster extends Resource {
  /*
Configuration related to the cluster RBAC settings.
Structure is documented below.
*/
  public Authorization?: Container_AttachedClusterAuthorization;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  public Description?: string;

  /*
A set of errors found in the cluster.
Structure is documented below.
*/
  public Errors?: Array<Container_AttachedClusterError>;

  /*
Logging configuration.
Structure is documented below.
*/
  public LoggingConfig?: Container_AttachedClusterLoggingConfig;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  public PlatformVersion?: string;

  // A globally unique identifier for the cluster.
  public Uid?: string;

  // Policy to determine what flags to send on delete.
  public DeletionPolicy?: string;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  public Distribution?: string;

  /*
Fleet configuration.
Structure is documented below.
*/
  public Fleet?: Container_AttachedClusterFleet;

  /*
Monitoring configuration.
Structure is documented below.
*/
  public MonitoringConfig?: Container_AttachedClusterMonitoringConfig;

  // If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  /*
The current state of the cluster. Possible values:
STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR,
DEGRADED
*/
  public State?: string;

  // The time at which this cluster was last updated.
  public UpdateTime?: string;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  public BinaryAuthorization?: Container_AttachedClusterBinaryAuthorization;

  /*
Output only. The region where this cluster runs.
For EKS clusters, this is an AWS region. For AKS clusters,
this is an Azure region.
*/
  public ClusterRegion?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The Kubernetes version of the cluster.
  public KubernetesVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  public ProxyConfig?: Container_AttachedClusterProxyConfig;

  /*
Workload Identity settings.
Structure is documented below.
*/
  public WorkloadIdentityConfigs?: Array<Container_AttachedClusterWorkloadIdentityConfig>;

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
  public Annotations?: Map<string, string>;

  // The location for the resource
  public Location?: string;

  // The name of this resource.
  public Name?: string;

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
  public OidcConfig?: Container_AttachedClusterOidcConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Distribution",
        'The Kubernetes distribution of the underlying attached cluster. Supported values:\n"eks", "aks".',
        [],
        true,
        true,
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
        "BinaryAuthorization",
        "Binary Authorization configuration.\nStructure is documented below.",
        Container_AttachedClusterBinaryAuthorization_GetTypes(),
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
        "OidcConfig",
        "OIDC discovery information of the target cluster.\nKubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster\nAPI server. This fields indicates how GCP services\nvalidate KSA tokens in order to allow system workloads (such as GKE Connect\nand telemetry agents) to authenticate back to GCP.\nBoth clusters with public and private issuer URLs are supported.\nClusters with public issuers only need to specify the `issuer_url` field\nwhile clusters with private issuers need to provide both\n`issuer_url` and `jwks`.\nStructure is documented below.",
        Container_AttachedClusterOidcConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Optional. Annotations on the cluster. This field has the same\nrestrictions as Kubernetes annotations. The total size of all keys and\nvalues combined is limited to 256k. Key can have 2 segments: prefix (optional)\nand name (required), separated by a slash (/). Prefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Authorization",
        "Configuration related to the cluster RBAC settings.\nStructure is documented below.",
        Container_AttachedClusterAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoggingConfig",
        "Logging configuration.\nStructure is documented below.",
        Container_AttachedClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MonitoringConfig",
        "Monitoring configuration.\nStructure is documented below.",
        Container_AttachedClusterMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this attached cluster. Cannot be longer\nthan 255 UTF-8 encoded bytes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PlatformVersion",
        "The platform version for the cluster (e.g. `1.23.0-gke.1`).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "Policy to determine what flags to send on delete.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ProxyConfig",
        "Support for proxy configuration.\nStructure is documented below.",
        Container_AttachedClusterProxyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Fleet",
        "Fleet configuration.\nStructure is documented below.",
        Container_AttachedClusterFleet_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
