import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AttachedClusterAuthorization } from "../types/AttachedClusterAuthorization";
import { AttachedClusterError } from "../types/AttachedClusterError";
import { AttachedClusterWorkloadIdentityConfig } from "../types/AttachedClusterWorkloadIdentityConfig";
import { AttachedClusterOidcConfig } from "../types/AttachedClusterOidcConfig";
import { AttachedClusterBinaryAuthorization } from "../types/AttachedClusterBinaryAuthorization";
import { AttachedClusterProxyConfig } from "../types/AttachedClusterProxyConfig";
import { AttachedClusterLoggingConfig } from "../types/AttachedClusterLoggingConfig";
import { AttachedClusterMonitoringConfig } from "../types/AttachedClusterMonitoringConfig";
import { AttachedClusterFleet } from "../types/AttachedClusterFleet";

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
  Authorization?: AttachedClusterAuthorization;

  // The location for the resource
  Location?: string;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  ProxyConfig?: AttachedClusterProxyConfig;

  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  Description?: string;

  /*
Logging configuration.
Structure is documented below.
*/
  LoggingConfig?: AttachedClusterLoggingConfig;

  /*
Monitoring configuration.
Structure is documented below.
*/
  MonitoringConfig?: AttachedClusterMonitoringConfig;

  // The name of this resource.
  Name?: string;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  Distribution?: string;

  /*
Fleet configuration.
Structure is documented below.
*/
  Fleet?: AttachedClusterFleet;

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
  OidcConfig?: AttachedClusterOidcConfig;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  PlatformVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  BinaryAuthorization?: AttachedClusterBinaryAuthorization;

  // Policy to determine what flags to send on delete.
  DeletionPolicy?: string;
}
export class AttachedCluster extends Resource {
  /*
A human readable description of this attached cluster. Cannot be longer
than 255 UTF-8 encoded bytes.
*/
  public Description?: string;

  /*
The Kubernetes distribution of the underlying attached cluster. Supported values:
"eks", "aks".
*/
  public Distribution?: string;

  /*
A set of errors found in the cluster.
Structure is documented below.
*/
  public Errors?: Array<AttachedClusterError>;

  /*
Logging configuration.
Structure is documented below.
*/
  public LoggingConfig?: AttachedClusterLoggingConfig;

  // The platform version for the cluster (e.g. `1.23.0-gke.1`).
  public PlatformVersion?: string;

  /*
Support for proxy configuration.
Structure is documented below.
*/
  public ProxyConfig?: AttachedClusterProxyConfig;

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

  /*
Output only. The region where this cluster runs.
For EKS clusters, this is an AWS region. For AKS clusters,
this is an Azure region.
*/
  public ClusterRegion?: string;

  // If set, there are currently changes in flight to the cluster.
  public Reconciling?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The current state of the cluster. Possible values:
STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR,
DEGRADED
*/
  public State?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Fleet configuration.
Structure is documented below.
*/
  public Fleet?: AttachedClusterFleet;

  // The Kubernetes version of the cluster.
  public KubernetesVersion?: string;

  // The location for the resource
  public Location?: string;

  /*
Monitoring configuration.
Structure is documented below.
*/
  public MonitoringConfig?: AttachedClusterMonitoringConfig;

  // A globally unique identifier for the cluster.
  public Uid?: string;

  // Output only. The time at which this cluster was created.
  public CreateTime?: string;

  // Policy to determine what flags to send on delete.
  public DeletionPolicy?: string;

  // The time at which this cluster was last updated.
  public UpdateTime?: string;

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
  public OidcConfig?: AttachedClusterOidcConfig;

  /*
Workload Identity settings.
Structure is documented below.
*/
  public WorkloadIdentityConfigs?: Array<AttachedClusterWorkloadIdentityConfig>;

  /*
Configuration related to the cluster RBAC settings.
Structure is documented below.
*/
  public Authorization?: AttachedClusterAuthorization;

  /*
Binary Authorization configuration.
Structure is documented below.
*/
  public BinaryAuthorization?: AttachedClusterBinaryAuthorization;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BinaryAuthorization",
        "Binary Authorization configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProxyConfig",
        "Support for proxy configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Fleet",
        "Fleet configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Authorization",
        "Configuration related to the cluster RBAC settings.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human readable description of this attached cluster. Cannot be longer\nthan 255 UTF-8 encoded bytes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoggingConfig",
        "Logging configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Distribution",
        'The Kubernetes distribution of the underlying attached cluster. Supported values:\n"eks", "aks".',
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "Policy to determine what flags to send on delete.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. Annotations on the cluster. This field has the same\nrestrictions as Kubernetes annotations. The total size of all keys and\nvalues combined is limited to 256k. Key can have 2 segments: prefix (optional)\nand name (required), separated by a slash (/). Prefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MonitoringConfig",
        "Monitoring configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PlatformVersion",
        "The platform version for the cluster (e.g. `1.23.0-gke.1`).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OidcConfig",
        "OIDC discovery information of the target cluster.\nKubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster\nAPI server. This fields indicates how GCP services\nvalidate KSA tokens in order to allow system workloads (such as GKE Connect\nand telemetry agents) to authenticate back to GCP.\nBoth clusters with public and private issuer URLs are supported.\nClusters with public issuers only need to specify the `issuer_url` field\nwhile clusters with private issuers need to provide both\n`issuer_url` and `jwks`.\nStructure is documented below.",
      ),
    ];
  }
}
