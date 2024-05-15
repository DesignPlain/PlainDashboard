import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterGatewayApiConfig,
  Container_ClusterGatewayApiConfig_GetTypes,
} from "../types/Container_ClusterGatewayApiConfig";
import {
  Container_ClusterAddonsConfig,
  Container_ClusterAddonsConfig_GetTypes,
} from "../types/Container_ClusterAddonsConfig";
import {
  Container_ClusterMonitoringConfig,
  Container_ClusterMonitoringConfig_GetTypes,
} from "../types/Container_ClusterMonitoringConfig";
import {
  Container_ClusterClusterAutoscaling,
  Container_ClusterClusterAutoscaling_GetTypes,
} from "../types/Container_ClusterClusterAutoscaling";
import {
  Container_ClusterAuthenticatorGroupsConfig,
  Container_ClusterAuthenticatorGroupsConfig_GetTypes,
} from "../types/Container_ClusterAuthenticatorGroupsConfig";
import {
  Container_ClusterEnableK8sBetaApis,
  Container_ClusterEnableK8sBetaApis_GetTypes,
} from "../types/Container_ClusterEnableK8sBetaApis";
import {
  Container_ClusterBinaryAuthorization,
  Container_ClusterBinaryAuthorization_GetTypes,
} from "../types/Container_ClusterBinaryAuthorization";
import {
  Container_ClusterMeshCertificates,
  Container_ClusterMeshCertificates_GetTypes,
} from "../types/Container_ClusterMeshCertificates";
import {
  Container_ClusterCostManagementConfig,
  Container_ClusterCostManagementConfig_GetTypes,
} from "../types/Container_ClusterCostManagementConfig";
import {
  Container_ClusterNodePoolAutoConfig,
  Container_ClusterNodePoolAutoConfig_GetTypes,
} from "../types/Container_ClusterNodePoolAutoConfig";
import {
  Container_ClusterNodeConfig,
  Container_ClusterNodeConfig_GetTypes,
} from "../types/Container_ClusterNodeConfig";
import {
  Container_ClusterDefaultSnatStatus,
  Container_ClusterDefaultSnatStatus_GetTypes,
} from "../types/Container_ClusterDefaultSnatStatus";
import {
  Container_ClusterDatabaseEncryption,
  Container_ClusterDatabaseEncryption_GetTypes,
} from "../types/Container_ClusterDatabaseEncryption";
import {
  Container_ClusterSecurityPostureConfig,
  Container_ClusterSecurityPostureConfig_GetTypes,
} from "../types/Container_ClusterSecurityPostureConfig";
import {
  Container_ClusterTpuConfig,
  Container_ClusterTpuConfig_GetTypes,
} from "../types/Container_ClusterTpuConfig";
import {
  Container_ClusterWorkloadAltsConfig,
  Container_ClusterWorkloadAltsConfig_GetTypes,
} from "../types/Container_ClusterWorkloadAltsConfig";
import {
  Container_ClusterVerticalPodAutoscaling,
  Container_ClusterVerticalPodAutoscaling_GetTypes,
} from "../types/Container_ClusterVerticalPodAutoscaling";
import {
  Container_ClusterNotificationConfig,
  Container_ClusterNotificationConfig_GetTypes,
} from "../types/Container_ClusterNotificationConfig";
import {
  Container_ClusterPrivateClusterConfig,
  Container_ClusterPrivateClusterConfig_GetTypes,
} from "../types/Container_ClusterPrivateClusterConfig";
import {
  Container_ClusterResourceUsageExportConfig,
  Container_ClusterResourceUsageExportConfig_GetTypes,
} from "../types/Container_ClusterResourceUsageExportConfig";
import {
  Container_ClusterWorkloadIdentityConfig,
  Container_ClusterWorkloadIdentityConfig_GetTypes,
} from "../types/Container_ClusterWorkloadIdentityConfig";
import {
  Container_ClusterConfidentialNodes,
  Container_ClusterConfidentialNodes_GetTypes,
} from "../types/Container_ClusterConfidentialNodes";
import {
  Container_ClusterPodSecurityPolicyConfig,
  Container_ClusterPodSecurityPolicyConfig_GetTypes,
} from "../types/Container_ClusterPodSecurityPolicyConfig";
import {
  Container_ClusterClusterTelemetry,
  Container_ClusterClusterTelemetry_GetTypes,
} from "../types/Container_ClusterClusterTelemetry";
import {
  Container_ClusterFleet,
  Container_ClusterFleet_GetTypes,
} from "../types/Container_ClusterFleet";
import {
  Container_ClusterMasterAuth,
  Container_ClusterMasterAuth_GetTypes,
} from "../types/Container_ClusterMasterAuth";
import {
  Container_ClusterDnsConfig,
  Container_ClusterDnsConfig_GetTypes,
} from "../types/Container_ClusterDnsConfig";
import {
  Container_ClusterReleaseChannel,
  Container_ClusterReleaseChannel_GetTypes,
} from "../types/Container_ClusterReleaseChannel";
import {
  Container_ClusterNodePool,
  Container_ClusterNodePool_GetTypes,
} from "../types/Container_ClusterNodePool";
import {
  Container_ClusterNodePoolDefaults,
  Container_ClusterNodePoolDefaults_GetTypes,
} from "../types/Container_ClusterNodePoolDefaults";
import {
  Container_ClusterServiceExternalIpsConfig,
  Container_ClusterServiceExternalIpsConfig_GetTypes,
} from "../types/Container_ClusterServiceExternalIpsConfig";
import {
  Container_ClusterMasterAuthorizedNetworksConfig,
  Container_ClusterMasterAuthorizedNetworksConfig_GetTypes,
} from "../types/Container_ClusterMasterAuthorizedNetworksConfig";
import {
  Container_ClusterIpAllocationPolicy,
  Container_ClusterIpAllocationPolicy_GetTypes,
} from "../types/Container_ClusterIpAllocationPolicy";
import {
  Container_ClusterLoggingConfig,
  Container_ClusterLoggingConfig_GetTypes,
} from "../types/Container_ClusterLoggingConfig";
import {
  Container_ClusterIdentityServiceConfig,
  Container_ClusterIdentityServiceConfig_GetTypes,
} from "../types/Container_ClusterIdentityServiceConfig";
import {
  Container_ClusterMaintenancePolicy,
  Container_ClusterMaintenancePolicy_GetTypes,
} from "../types/Container_ClusterMaintenancePolicy";
import {
  Container_ClusterNetworkPolicy,
  Container_ClusterNetworkPolicy_GetTypes,
} from "../types/Container_ClusterNetworkPolicy";
import {
  Container_ClusterProtectConfig,
  Container_ClusterProtectConfig_GetTypes,
} from "../types/Container_ClusterProtectConfig";

export interface ClusterArgs {
  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  ConfidentialNodes?: Container_ClusterConfidentialNodes;

  // Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.
  NotificationConfig?: Container_ClusterNotificationConfig;

  /*
Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
feature, which provide more control over automatic upgrades of your GKE clusters.
When updating this field, GKE imposes specific version requirements. See
[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)
for more details; the `gcp.container.getEngineVersions` datasource can provide
the default version for a channel. Note that removing the `release_channel`
field from your config will cause the provider to stop managing your cluster's
release channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`
channel. Structure is documented below.
*/
  ReleaseChannel?: Container_ClusterReleaseChannel;

  /*
The default maximum number of pods
per node in this cluster. This doesn't work on "routes-based" clusters, clusters
that don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  DefaultMaxPodsPerNode?: number;

  /*
Monitoring configuration for the cluster.
Structure is documented below.
*/
  MonitoringConfig?: Container_ClusterMonitoringConfig;

  /*
Configuration for the
[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.
Structure is documented below.
*/
  PodSecurityPolicyConfig?: Container_ClusterPodSecurityPolicyConfig;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  Subnetwork?: string;

  // TPU configuration for the cluster.
  TpuConfig?: Container_ClusterTpuConfig;

  /*
Configuration for the
[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.
Structure is documented below.
*/
  CostManagementConfig?: Container_ClusterCostManagementConfig;

  // The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.
  DatapathProvider?: string;

  // . Structure is documented below.
  IdentityServiceConfig?: Container_ClusterIdentityServiceConfig;

  /*
Determines whether alias IPs or routes will be used for pod IPs in the cluster.
Options are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.
*/
  NetworkingMode?: string;

  /*
List of node pools associated with this cluster.
See gcp.container.NodePool for schema.
--Warning:-- node pools defined inside a cluster can't be changed (or added/removed) after
cluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability
to say "these are the _only_ node pools associated with this cluster", use the
gcp.container.NodePool resource instead of this property.
*/
  NodePools?: Array<Container_ClusterNodePool>;

  // Description of the cluster.
  Description?: string;

  /*
The logging service that the cluster should
write logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),
`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`
*/
  LoggingService?: string;

  /*
The maintenance policy to use for the cluster. Structure is
documented below.
*/
  MaintenancePolicy?: Container_ClusterMaintenancePolicy;

  // Whether multi-networking is enabled for this cluster.
  EnableMultiNetworking?: boolean;

  /*
The location (region or zone) in which the cluster
master will be created, as well as the default node location. If you specify a
zone (such as `us-central1-a`), the cluster will be a zonal cluster with a
single cluster master. If you specify a region (such as `us-west1`), the
cluster will be a regional cluster with multiple masters spread across zones in
the region, and with default node locations in those zones as well
*/
  Location?: string;

  // Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.
  NodePoolDefaults?: Container_ClusterNodePoolDefaults;

  // Structure is documented below.
  ServiceExternalIpsConfig?: Container_ClusterServiceExternalIpsConfig;

  /*
Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.

<a name="nested_default_snat_status"></a>The `default_snat_status` block supports
*/
  WorkloadAltsConfig?: Container_ClusterWorkloadAltsConfig;

  /*
Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to
automatically adjust the size of the cluster and create/delete node pools based
on the current needs of the cluster's workload. See the
[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
for more details. Structure is documented below.
*/
  ClusterAutoscaling?: Container_ClusterClusterAutoscaling;

  // Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.
  EnableFqdnNetworkPolicy?: boolean;

  /*
Whether to enable Kubernetes Alpha features for
this cluster. Note that when this option is enabled, the cluster cannot be upgraded
and will be automatically deleted after 30 days.
*/
  EnableKubernetesAlpha?: boolean;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  Name?: string;

  /*
The list of zones in which the cluster's nodes
are located. Nodes must be in the region of their regional cluster or in the
same region as their cluster's zone for zonal clusters. If this is specified for
a zonal cluster, omit the cluster's zone.

> A "multi-zonal" cluster is a zonal cluster with at least one additional zone
defined; in a multi-zonal cluster, the cluster master is only present in a
single zone while nodes are present in each of the primary zone and the node
locations. In contrast, in a regional cluster, cluster master nodes are present
in multiple zones in the region. For that reason, regional clusters should be
preferred.
*/
  NodeLocations?: Array<string>;

  /*
Node pool configs that apply to auto-provisioned node pools in
[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and
[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.
*/
  NodePoolAutoConfig?: Container_ClusterNodePoolAutoConfig;

  /*
Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.
Structure is documented below.
*/
  VerticalPodAutoscaling?: Container_ClusterVerticalPodAutoscaling;

  // Structure is documented below.
  DatabaseEncryption?: Container_ClusterDatabaseEncryption;

  // Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  EnableIntranodeVisibility?: boolean;

  /*
Whether to enable Cloud TPU resources in this cluster.
See the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).
*/
  EnableTpu?: boolean;

  /*
The desired
configuration options for master authorized networks. Omit the
nested `cidr_blocks` attribute to disallow external access (except
the cluster node IPs, which GKE automatically whitelists).
Structure is documented below.
*/
  MasterAuthorizedNetworksConfig?: Container_ClusterMasterAuthorizedNetworksConfig;

  /*
Configuration options for the
[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)
feature. Structure is documented below.
*/
  NetworkPolicy?: Container_ClusterNetworkPolicy;

  /*
Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),
clusters with private nodes. Structure is documented below.
*/
  PrivateClusterConfig?: Container_ClusterPrivateClusterConfig;

  // Enable/Disable Security Posture API features for the cluster. Structure is documented below.
  SecurityPostureConfig?: Container_ClusterSecurityPostureConfig;

  /*
Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in
Terraform state, a terraform destroy or terraform apply that would delete the cluster will fail.
*/
  DeletionProtection?: boolean;

  /*
The monitoring service that the cluster
should write metrics to.
Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API.
VM metrics will be collected by Google Compute Engine regardless of this setting
Available options include
`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.
Defaults to `monitoring.googleapis.com/kubernetes`
*/
  MonitoringService?: string;

  // The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  PrivateIpv6GoogleAccess?: string;

  /*
Configuration for the
[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.
Structure is documented below.
*/
  ResourceUsageExportConfig?: Container_ClusterResourceUsageExportConfig;

  /*
Configuration for
[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,
Structure is documented below.
*/
  ClusterTelemetry?: Container_ClusterClusterTelemetry;

  /*
Configuration of cluster IP allocation for
VPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.
Structure is documented below.
*/
  IpAllocationPolicy?: Container_ClusterIpAllocationPolicy;

  /*
The minimum version of the master. GKE
will auto-update the master to new versions, so this does not guarantee the
current master version--use the read-only `master_version` field to obtain that.
If unset, the cluster's version will be set by GKE to the version of the most recent
official release (which is not necessarily the latest version).  Most users will find
the `gcp.container.getEngineVersions` data source useful - it indicates which versions
are available. If you intend to specify versions manually,
[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)
describe the various acceptable formats for this field.

> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`
to the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a
region are guaranteed to support the same version.
*/
  MinMasterVersion?: string;

  // The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  ResourceLabels?: Map<string, string>;

  /*
Configuration for the
[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.
Structure is documented below.
*/
  AuthenticatorGroupsConfig?: Container_ClusterAuthenticatorGroupsConfig;

  // Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.
  EnableShieldedNodes?: boolean;

  /*
Workload Identity allows Kubernetes service accounts to act as a user-managed
[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).
Structure is documented below.
*/
  WorkloadIdentityConfig?: Container_ClusterWorkloadIdentityConfig;

  /*
The IP address range of the Kubernetes pods
in this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one
automatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will
default a new cluster to routes-based, where `ip_allocation_policy` is not defined.
*/
  ClusterIpv4Cidr?: string;

  /*
Configuration for Kubernetes Beta APIs.
Structure is documented below.
*/
  EnableK8sBetaApis?: Container_ClusterEnableK8sBetaApis;

  // Fleet configuration for the cluster. Structure is documented below.
  Fleet?: Container_ClusterFleet;

  /*
The authentication information for accessing the
Kubernetes master. Some values in this block are only returned by the API if
your service account has permission to get credentials for your GKE cluster. If
you see an unexpected diff unsetting your client cert, ensure you have the
`container.clusters.getCredentials` permission.
Structure is documented below.
*/
  MasterAuth?: Container_ClusterMasterAuth;

  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  NodeConfig?: Container_ClusterNodeConfig;

  /*
The Kubernetes version on the nodes. Must either be unset
or set to the same value as `min_master_version` on create. Defaults to the default
version set by GKE which is not necessarily the latest version. This only affects
nodes in the default node pool. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions.
To update nodes in other node pools, use the `version` attribute on the node pool.
*/
  NodeVersion?: string;

  /*
Configuration options for the Binary
Authorization feature. Structure is documented below.
*/
  BinaryAuthorization?: Container_ClusterBinaryAuthorization;

  // [GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below
  DefaultSnatStatus?: Container_ClusterDefaultSnatStatus;

  // Whether L4ILB Subsetting is enabled for this cluster.
  EnableL4IlbSubsetting?: boolean;

  // Structure is documented below.
  MeshCertificates?: Container_ClusterMeshCertificates;

  // Enable/Disable Protect API features for the cluster. Structure is documented below.
  ProtectConfig?: Container_ClusterProtectConfig;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  InitialNodeCount?: number;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
If `true`, deletes the default node
pool upon cluster creation. If you're using `gcp.container.NodePool`
resources with no default node pool, this should be set to `true`, alongside
setting `initial_node_count` to at least `1`.
*/
  RemoveDefaultNodePool?: boolean;

  /*
Enable NET_ADMIN for the cluster. Defaults to
`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`
set to `true`).
*/
  AllowNetAdmin?: boolean;

  /*
Enable Autopilot for this cluster. Defaults to `false`.
Note that when this option is enabled, certain features of Standard GKE are not available.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)
for available features.
*/
  EnableAutopilot?: boolean;

  /*
Whether the ABAC authorizer is enabled for this cluster.
When enabled, identities in the system, including service accounts, nodes, and controllers,
will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
Defaults to `false`
*/
  EnableLegacyAbac?: boolean;

  // Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.
  DnsConfig?: Container_ClusterDnsConfig;

  // Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.
  GatewayApiConfig?: Container_ClusterGatewayApiConfig;

  /*
Logging configuration for the cluster.
Structure is documented below.
*/
  LoggingConfig?: Container_ClusterLoggingConfig;

  /*
The configuration for addons supported by GKE.
Structure is documented below.
*/
  AddonsConfig?: Container_ClusterAddonsConfig;

  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  Network?: string;
}
export class Cluster extends Resource {
  /*
Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to
automatically adjust the size of the cluster and create/delete node pools based
on the current needs of the cluster's workload. See the
[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
for more details. Structure is documented below.
*/
  public ClusterAutoscaling?: Container_ClusterClusterAutoscaling;

  /*
Enable Autopilot for this cluster. Defaults to `false`.
Note that when this option is enabled, certain features of Standard GKE are not available.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)
for available features.
*/
  public EnableAutopilot?: boolean;

  // Fleet configuration for the cluster. Structure is documented below.
  public Fleet?: Container_ClusterFleet;

  // . Structure is documented below.
  public IdentityServiceConfig?: Container_ClusterIdentityServiceConfig;

  // Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.
  public DnsConfig?: Container_ClusterDnsConfig;

  // The IP address of this cluster's Kubernetes master.
  public Endpoint?: string;

  /*
Workload Identity allows Kubernetes service accounts to act as a user-managed
[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).
Structure is documented below.
*/
  public WorkloadIdentityConfig?: Container_ClusterWorkloadIdentityConfig;

  /*
Configuration for the
[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.
Structure is documented below.
*/
  public AuthenticatorGroupsConfig?: Container_ClusterAuthenticatorGroupsConfig;

  /*
Whether to enable Kubernetes Alpha features for
this cluster. Note that when this option is enabled, the cluster cannot be upgraded
and will be automatically deleted after 30 days.
*/
  public EnableKubernetesAlpha?: boolean;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  public InitialNodeCount?: number;

  /*
Node pool configs that apply to auto-provisioned node pools in
[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and
[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.
*/
  public NodePoolAutoConfig?: Container_ClusterNodePoolAutoConfig;

  /*
The default maximum number of pods
per node in this cluster. This doesn't work on "routes-based" clusters, clusters
that don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  public DefaultMaxPodsPerNode?: number;

  /*
The desired
configuration options for master authorized networks. Omit the
nested `cidr_blocks` attribute to disallow external access (except
the cluster node IPs, which GKE automatically whitelists).
Structure is documented below.
*/
  public MasterAuthorizedNetworksConfig?: Container_ClusterMasterAuthorizedNetworksConfig;

  // Enable/Disable Protect API features for the cluster. Structure is documented below.
  public ProtectConfig?: Container_ClusterProtectConfig;

  // TPU configuration for the cluster.
  public TpuConfig?: Container_ClusterTpuConfig;

  /*
The monitoring service that the cluster
should write metrics to.
Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API.
VM metrics will be collected by Google Compute Engine regardless of this setting
Available options include
`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.
Defaults to `monitoring.googleapis.com/kubernetes`
*/
  public MonitoringService?: string;

  /*
Configuration for the
[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.
Structure is documented below.
*/
  public PodSecurityPolicyConfig?: Container_ClusterPodSecurityPolicyConfig;

  // Structure is documented below.
  public ServiceExternalIpsConfig?: Container_ClusterServiceExternalIpsConfig;

  /*
Configuration for the
[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.
Structure is documented below.
*/
  public CostManagementConfig?: Container_ClusterCostManagementConfig;

  // The fingerprint of the set of labels for this cluster.
  public LabelFingerprint?: string;

  /*
Logging configuration for the cluster.
Structure is documented below.
*/
  public LoggingConfig?: Container_ClusterLoggingConfig;

  /*
The current version of the master in the cluster. This may
be different than the `min_master_version` set in the config if the master
has been updated by GKE.
*/
  public MasterVersion?: string;

  /*
The IP address range of the Cloud TPUs in this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`).
*/
  public TpuIpv4CidrBlock?: string;

  /*
The IP address range of the Kubernetes pods
in this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one
automatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will
default a new cluster to routes-based, where `ip_allocation_policy` is not defined.
*/
  public ClusterIpv4Cidr?: string;

  /*
The authentication information for accessing the
Kubernetes master. Some values in this block are only returned by the API if
your service account has permission to get credentials for your GKE cluster. If
you see an unexpected diff unsetting your client cert, ensure you have the
`container.clusters.getCredentials` permission.
Structure is documented below.
*/
  public MasterAuth?: Container_ClusterMasterAuth;

  /*
Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
feature, which provide more control over automatic upgrades of your GKE clusters.
When updating this field, GKE imposes specific version requirements. See
[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)
for more details; the `gcp.container.getEngineVersions` datasource can provide
the default version for a channel. Note that removing the `release_channel`
field from your config will cause the provider to stop managing your cluster's
release channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`
channel. Structure is documented below.
*/
  public ReleaseChannel?: Container_ClusterReleaseChannel;

  // The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  public ResourceLabels?: Map<string, string>;

  /*
Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),
clusters with private nodes. Structure is documented below.
*/
  public PrivateClusterConfig?: Container_ClusterPrivateClusterConfig;

  /*
The IP address range of the Kubernetes services in this
cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last
`/16` from the container CIDR.
*/
  public ServicesIpv4Cidr?: string;

  // Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  public EnableIntranodeVisibility?: boolean;

  // Whether L4ILB Subsetting is enabled for this cluster.
  public EnableL4IlbSubsetting?: boolean;

  /*
Monitoring configuration for the cluster.
Structure is documented below.
*/
  public MonitoringConfig?: Container_ClusterMonitoringConfig;

  // Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.
  public NotificationConfig?: Container_ClusterNotificationConfig;

  /*
If `true`, deletes the default node
pool upon cluster creation. If you're using `gcp.container.NodePool`
resources with no default node pool, this should be set to `true`, alongside
setting `initial_node_count` to at least `1`.
*/
  public RemoveDefaultNodePool?: boolean;

  /*
Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.

<a name="nested_default_snat_status"></a>The `default_snat_status` block supports
*/
  public WorkloadAltsConfig?: Container_ClusterWorkloadAltsConfig;

  /*
The location (region or zone) in which the cluster
master will be created, as well as the default node location. If you specify a
zone (such as `us-central1-a`), the cluster will be a zonal cluster with a
single cluster master. If you specify a region (such as `us-west1`), the
cluster will be a regional cluster with multiple masters spread across zones in
the region, and with default node locations in those zones as well
*/
  public Location?: string;

  /*
The minimum version of the master. GKE
will auto-update the master to new versions, so this does not guarantee the
current master version--use the read-only `master_version` field to obtain that.
If unset, the cluster's version will be set by GKE to the version of the most recent
official release (which is not necessarily the latest version).  Most users will find
the `gcp.container.getEngineVersions` data source useful - it indicates which versions
are available. If you intend to specify versions manually,
[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)
describe the various acceptable formats for this field.

> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`
to the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a
region are guaranteed to support the same version.
*/
  public MinMasterVersion?: string;

  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  public Network?: string;

  /*
The Kubernetes version on the nodes. Must either be unset
or set to the same value as `min_master_version` on create. Defaults to the default
version set by GKE which is not necessarily the latest version. This only affects
nodes in the default node pool. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions.
To update nodes in other node pools, use the `version` attribute on the node pool.
*/
  public NodeVersion?: string;

  /*
List of node pools associated with this cluster.
See gcp.container.NodePool for schema.
--Warning:-- node pools defined inside a cluster can't be changed (or added/removed) after
cluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability
to say "these are the _only_ node pools associated with this cluster", use the
gcp.container.NodePool resource instead of this property.
*/
  public NodePools?: Array<Container_ClusterNodePool>;

  // The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  public PrivateIpv6GoogleAccess?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  public Subnetwork?: string;

  /*
Configuration options for the Binary
Authorization feature. Structure is documented below.
*/
  public BinaryAuthorization?: Container_ClusterBinaryAuthorization;

  // Description of the cluster.
  public Description?: string;

  /*
The logging service that the cluster should
write logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),
`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`
*/
  public LoggingService?: string;

  /*
The list of zones in which the cluster's nodes
are located. Nodes must be in the region of their regional cluster or in the
same region as their cluster's zone for zonal clusters. If this is specified for
a zonal cluster, omit the cluster's zone.

> A "multi-zonal" cluster is a zonal cluster with at least one additional zone
defined; in a multi-zonal cluster, the cluster master is only present in a
single zone while nodes are present in each of the primary zone and the node
locations. In contrast, in a regional cluster, cluster master nodes are present
in multiple zones in the region. For that reason, regional clusters should be
preferred.
*/
  public NodeLocations?: Array<string>;

  /*
Configuration for
[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,
Structure is documented below.
*/
  public ClusterTelemetry?: Container_ClusterClusterTelemetry;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configuration for the
[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.
Structure is documented below.
*/
  public ResourceUsageExportConfig?: Container_ClusterResourceUsageExportConfig;

  /*
Enable NET_ADMIN for the cluster. Defaults to
`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`
set to `true`).
*/
  public AllowNetAdmin?: boolean;

  // [GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below
  public DefaultSnatStatus?: Container_ClusterDefaultSnatStatus;

  // Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.
  public EnableFqdnNetworkPolicy?: boolean;

  /*
Configuration for Kubernetes Beta APIs.
Structure is documented below.
*/
  public EnableK8sBetaApis?: Container_ClusterEnableK8sBetaApis;

  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  public NodeConfig?: Container_ClusterNodeConfig;

  /*
The configuration for addons supported by GKE.
Structure is documented below.
*/
  public AddonsConfig?: Container_ClusterAddonsConfig;

  // The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.
  public DatapathProvider?: string;

  // Structure is documented below.
  public MeshCertificates?: Container_ClusterMeshCertificates;

  /*
Configuration options for the
[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)
feature. Structure is documented below.
*/
  public NetworkPolicy?: Container_ClusterNetworkPolicy;

  // Structure is documented below.
  public DatabaseEncryption?: Container_ClusterDatabaseEncryption;

  /*
Whether the ABAC authorizer is enabled for this cluster.
When enabled, identities in the system, including service accounts, nodes, and controllers,
will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
Defaults to `false`
*/
  public EnableLegacyAbac?: boolean;

  // Whether multi-networking is enabled for this cluster.
  public EnableMultiNetworking?: boolean;

  // Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.
  public NodePoolDefaults?: Container_ClusterNodePoolDefaults;

  // The server-defined URL for the resource.
  public SelfLink?: string;

  /*
Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.
Structure is documented below.
*/
  public VerticalPodAutoscaling?: Container_ClusterVerticalPodAutoscaling;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  public ConfidentialNodes?: Container_ClusterConfidentialNodes;

  /*
Configuration of cluster IP allocation for
VPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.
Structure is documented below.
*/
  public IpAllocationPolicy?: Container_ClusterIpAllocationPolicy;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  public Name?: string;

  //
  public Operation?: string;

  /*
Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in
Terraform state, a terraform destroy or terraform apply that would delete the cluster will fail.
*/
  public DeletionProtection?: boolean;

  /*
Determines whether alias IPs or routes will be used for pod IPs in the cluster.
Options are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.
*/
  public NetworkingMode?: string;

  // Enable/Disable Security Posture API features for the cluster. Structure is documented below.
  public SecurityPostureConfig?: Container_ClusterSecurityPostureConfig;

  // Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.
  public EnableShieldedNodes?: boolean;

  /*
Whether to enable Cloud TPU resources in this cluster.
See the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).
*/
  public EnableTpu?: boolean;

  // Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.
  public GatewayApiConfig?: Container_ClusterGatewayApiConfig;

  /*
The maintenance policy to use for the cluster. Structure is
documented below.
*/
  public MaintenancePolicy?: Container_ClusterMaintenancePolicy;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NetworkingMode",
        "Determines whether alias IPs or routes will be used for pod IPs in the cluster.\nOptions are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NodeLocations",
        "The list of zones in which the cluster's nodes\nare located. Nodes must be in the region of their regional cluster or in the\nsame region as their cluster's zone for zonal clusters. If this is specified for\na zonal cluster, omit the cluster's zone.\n\n> A \"multi-zonal\" cluster is a zonal cluster with at least one additional zone\ndefined; in a multi-zonal cluster, the cluster master is only present in a\nsingle zone while nodes are present in each of the primary zone and the node\nlocations. In contrast, in a regional cluster, cluster master nodes are present\nin multiple zones in the region. For that reason, regional clusters should be\npreferred.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PrivateClusterConfig",
        "Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),\nclusters with private nodes. Structure is documented below.",
        Container_ClusterPrivateClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ProtectConfig",
        "Enable/Disable Protect API features for the cluster. Structure is documented below.",
        Container_ClusterProtectConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodePoolDefaults",
        "Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.",
        Container_ClusterNodePoolDefaults_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MasterAuthorizedNetworksConfig",
        "The desired\nconfiguration options for master authorized networks. Omit the\nnested `cidr_blocks` attribute to disallow external access (except\nthe cluster node IPs, which GKE automatically whitelists).\nStructure is documented below.",
        Container_ClusterMasterAuthorizedNetworksConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MonitoringService",
        "The monitoring service that the cluster\nshould write metrics to.\nAutomatically send metrics from pods in the cluster to the Google Cloud Monitoring API.\nVM metrics will be collected by Google Compute Engine regardless of this setting\nAvailable options include\n`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.\nDefaults to `monitoring.googleapis.com/kubernetes`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "IpAllocationPolicy",
        "Configuration of cluster IP allocation for\nVPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.\nStructure is documented below.",
        Container_ClusterIpAllocationPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MonitoringConfig",
        "Monitoring configuration for the cluster.\nStructure is documented below.",
        Container_ClusterMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location (region or zone) in which the cluster\nmaster will be created, as well as the default node location. If you specify a\nzone (such as `us-central1-a`), the cluster will be a zonal cluster with a\nsingle cluster master. If you specify a region (such as `us-west1`), the\ncluster will be a regional cluster with multiple masters spread across zones in\nthe region, and with default node locations in those zones as well",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Fleet",
        "Fleet configuration for the cluster. Structure is documented below.",
        Container_ClusterFleet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "InitialNodeCount",
        "The number of nodes to create in this\ncluster's default node pool. In regional or multi-zonal clusters, this is the\nnumber of nodes per zone. Must be set if `node_pool` is not set. If you're using\n`gcp.container.NodePool` objects with no default node pool, you'll need to\nset this to a value of at least `1`, alongside setting\n`remove_default_node_pool` to `true`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GatewayApiConfig",
        "Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.",
        Container_ClusterGatewayApiConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ConfidentialNodes",
        "Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.",
        Container_ClusterConfidentialNodes_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DatabaseEncryption",
        "Structure is documented below.",
        Container_ClusterDatabaseEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableTpu",
        "Whether to enable Cloud TPU resources in this cluster.\nSee the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AuthenticatorGroupsConfig",
        "Configuration for the\n[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.\nStructure is documented below.",
        Container_ClusterAuthenticatorGroupsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableAutopilot",
        "Enable Autopilot for this cluster. Defaults to `false`.\nNote that when this option is enabled, certain features of Standard GKE are not available.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)\nfor available features.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "IdentityServiceConfig",
        ". Structure is documented below.",
        Container_ClusterIdentityServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableKubernetesAlpha",
        "Whether to enable Kubernetes Alpha features for\nthis cluster. Note that when this option is enabled, the cluster cannot be upgraded\nand will be automatically deleted after 30 days.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableIntranodeVisibility",
        "Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterIpv4Cidr",
        "The IP address range of the Kubernetes pods\nin this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one\nautomatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will\ndefault a new cluster to routes-based, where `ip_allocation_policy` is not defined.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "LoggingService",
        "The logging service that the cluster should\nwrite logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),\n`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WorkloadAltsConfig",
        'Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.\n\n<a name="nested_default_snat_status"></a>The `default_snat_status` block supports',
        Container_ClusterWorkloadAltsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ReleaseChannel",
        'Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)\nfeature, which provide more control over automatic upgrades of your GKE clusters.\nWhen updating this field, GKE imposes specific version requirements. See\n[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)\nfor more details; the `gcp.container.getEngineVersions` datasource can provide\nthe default version for a channel. Note that removing the `release_channel`\nfield from your config will cause the provider to stop managing your cluster\'s\nrelease channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`\nchannel. Structure is documented below.',
        Container_ClusterReleaseChannel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PodSecurityPolicyConfig",
        "Configuration for the\n[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.\nStructure is documented below.",
        Container_ClusterPodSecurityPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "ResourceLabels",
        "The GCE resource labels (a map of key/value pairs) to be applied to the cluster.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultSnatStatus",
        "[GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below",
        Container_ClusterDefaultSnatStatus_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AllowNetAdmin",
        "Enable NET_ADMIN for the cluster. Defaults to\n`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`\nset to `true`).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Parameters used in creating the default node pool.\nGenerally, this field should not be used at the same time as a\n`gcp.container.NodePool` or a `node_pool` block; this configuration\nmanages the default node pool, which isn't recommended to be used.\nStructure is documented below.",
        Container_ClusterNodeConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MeshCertificates",
        "Structure is documented below.",
        Container_ClusterMeshCertificates_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LoggingConfig",
        "Logging configuration for the cluster.\nStructure is documented below.",
        Container_ClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MasterAuth",
        "The authentication information for accessing the\nKubernetes master. Some values in this block are only returned by the API if\nyour service account has permission to get credentials for your GKE cluster. If\nyou see an unexpected diff unsetting your client cert, ensure you have the\n`container.clusters.getCredentials` permission.\nStructure is documented below.",
        Container_ClusterMasterAuth_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeVersion",
        "The Kubernetes version on the nodes. Must either be unset\nor set to the same value as `min_master_version` on create. Defaults to the default\nversion set by GKE which is not necessarily the latest version. This only affects\nnodes in the default node pool. While a fuzzy version can be specified, it's\nrecommended that you specify explicit versions as the provider will see spurious diffs\nwhen fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's\n`version_prefix` field to approximate fuzzy versions.\nTo update nodes in other node pools, use the `version` attribute on the node pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TpuConfig",
        "TPU configuration for the cluster.",
        Container_ClusterTpuConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableFqdnNetworkPolicy",
        "Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the cluster, unique within the project and\nlocation.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeletionProtection",
        "Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in\nTerraform state, a terraform destroy or terraform apply that would delete the cluster will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClusterTelemetry",
        "Configuration for\n[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,\nStructure is documented below.",
        Container_ClusterClusterTelemetry_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CostManagementConfig",
        "Configuration for the\n[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.\nStructure is documented below.",
        Container_ClusterCostManagementConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaintenancePolicy",
        "The maintenance policy to use for the cluster. Structure is\ndocumented below.",
        Container_ClusterMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MinMasterVersion",
        "The minimum version of the master. GKE\nwill auto-update the master to new versions, so this does not guarantee the\ncurrent master version--use the read-only `master_version` field to obtain that.\nIf unset, the cluster's version will be set by GKE to the version of the most recent\nofficial release (which is not necessarily the latest version).  Most users will find\nthe `gcp.container.getEngineVersions` data source useful - it indicates which versions\nare available. If you intend to specify versions manually,\n[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)\ndescribe the various acceptable formats for this field.\n\n> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`\nto the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a\nregion are guaranteed to support the same version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableLegacyAbac",
        "Whether the ABAC authorizer is enabled for this cluster.\nWhen enabled, identities in the system, including service accounts, nodes, and controllers,\nwill have statically granted permissions beyond those provided by the RBAC configuration or IAM.\nDefaults to `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodePoolAutoConfig",
        "Node pool configs that apply to auto-provisioned node pools in\n[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and\n[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.",
        Container_ClusterNodePoolAutoConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableShieldedNodes",
        "Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableL4IlbSubsetting",
        "Whether L4ILB Subsetting is enabled for this cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "DefaultMaxPodsPerNode",
        "The default maximum number of pods\nper node in this cluster. This doesn't work on \"routes-based\" clusters, clusters\nthat don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)\nfor more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AddonsConfig",
        "The configuration for addons supported by GKE.\nStructure is documented below.",
        Container_ClusterAddonsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EnableK8sBetaApis",
        "Configuration for Kubernetes Beta APIs.\nStructure is documented below.",
        Container_ClusterEnableK8sBetaApis_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BinaryAuthorization",
        "Configuration options for the Binary\nAuthorization feature. Structure is documented below.",
        Container_ClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DnsConfig",
        "Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.",
        Container_ClusterDnsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NodePools",
        'List of node pools associated with this cluster.\nSee gcp.container.NodePool for schema.\n**Warning:** node pools defined inside a cluster can\'t be changed (or added/removed) after\ncluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability\nto say "these are the _only_ node pools associated with this cluster", use the\ngcp.container.NodePool resource instead of this property.',
        Container_ClusterNodePool_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SecurityPostureConfig",
        "Enable/Disable Security Posture API features for the cluster. Structure is documented below.",
        Container_ClusterSecurityPostureConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ResourceUsageExportConfig",
        "Configuration for the\n[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.\nStructure is documented below.",
        Container_ClusterResourceUsageExportConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WorkloadIdentityConfig",
        "Workload Identity allows Kubernetes service accounts to act as a user-managed\n[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).\nStructure is documented below.",
        Container_ClusterWorkloadIdentityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RemoveDefaultNodePool",
        "If `true`, deletes the default node\npool upon cluster creation. If you're using `gcp.container.NodePool`\nresources with no default node pool, this should be set to `true`, alongside\nsetting `initial_node_count` to at least `1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The name or self_link of the Google Compute Engine\nnetwork to which the cluster is connected. For Shared VPC, set this to the self link of the\nshared network.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableMultiNetworking",
        "Whether multi-networking is enabled for this cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServiceExternalIpsConfig",
        "Structure is documented below.",
        Container_ClusterServiceExternalIpsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClusterAutoscaling",
        "Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to\nautomatically adjust the size of the cluster and create/delete node pools based\non the current needs of the cluster's workload. See the\n[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)\nfor more details. Structure is documented below.",
        Container_ClusterClusterAutoscaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkPolicy",
        "Configuration options for the\n[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)\nfeature. Structure is documented below.",
        Container_ClusterNetworkPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NotificationConfig",
        "Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.",
        Container_ClusterNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatapathProvider",
        "The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VerticalPodAutoscaling",
        "Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.\nStructure is documented below.",
        Container_ClusterVerticalPodAutoscaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateIpv6GoogleAccess",
        "The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).",
        [],
        false,
        false,
      ),
    ];
  }
}
